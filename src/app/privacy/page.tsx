import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Notice",
  description:
    "How Valley of Peace SDA Academy collects, uses and protects the personal information you share through this website, including applications and enquiries.",
  path: "/privacy/",
});

const sections: {
  heading: string;
  body: string[];
  bullets?: string[];
}[] = [
  {
    heading: "What we collect",
    body: [
      "This website only collects information you choose to send us through a form. Depending on which form you use, that may include:",
    ],
    bullets: [
      "Enquiries: your name, email address, phone number and the message you write.",
      "Applications: the student's name, date of birth, form applying for, gender, home address, previous school, and the name, phone number and email address of a parent or guardian.",
      "Technical data such as your IP address and browser type, which our hosting provider records in server logs for security and troubleshooting.",
    ],
  },
  {
    heading: "Why we collect it",
    body: [
      "We use this information for one purpose: to respond to you. For an enquiry that means answering your question. For an application it means assessing the application, corresponding with a parent or guardian, and keeping the admission record.",
    ],
    bullets: [
      "We do not sell, rent or trade personal information to anyone.",
      "We do not use information submitted through this website for advertising.",
      "We do not send marketing email unless you separately ask us to.",
    ],
  },
  {
    heading: "Children's information",
    body: [
      "Applications include details about a student who is usually a minor. That information is submitted by a parent or guardian and is handled by our admissions office only. We collect the minimum we need to process an application, and we do not knowingly collect information from children directly through this website.",
      "If you are a student and you would like to see what we hold about you, or ask for it to be corrected or removed, ask a parent or guardian to contact us and we will help.",
    ],
  },
  {
    heading: "Who processes it for us",
    body: [
      "Form submissions are delivered through Formspree, a third-party service that receives the message and forwards it to our email. Our website is hosted on Cloudflare. Both providers process this data on our behalf under their own security and privacy commitments.",
      "Where we are legally required to, we may also disclose information, for example to a government or education authority.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "Enquiries are kept until you have been answered and for a short period afterwards, so we have a record of what was asked. Application records are kept for the admission cycle they relate to and for as long as we are required to keep an education record. Information you ask us to delete earlier, we delete earlier unless the law requires us to keep it.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You can ask us to give you a copy of the information we hold about you, correct anything that is wrong, or delete it. Because most of the information we hold comes from a parent or guardian on behalf of a student, we will normally need their agreement before we can act on a request made by the student.",
    ],
    bullets: [
      "Ask what we hold, or ask for a correction — email us and we will respond.",
      "Ask for information to be deleted — we will confirm what can and cannot be removed.",
      "Withdraw your consent at any time, by emailing us. This does not affect anything we already did before you withdrew it.",
    ],
  },
  {
    heading: "Cookies and analytics",
    body: [
      "This website does not use advertising cookies or cross-site tracking. If we later add analytics, this notice will be updated before it goes live and you will be told what is measured and how to opt out.",
    ],
  },
  {
    heading: "Changes to this notice",
    body: [
      "We update this page when our practices change. The date below is the most recent revision.",
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Notice",
          url: `${site.url}/privacy/`,
          description:
            "How Valley of Peace SDA Academy collects, uses and protects personal information submitted through this website.",
          inLanguage: "en-BZ",
          isPartOf: {
            "@type": "WebSite",
            name: site.name,
            url: `${site.url}/`,
          },
          publisher: {
            "@type": "School",
            name: site.name,
            url: `${site.url}/`,
            email: site.email,
            telephone: site.phoneE164,
          },
        }}
      />
      <PageHeader
        eyebrow="Legal"
        title="Privacy Notice"
        subtitle="What happens to anything you send us through this website, written in plain language."
        imageUrl="/community.jpg"
        imageAlt="Valley of Peace SDA Academy students together"
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base text-gray-700 leading-relaxed mb-10">
            {site.legalName} (&ldquo;the school&rdquo;, &ldquo;we&rdquo;)
            respects your privacy. This notice explains what personal
            information this website collects, why we collect it, and what you
            can ask us to do with it. It applies to the enquiry form on our{" "}
            <Link
              href="/contact"
              className="text-blue-deep underline underline-offset-2 hover:text-gold"
            >
              contact page
            </Link>{" "}
            and the application form on our{" "}
            <Link
              href="/admissions"
              className="text-blue-deep underline underline-offset-2 hover:text-gold"
            >
              admissions page
            </Link>
            .
          </p>

          {sections.map((section) => (
            <div key={section.heading} className="mb-10 last:mb-0">
              <h2 className="text-2xl font-bold text-charcoal mb-3 tracking-tight">
                {section.heading}
              </h2>
              {section.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base text-gray-700 leading-relaxed mb-3"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-2.5 mt-4">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-base text-gray-700 leading-relaxed"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="rounded-xl bg-blue-wash border border-blue-deep/10 p-6">
            <h2 className="text-lg font-bold text-charcoal mb-2">
              Questions about your information
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Write to us at{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-blue-deep underline underline-offset-2 hover:text-gold"
              >
                {site.email}
              </a>{" "}
              or call{" "}
              <a
                href={`tel:${site.phoneE164}`}
                className="text-blue-deep underline underline-offset-2 hover:text-gold"
              >
                {site.phone}
              </a>
              , quoting &ldquo;Privacy request&rdquo; in the subject line. We
              aim to respond within ten working days.
            </p>
          </div>

          <p className="text-xs text-gray-light mt-10 pt-6 border-t border-gray-200">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            . This notice is a plain-language summary prepared for this website
            and does not replace the school&rsquo;s official data protection
            documentation.
          </p>
        </div>
      </section>
    </>
  );
}
