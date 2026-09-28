import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { PageCta } from "@/components/PageCta";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, pageImages } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { departments, facultyCount } from "@/data/faculty";

export const metadata = buildMetadata({
  title: "Faculty & Staff",
  description: `Meet the ${facultyCount} teachers and staff of Valley of Peace SDA Academy in Valley of Peace, Belize — Bible, English, Mathematics, Science, Business, Agriculture and more.`,
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
        imageUrl="/community.jpg"
        imageAlt="Valley of Peace SDA Academy faculty and students"
        overlay="light"
        imagePosition="center 35%"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Team"
            title={`${facultyCount} people, one mission`}
            description="Every department below is staffed by teachers who know their craft and care for the students in front of them. Would you like to meet them? Come see a class in session."
            align="center"
          />

          <div className="mt-16 space-y-14">
            {departments.map((department) => (
              <div key={department.name}>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-blue-deep/10 flex items-center justify-center text-blue-deep shrink-0">
                    <Icon name={department.icon} size={24} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal tracking-tight">
                    {department.name}
                  </h2>
                </div>
                <p className="text-sm text-gray leading-relaxed max-w-3xl mb-7 md:ml-16">
                  {department.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {department.members.map((member) => (
                    <div
                      key={`${department.name}-${member.name}-${member.role}`}
                      className="flex items-start gap-4 bg-white rounded-2xl border border-blue-deep/10 p-6 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
                    >
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={`${member.name}, ${member.role} at Valley of Peace SDA Academy`}
                          width={56}
                          height={56}
                          className="w-14 h-14 rounded-full object-cover shrink-0"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-deep to-blue-mid flex items-center justify-center text-white text-base font-bold shrink-0">
                          {initials(member.name)}
                        </div>
                      )}
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold text-charcoal">
                          {member.name}
                        </h3>
                        <p className="text-xs text-gold font-semibold uppercase tracking-wider mt-0.5">
                          {member.role}
                        </p>
                        <ul className="mt-2.5 flex flex-wrap gap-1.5">
                          {member.subjects.map((subject) => (
                            <li
                              key={subject}
                              className="text-[11px] font-medium text-gray bg-gray-50 border border-blue-deep/10 rounded-md px-2 py-1"
                            >
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
