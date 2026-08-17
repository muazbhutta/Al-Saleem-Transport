'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { MessageCircle, User, Phone, MapPin, Calendar, Clock, Users, CheckCircle2 } from 'lucide-react';
import { site, whatsappLink } from '@/lib/site';
import { trackContact } from '@/lib/gtag';
import TimeField from './TimeField';
import RouteChips from './RouteChips';
import VehiclePicker from './VehiclePicker';

type Form = {
  name: string;
  phone: string;
  service: string;
  vehicle: string;
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  passengers: string;
  notes: string;
};

const serviceOpts = ['airport', 'hotel', 'ziyarat', 'umrah', 'intercity', 'custom'];

const empty: Form = {
  name: '',
  phone: '',
  service: '',
  vehicle: '',
  pickup: '',
  dropoff: '',
  date: '',
  time: '',
  passengers: '1',
  notes: '',
};

export default function BookingForm() {
  const t = useTranslations('booking');
  const [form, setForm] = useState<Form>(empty);
  const [error, setError] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<keyof Form, boolean>>>({});
  const [activeChip, setActiveChip] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  /* Service pages link here as /pick-drop?service=airport, so the visitor
     lands with their service already chosen rather than re-picking it.
     Read from location rather than useSearchParams(): that hook forces a
     client-side bailout and would break static generation of this page for
     all 11 locales. The value is only needed after mount, so this is enough. */
  useEffect(() => {
    const preset = new URLSearchParams(window.location.search).get('service');
    if (preset && serviceOpts.includes(preset)) {
      setForm((f) => ({ ...f, service: preset }));
    }
  }, []);

  /** Per-field validity, for inline messages rather than one banner. */
  const invalid = {
    name: !form.name.trim(),
    phone: !form.phone.trim(),
    pickup: !form.pickup.trim(),
    dropoff: !form.dropoff.trim(),
    date: !form.date,
  };
  const showError = (k: keyof typeof invalid) => (touched[k] || error) && invalid[k];

  function update<K extends keyof Form>(key: K, value: Form[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  /** Build a readable, pre-filled message body for the WhatsApp chat. */
  function buildMessage() {
    // Only name a service/vehicle the visitor actually has. `service` now
    // arrives solely from a service page's ?service= link, and `vehicle` is
    // optional, so an unset value must produce no line at all rather than a
    // misleading default.
    const serviceLabel = form.service ? t(`serviceOptions.${form.service}`) : '';
    const vehicleLabel = form.vehicle ? t(`vehicleOptions.${form.vehicle}`) : '';
    const lines = [
      t('waIntro'),
      '',
      `${t('labelName')}: ${form.name}`,
      `${t('labelPhone')}: ${form.phone}`,
      ...(serviceLabel ? [`${t('labelService')}: ${serviceLabel}`] : []),
      ...(vehicleLabel ? [`${t('labelVehicle')}: ${vehicleLabel}`] : []),
      `${t('labelPickup')}: ${form.pickup}`,
      `${t('labelDropoff')}: ${form.dropoff}`,
      `${t('labelDate')}: ${form.date}`,
      `${t('labelTime')}: ${form.time}`,
      `${t('labelPassengers')}: ${form.passengers}`,
    ];
    if (form.notes.trim()) lines.push(`${t('labelNotes')}: ${form.notes}`);
    return lines.join('\n');
  }

  function isValid() {
    return (
      form.name.trim() && form.phone.trim() && form.pickup.trim() && form.dropoff.trim() && form.date
    );
  }

  function submitWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid()) {
      setError(true);
      return;
    }
    setError(false);
    // UNCHANGED: conversion fires, then the pre-filled WhatsApp chat opens.
    trackContact('whatsapp');
    window.open(whatsappLink(buildMessage()), '_blank', 'noopener,noreferrer');
    setSent(true);
  }

  const fieldClass =
    'w-full min-h-[44px] rounded-xl border border-emerald-800/15 bg-surface-raised px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-brass-500 focus:outline-none focus:ring-2 focus:ring-brass-500/40';
  const fieldErrorClass =
    'w-full min-h-[44px] rounded-xl border border-red-400 bg-surface-raised px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-red-400/40';
  const labelClass = 'mb-1.5 flex items-center gap-1.5 text-sm font-medium text-ink-soft';


  return (
    <form
      onSubmit={submitWhatsApp}
      className="flex flex-col gap-7 rounded-2xl border border-emerald-800/10 bg-surface-base p-5 text-start shadow-card sm:p-6 md:p-8"
      noValidate
    >
      <RouteChips
        active={activeChip}
        onPick={(pickup, dropoff, id) => {
          update('pickup', pickup);
          update('dropoff', dropoff);
          setActiveChip(id);
        }}
      />
      {/* Contact details */}
      <fieldset className="flex flex-col gap-4">
        <legend className="mb-1 text-sm font-semibold uppercase tracking-[0.16em] text-brass-800">
          {t('sectionContact')}
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="min-w-0">
            <label htmlFor="name" className={labelClass}>
              <User className="h-4 w-4 text-emerald-600" aria-hidden /> {t('name')} *
            </label>
            <input
              id="name"
              className={fieldClass}
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              placeholder={t('namePlaceholder')}
              required
            />
          </div>
          <div className="min-w-0">
            <label htmlFor="phone" className={labelClass}>
              <Phone className="h-4 w-4 text-emerald-600" aria-hidden /> {t('phone')} *
            </label>
            <input
              id="phone"
              type="tel"
              dir="ltr"
              className={fieldClass}
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              placeholder={t('phonePlaceholder')}
              required
            />
          </div>
        </div>
      </fieldset>

      {/* Trip details */}
      <fieldset className="flex flex-col gap-4">
        <legend className="mb-1 text-sm font-semibold uppercase tracking-[0.16em] text-brass-800">
          {t('sectionTrip')}
        </legend>

        <VehiclePicker value={form.vehicle} onChange={(v) => update('vehicle', v)} />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="min-w-0">
            <label htmlFor="pickup" className={labelClass}>
              <MapPin className="h-4 w-4 text-emerald-600" aria-hidden /> {t('pickup')} *
            </label>
            <input
              id="pickup"
              className={fieldClass}
              value={form.pickup}
              onChange={(e) => update('pickup', e.target.value)}
              placeholder={t('pickupPlaceholder')}
              required
            />
          </div>
          <div className="min-w-0">
            <label htmlFor="dropoff" className={labelClass}>
              <MapPin className="h-4 w-4 text-emerald-600" aria-hidden /> {t('dropoff')} *
            </label>
            <input
              id="dropoff"
              className={fieldClass}
              value={form.dropoff}
              onChange={(e) => update('dropoff', e.target.value)}
              placeholder={t('dropoffPlaceholder')}
              required
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="min-w-0">
            <label htmlFor="date" className={labelClass}>
              <Calendar className="h-4 w-4 text-emerald-600" aria-hidden /> {t('date')} *
            </label>
            <input
              id="date"
              type="date"
              className={fieldClass}
              value={form.date}
              onChange={(e) => update('date', e.target.value)}
              required
            />
          </div>
          <div className="min-w-0">
            <label htmlFor="time" className={labelClass}>
              <Clock className="h-4 w-4 text-emerald-600" aria-hidden /> {t('time')}
            </label>
            <TimeField
              id="time"
              className={fieldClass}
              value={form.time}
              onChange={(v) => update('time', v)}
            />
          </div>
          <div className="min-w-0">
            <label htmlFor="passengers" className={labelClass}>
              <Users className="h-4 w-4 text-emerald-600" aria-hidden /> {t('passengers')}
            </label>
            <input
              id="passengers"
              type="number"
              min={1}
              max={60}
              className={fieldClass}
              value={form.passengers}
              onChange={(e) => update('passengers', e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="notes" className={labelClass}>
            {t('notes')}
          </label>
          <textarea
            id="notes"
            rows={3}
            className={fieldClass}
            value={form.notes}
            onChange={(e) => update('notes', e.target.value)}
            placeholder={t('notesPlaceholder')}
          />
        </div>
      </fieldset>

      {error && (
        <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700">
          {t('errorRequired')}
        </p>
      )}

      {/* Success state — the form stays filled so a mis-tap can resend. */}
      {sent && (
        <div
          role="status"
          className="flex gap-3 rounded-2xl border border-emerald-600/30 bg-emerald-500/10 p-4"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" aria-hidden />
          <div className="text-start">
            <p className="text-sm font-semibold text-ink">{t('successTitle')}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{t('successBody')}</p>
          </div>
        </div>
      )}

      {/* Desktop submit. On mobile the sticky bar below carries the action. */}
      <div className="flex flex-col gap-3 max-md:hidden">
        <button type="submit" className="btn-whatsapp w-full text-base">
          <MessageCircle className="h-5 w-5" aria-hidden />
          {t('submit')}
        </button>
        <p className="text-center text-xs text-ink-faint">{t('fareNote')}</p>
        <p className="text-center text-xs text-ink-faint">{t('requiredHint')}</p>
      </div>

      {/*
        Sticky mobile submit. The form is long on a phone and the action used to
        sit below the fold, so the primary CTA is always reachable.
        `pb-[env(safe-area-inset-bottom)]` keeps it clear of the iOS home bar.
      */}
      <div className="md:hidden">
        <p className="mb-3 text-center text-xs text-ink-faint">{t('fareNote')}</p>
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-emerald-800/10 bg-surface-raised/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur">
          <button type="submit" className="btn-whatsapp w-full text-base">
            <MessageCircle className="h-5 w-5" aria-hidden />
            {t('submit')}
          </button>
        </div>
        {/* spacer so the sticky bar never covers the last field */}
        <div aria-hidden className="h-20" />
      </div>
    </form>
  );
}
