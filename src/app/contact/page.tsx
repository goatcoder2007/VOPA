import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";

export const metadata = {
  title: "Contact — Valley of Peace SDA Academy",
  description:
    "Get in touch with Valley of Peace SDA Academy. We're here to answer your questions about admissions, academics, and campus life.",
};

const contactChannels = [
  {
    icon: <Icon name="MapPin" size={22} />,
    label: "Visit Us",
    value: "Arias Road, Valley of Peace",
    sub: "Main campus entrance",
  },
  {
    icon: <Icon name="Phone" size={22} />,
    label: "Call Us",
    value: "604-1198",
    sub: "Office line, Monday-Friday",
  },
  {
    icon: <Icon name="EnvelopeSimple" size={22} />,
    label: "Email Us",
    value: "info@vopa.edu",
    sub: "We reply within one business day",
  },
];

const hours = [
  { day: "Monday - Friday", time: "7:30 AM - 4:00 PM" },
  { day: "Saturday & Sunday", time: "Closed" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We would love to hear from you"
        subtitle="Questions about admissions, academics, or a campus visit? Our team is here to help you and your family."
        imageUrl="https://picsum.photos/seed/vopa-contact/1920/900"
        imageAlt="Valley of Peace campus entrance"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <SectionHeader
                eyebrow="Get in Touch"
                title="Reach us, right here"
                description="Whatever brings you here, we're ready to help. Pick the channel that works best for you."
              />

              <div className="mt-10 space-y-5">
                {contactChannels.map((channel) => (
                  <div
                    key={channel.label}
                    className="group flex items-start gap-4 rounded-2xl border border-blue-deep/10 p-5 hover:border-gold/50 hover:shadow-md hover:shadow-gold/5 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-deep/10 flex items-center justify-center text-blue-deep shrink-0 group-hover:bg-gold/15 group-hover:text-gold transition-colors duration-300">
                      {channel.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-charcoal">
                        {channel.label}
                      </div>
                      <div className="text-sm text-gray">{channel.value}</div>
                      <div className="text-xs text-gray-light mt-0.5">
                        {channel.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-gray-50 border border-blue-deep/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Clock" size={20} className="text-gold" />
                  <h3 className="text-sm font-semibold text-charcoal">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-gray">{h.day}</span>
                      <span className="text-charcoal font-medium">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-blue-deep/10 flex items-start gap-2.5">
                  <Icon
                    name="CalendarCheck"
                    size={18}
                    className="text-gold shrink-0 mt-0.5"
                  />
                  <p className="text-xs text-gray leading-relaxed">
                    After-hours tours and shadow days available by appointment.
                    Just ask!
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-gray-50 border border-blue-deep/10 p-6 md:p-9 h-full">
                <h2 className="text-xl md:text-2xl font-bold text-charcoal tracking-tight mb-1.5">
                  Send us a message
                </h2>
                <p className="text-sm text-gray mb-7">
                  Fill out the form below and we will get back to you — usually
                  within one business day.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Find Us"
            title="Welcome to our campus"
            description="We're located on Arias Road in Valley of Peace. Stop by for a visit — we would love to show you around."
            align="center"
          />
          <div className="mt-12 aspect-[16/7] rounded-2xl overflow-hidden shadow-lg shadow-blue-deep/5 border border-blue-deep/10">
            <img
              src="https://picsum.photos/seed/vopa-map/1200/525"
              alt="Map showing Valley of Peace SDA Academy location"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray">
            <span className="flex items-center gap-2">
              <Icon name="MapPin" size={16} weight="duotone" className="text-gold" />
              Arias Road, Valley of Peace
            </span>
            <span className="flex items-center gap-2">
              <Icon name="Phone" size={16} weight="duotone" className="text-gold" />
              604-1198
            </span>
            <span className="flex items-center gap-2">
              <Icon name="EnvelopeSimple" size={16} weight="duotone" className="text-gold" />
              info@vopa.edu
            </span>
          </div>
        </div>
      </section>
    </>
  );
}