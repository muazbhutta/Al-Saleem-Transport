'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MessageCircle, Mail, User, Phone, MapPin, Calendar, Clock, Users } from 'lucide-react';
import { site, whatsappLink, mailLink } from '@/lib/site';
import TimeField from './TimeField';

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

const empty: Form = {
  name: '',
  phone: '',
  service: 'airport',
  vehicle: 'any',
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

  function update<K extends keyof Form>(key: K, value: Form[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  /** Build a readable, pre-filled message body used by both WhatsApp and email. */
  function buildMessage() {
    const serviceLabel = t(`serviceOptions.${form.service}`);
    const vehicleLabel = t(`vehicleOptions.${form.vehicle}`);
    const lines = [
      t('waIntro'),
      '',
      `${t('labelName')}: ${form.name}`,
      `${t('labelPhone')}: ${form.phone}`,
      `${t('labelService')}: ${serviceLabel}`,
      `${t('labelVehicle')}: ${vehicleLabel}`,
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
    window.open(whatsappLink(buildMessage()), '_blank', 'noopener,noreferrer');
  }

  function submitEmail() {
    if (!isValid()) {
      setError(true);
      return;
    }
    setError(false);
    const url = `${mailLink}?subject=${encodeURIComponent(t('emailSubject'))}&body=${encodeURIComponent(
      buildMessage(),
    )}`;
    window.location.href = url;
  }

  const fieldClass =
    'w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 placeholder:text-navy-300 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40';
  const labelClass = 'mb-1.5 flex items-center gap-1.5 text-sm font-medium text-navy-700';

  const serviceOpts = ['airport', 'hotel', 'ziyarat', 'umrah', 'intercity', 'custom'];
  const vehicleOpts = ['any', 'sedan', 'suv', 'van', 'bus'];

  return (
    <form onSubmit={submitWhatsApp} className="card flex flex-col gap-6" noValidate>
      {/* Contact details */}
      <fieldset className="flex flex-col gap-4">
        <legend className="mb-1 text-sm font-semibold uppercase tracking-wider text-teal-dark">
          {t('sectionContact')}
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              <User className="h-4 w-4 text-navy-400" aria-hidden /> {t('name')} *
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
          <div>
            <label htmlFor="phone" className={labelClass}>
              <Phone className="h-4 w-4 text-navy-400" aria-hidden /> {t('phone')} *
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
        <legend className="mb-1 text-sm font-semibold uppercase tracking-wider text-teal-dark">
          {t('sectionTrip')}
        </legend>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="service" className={labelClass}>
              {t('service')}
            </label>
            <select
              id="service"
              className={fieldClass}
              value={form.service}
              onChange={(e) => update('service', e.target.value)}
            >
              {serviceOpts.map((o) => (
                <option key={o} value={o}>
                  {t(`serviceOptions.${o}`)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="vehicle" className={labelClass}>
              {t('vehicle')}
            </label>
            <select
              id="vehicle"
              className={fieldClass}
              value={form.vehicle}
              onChange={(e) => update('vehicle', e.target.value)}
            >
              {vehicleOpts.map((o) => (
                <option key={o} value={o}>
                  {t(`vehicleOptions.${o}`)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="pickup" className={labelClass}>
              <MapPin className="h-4 w-4 text-navy-400" aria-hidden /> {t('pickup')} *
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
          <div>
            <label htmlFor="dropoff" className={labelClass}>
              <MapPin className="h-4 w-4 text-navy-400" aria-hidden /> {t('dropoff')} *
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
          <div>
            <label htmlFor="date" className={labelClass}>
              <Calendar className="h-4 w-4 text-navy-400" aria-hidden /> {t('date')} *
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
          <div>
            <label htmlFor="time" className={labelClass}>
              <Clock className="h-4 w-4 text-navy-400" aria-hidden /> {t('time')}
            </label>
            <TimeField
              id="time"
              className={fieldClass}
              value={form.time}
              onChange={(v) => update('time', v)}
            />
          </div>
          <div>
            <label htmlFor="passengers" className={labelClass}>
              <Users className="h-4 w-4 text-navy-400" aria-hidden /> {t('passengers')}
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
        <p role="alert" className="rounded-xl bg-maroon-50 px-4 py-3 text-sm text-maroon-600">
          {t('errorRequired')}
        </p>
      )}

      <div className="flex flex-col gap-3">
        <button type="submit" className="btn-whatsapp w-full text-base">
          <MessageCircle className="h-5 w-5" aria-hidden />
          {t('submit')}
        </button>
        <button
          type="button"
          onClick={submitEmail}
          className="btn-outline w-full"
        >
          <Mail className="h-4 w-4" aria-hidden />
          {t('submitEmail')}
        </button>
        <p className="text-center text-xs text-navy-400">{t('requiredHint')}</p>
      </div>
    </form>
  );
}
