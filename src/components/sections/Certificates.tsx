import { SectionHeading } from "@/components/common/SectionHeading";
import { CertificateCard } from "@/components/cards/CertificateCard";
import { certificates } from "@/data/certificates";

export function Certificates() {
  return (
    <section id="certificates" className="relative py-24 scroll-mt-20" aria-labelledby="certs-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Certificates"
          title="Validated. Verified. Earned."
          subtitle="A growing collection of industry certifications across offensive security and networking."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((c) => (
            <CertificateCard key={c.title} cert={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
