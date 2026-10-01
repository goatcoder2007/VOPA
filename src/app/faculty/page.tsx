import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { PageCta } from "@/components/PageCta";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, pageImages } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { facultyMembers, facultyCount } from "@/data/faculty";

export const metadata = buildMetadata({
  title: "Faculty & Staff",
  description: `Meet the ${facultyCount} teachers and staff of Valley of Peace SDA Academy in Valley of Peace, Belize — Bible, Mathematics, Science, Business, Spanish and Information Technology.`,
  path: "/faculty/",
  image: pageImages.faculty,
});

function initials(name: string) {
  return name
    .split(" ")
    .filter((part) => /[a-z]/i.test(part))
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export default function FacultyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Faculty", path: "/faculty/" }])}
      />
      <PageHeader
        eyebrow="Faculty & Staff"
        title="The people behind the classrooms"
        subtitle="Small classes mean teachers know every student by name. Here is the team who teach, guide, and care for your child."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Team"
            title={`${facultyCount} people, one mission`}
            description="Every one of our teachers knows their craft and cares for the students in front of them. Would you like to meet them? Come see a class in session."
            align="center"
          />

          <p className="mt-6 text-center text-sm text-gray max-w-2xl mx-auto">
            The subjects listed are each teacher&rsquo;s main class. They also
            lead and support other areas of the curriculum, so ask us who
            covers a subject you&rsquo;re curious about.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {facultyMembers.map((member) => (
              <article
                key={`${member.name}-${member.role}`}
                className="group overflow-hidden rounded-2xl bg-white border border-blue-deep/10 hover:border-gold/60 hover:shadow-xl hover:shadow-blue-deep/10 transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-blue-deep/5">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={`${member.name}, ${member.role} at Valley of Peace SDA Academy`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={
                        member.photoFocus
                          ? { objectPosition: member.photoFocus }
                          : undefined
                      }
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-deep to-blue-mid flex items-center justify-center">
                      <span className="text-4xl font-bold text-white/90 tracking-tight">
                        {initials(member.name)}
                      </span>
                    </div>
                  )}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-blue-deep/70 to-transparent"
                  />
                  <p className="absolute bottom-3.5 left-4 right-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white drop-shadow-sm">
                    {member.role}
                  </p>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-charcoal tracking-tight leading-tight">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                    {member.departments.join(" &middot; ")}
                  </p>
                  <ul className="mt-3.5 flex flex-wrap gap-1.5">
                    {member.subjects.map((subject) => (
                      <li
                        key={subject}
                        className="text-[11px] font-semibold text-blue-deep bg-blue-deep/[0.06] rounded-md px-2 py-1.5"
                      >
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Want to meet the team in person?"
        description="Book a campus visit and sit in on a class. It's the fastest way to feel whether VOPA is right for your family."
        primary={{ label: "Start Your Application", href: "/admissions" }}
        secondary={{ label: "Schedule a Visit", href: "/contact" }}
      />
    </>
  );
}
