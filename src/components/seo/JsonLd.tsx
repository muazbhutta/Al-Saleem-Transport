/**
 * Renders a JSON-LD <script> tag. Accepts any schema object (or array).
 * Server component — no client JS shipped.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD is trusted, developer-authored data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
