import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { PageCta } from "@/components/PageCta";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { ApplicationForm } from "@/components/ApplicationForm";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, pageImages } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Admissions & Tuition",
  description: `Apply to Valley of Peace SDA Academy in Valley of Peace, Belize. Forms 1-4, rolling admissions, financial aid available, and an online application that takes about 20 minutes.`,
  path: "/admissions/",
  image: pageImages.admissions,
});

const steps = [
  {
    icon: <Icon name="MagnifyingGlass" size={26} />,
    step: "01",
    title: "Inquire",
    description:
      "Fill out our inquiry form or give us a call. We'll answer your questions and send you an information packet.",
    duration: "1 day",
  },
  {
    icon: <Icon name="MapPin" size={26} />,
    step: "02",
    title: "Visit",
    description:
      "Schedule a campus tour and see our classrooms, meet our teachers, and feel the VOPA community firsthand.",
    duration: "1 hour",
  },
  {
    icon: <Icon name="ClipboardText" size={26} />,
    step: "03",
    title: "Apply",
    description:
      "Complete the online application — it takes about 20 minutes. Submit transcripts and teacher recommendations.",
    duration: "20 min",
  },
  {
    icon: <Icon name="UserCheck" size={26} />,
    step: "04",
    title: "Enroll",
    description:
      "Once accepted, complete enrollment forms, submit your tuition deposit, and join new family orientation.",
    duration: "Spring",
  },
];

const faqs = [
  {
    q: "What forms do you serve?",
    a: "Valley of Peace SDA Academy serves students in Forms 1 through 4, with a complete high school journey from first form to graduation.",
  },
  {
    q: "Do students need to be Seventh-day Adventist to apply?",
    a: "No. We welcome families of all faith backgrounds who share our values of academic excellence and character development. Spiritual life is woven into our culture, but faith is never coerced.",
  },
  {
    q: "Is financial aid available?",
    a: "Yes. We offer need-based financial aid and sibling discounts. Contact our admissions office for details and to learn about the application process.",
  },
  {
    q: "What is the application deadline?",
    a: "We accept applications on a rolling basis, but early application is encouraged as class sizes are limited and popular forms fill quickly.",
  },
  {
    q: "What documents are required?",
    a: "Completed application form, birth certificate, most recent school transcripts (for transfer students), and two teacher recommendations.",
  },
  {
    q: "Can we schedule a shadow visit?",
    a: "Absolutely. Prospective students are welcome to spend a half-day shadowing in their form. It's often the moment families say 'this is where we belong.'",
  },
];

const documents = [
  "Completed application form",
  "Birth certificate",
  "Most recent report card or transcript",
  "Two teacher recommendations",
  "Immunization records",
  "Enrollment contract signed by parent",
];

export default function AdmissionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Admissions", path: "/admissions/" }])} />
      <JsonLd data={faqSchema(faqs)} />
      <PageHeader
        eyebrow="Admissions"
        title="Your family's next chapter starts here"
        subtitle="We're excited you're considering Valley of Peace. Our admissions process is personal, transparent, and welcoming — here's how it works."
        imageUrl="https://picsum.photos/seed/vopa-admissions/1920/900"
        imageAlt="Students at Valley of Peace SDA Academy"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How to Apply"
            title="Four steps to your new school family"
            description="We've designed the process to be simple. Our admissions team walks alongside you at every step."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div
                key={s.step}
                className="relative rounded-2xl border border-blue-deep/10 bg-white p-7 hover:shadow-lg hover:shadow-blue-deep/5 hover:border-blue-deep/20 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-blue-deep/15 tracking-tight mb-2">
                  {s.step}
                </div>
                <div className="w-11 h-11 rounded-xl bg-blue-deep/10 flex items-center justify-center text-blue-deep mb-4">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray leading-relaxed mb-4">
                  {s.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  {s.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader
                eyebrow="Frequently Asked"
                title="Questions we hear from families"
                description="Choosing a school raises questions. Here are the ones parents ask us most."
              />
              <div className="mt-8 p-6 rounded-2xl bg-gold-pale border border-gold/30">
                <p className="text-sm text-charcoal leading-relaxed">
                  <span className="font-semibold">Have a different question?</span>{" "}
                  Our admissions team is happy to help. We respond within one
                  business day.
                </p>
                <Button href="/contact" className="mt-4">
                  Ask Us Anything
                </Button>
              </div>
            </div>
            <div>
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-blue-deep/10">
                <Image
                  src="/students-1.jpg"
                  alt="Three Valley of Peace students together on campus"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-5 -right-5 hidden md:block bg-gold text-charcoal rounded-2xl px-6 py-5 shadow-lg rotate-2">
                <div className="text-2xl font-bold tracking-tight">
                  Rolling
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider">
                  Admissions
                </div>
              </div>
            </div>
            <div>
              <SectionHeader
                eyebrow="Tuition & Aid"
                title="An investment in your child's future"
                description="We work with families to make a VOPA education accessible. Tuition varies by form, and financial aid is available for qualifying families."
              />
              <div className="mt-8 grid grid-cols-2 gap-5">
                <div className="rounded-2xl bg-gray-50 border border-blue-deep/10 p-6 text-center">
                  <div className="text-3xl font-bold text-blue-deep tracking-tight">
                    Forms 1-2
                  </div>
                  <div className="text-xs text-gray mt-2">
                    Lower form tuition
                  </div>
                </div>
                <div className="rounded-2xl bg-gray-50 border border-blue-deep/10 p-6 text-center">
                  <div className="text-3xl font-bold text-blue-deep tracking-tight">
                    Forms 3-4
                  </div>
                  <div className="text-xs text-gray mt-2">
                    Upper form tuition
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm text-gray leading-relaxed">
                Contact our admissions office for current tuition rates and
                financial aid options. We are committed to keeping a VOPA
                education within reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <SectionHeader
                eyebrow="Get Ready"
                title="What you'll need to apply"
                description="Gathering these documents ahead of time makes your application a 20-minute affair, not a weekend project."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-blue-deep/10 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-deep/10 flex items-center justify-center text-blue-deep">
                    <Icon name="FileText" size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal">
                    Application Checklist
                  </h3>
                </div>
                <ul className="divide-y divide-blue-deep/10">
                  {documents.map((doc) => (
                    <li
                      key={doc}
                      className="flex items-center gap-4 py-4 text-sm text-charcoal"
                    >
                      <span className="w-5 h-5 rounded-md border-2 border-gold/60 flex items-center justify-center shrink-0">
                        <Icon name="ArrowRight" size={12} weight="bold" className="text-gold" />
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-xl bg-blue-deep/5 p-5">
                  <p className="text-sm text-gray leading-relaxed mb-4">
                    Ready to begin? Start your application online — it takes
                    about 20 minutes.
                  </p>
                  <Button href="/admissions#apply-online" className="w-full sm:w-auto">
                    Apply Online
                  </Button>
                  <a
                    href="/admission-application-form.pdf"
                    download
                    className="mt-2.5 inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg border-2 border-blue-deep text-blue-deep hover:bg-blue-deep hover:text-white transition-all duration-200"
                  >
                    <Icon name="FileText" size={16} />
                    Download the PDF Form
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apply-online" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Apply Online"
                title="Start your online application"
                description="Fill out the form below and we'll receive it right at our admissions office. It takes about 20 minutes."
              />
              <div className="mt-8 rounded-2xl bg-gray-50 border border-blue-deep/10 p-6 md:p-9">
                <ApplicationForm />
              </div>
            </div>
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="rounded-2xl bg-blue-deep text-white p-7 md:p-8">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-gold mb-5">
                  <Icon name="FileText" size={24} />
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-2">
                  Prefer to apply on paper?
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  Download the official application form, fill it out by hand,
                  and email it to our admissions office or drop it off on your
                  next visit.
                </p>
                <a
                  href="/admission-application-form.pdf"
                  download
                  className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-gold text-charcoal text-sm font-semibold rounded-lg hover:bg-gold-light transition-all duration-200 active:scale-[0.98] hover:shadow-md hover:shadow-black/20"
                >
                  <Icon name="FileText" size={16} />
                  Download Application Form (PDF)
                </a>
                <div className="mt-6 pt-6 border-t border-white/15 space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon
                      name="EnvelopeSimple"
                      size={18}
                      weight="duotone"
                      className="text-gold shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                        Email it to
                      </div>
                      <a
                        href="mailto:info@vopa.edu"
                        className="text-sm font-medium hover:text-gold transition-colors"
                      >
                        info@vopa.edu
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon
                      name="MapPin"
                      size={18}
                      weight="duotone"
                      className="text-gold shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                        Or drop it off
                      </div>
                      <div className="text-sm text-white/80">
                        Arias Road, Valley of Peace
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCta
        title="Ready to get started?"
        description="Begin the application process or schedule a visit to see VOPA for yourself."
        primary={{ label: "Start Your Application", href: "/admissions" }}
        secondary={{ label: "Schedule a Visit", href: "/contact" }}
      />
    </>
  );
}