import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { PageCta } from "@/components/PageCta";
import { Timeline } from "@/components/Timeline";
import { StatsBand } from "@/components/StatsBand";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, pageImages } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "About Our School",
  description:
    "Valley of Peace SDA Academy is a Christ-centred school in Valley of Peace, Belize, founded in 2006. Meet our mission, values, leadership, and community.",
  path: "/about/",
  image: pageImages.about,
});

const values = [
  {
    icon: <Icon name="Cross" size={26} />,
    title: "Christ at the Center",
    description:
      "Every subject is taught through the lens of a loving God. Spiritual growth is not an add-on, it is the foundation.",
  },
  {
    icon: <Icon name="ShieldCheck" size={26} />,
    title: "Academic Rigor",
    description:
      "We hold students to high standards because we believe every child is capable of greatness. Curriculum that challenges and inspires.",
  },
  {
    icon: <Icon name="Heart" size={26} />,
    title: "Known and Loved",
    description:
      "Small classes mean every student is known by name. Teachers walk alongside each child's growth, not just their grades.",
  },
  {
    icon: <Icon name="UsersThree" size={26} />,
    title: "Family Partnership",
    description:
      "Education is a three-way covenant between school, student, and home. We grow together.",
  },
];

const leadership = [
  {
    name: "Justine Myvette",
    role: "Principal",
    bio: "Leading the academy with a commitment to faith, excellence, and the growth of every student.",
    initials: "JM",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about/" }])} />
      <PageHeader
        eyebrow="About Us"
        title="A community built on faith and purpose"
        subtitle="Since 2006, families have found belonging here. Meet the people, the values, and the story behind Valley of Peace SDA Academy."
        imageUrl="/community.jpg"
        imageAlt="Valley of Peace students together on a school outing"
        imageOpacity={100}
        overlay="light"
        imagePosition="center 35%"
        size="tall"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeader
                eyebrow="Our Mission"
                title="Nurturing minds, building character"
                description="Valley of Peace SDA Academy exists to provide Christ-centered education that develops the whole student — intellectually, spiritually, physically, and socially. We partner with families to prepare students for a life of purpose, service, and leadership."
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-gold-pale rounded-xl px-5 py-4">
                  <Icon name="Sparkle" size={22} weight="fill" className="text-gold" />
                  <div>
                    <div className="text-sm font-semibold text-charcoal">
                      Established 2006
                    </div>
                    <div className="text-xs text-gray">
                      Two decades of faith in action
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gold-pale rounded-xl px-5 py-4">
                  <Icon name="BookOpen" size={22} weight="fill" className="text-gold" />
                  <div>
                    <div className="text-sm font-semibold text-charcoal">
                      Forms 1-4
                    </div>
                    <div className="text-xs text-gray">
                      High school education
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-blue-deep/10">
                <Image
                  src="https://picsum.photos/seed/vopa-mission/800/600"
                  alt="Students in a classroom at Valley of Peace"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:block bg-gold text-charcoal rounded-2xl px-6 py-5 shadow-lg -rotate-2">
                <div className="text-2xl font-bold tracking-tight">20+</div>
                <div className="text-xs font-semibold uppercase tracking-wider">
                  Years of service
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-blue-deep/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsBand
            stats={[
              { value: "110+", label: "Students enrolled" },
              { value: "2006", label: "Year founded" },
              { value: "Forms 1-4", label: "Form levels" },
              { value: "2024", label: "Free tuition for all" },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Stand For"
            title="The values that guide us"
            description="Everything we do flows from who we are. These four commitments shape every classroom, hallway, and conversation."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-white rounded-2xl border border-blue-deep/10 p-7 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-deep/10 flex items-center justify-center text-blue-deep mb-5 group-hover:bg-gold/15 group-hover:text-gold transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-base font-semibold text-charcoal mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Our Story"
                title="Two decades of small beginnings and steady growth"
                description="The village of Valley of Peace was founded in 1982, and in 2006 the academy opened as its first high school. Our history is marked not by chance but by purpose — each milestone brought more families, more opportunities, and a deepening commitment to faith and learning."
              />
              <div className="mt-8 max-w-sm rounded-2xl bg-blue-deep p-7 text-white">
                <div className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
                  A word from our principal
                </div>
                <p className="text-white/90 leading-relaxed text-sm mb-5">
                  &ldquo;We like to say VOPA is a school where your child is
                  known. Not a number, not a statistic, but a beloved child of
                  God with boundless potential.&rdquo;
                </p>
                <div className="text-sm font-semibold">Justine Myvette</div>
                <div className="text-xs text-white/60">Principal</div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <Timeline />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Leadership"
            title="Guided by purpose"
            align="center"
          />
          <div className="mt-14 flex justify-center">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="bg-white rounded-2xl border border-blue-deep/10 p-7 text-center max-w-sm w-full hover:shadow-lg hover:shadow-blue-deep/5 transition-shadow duration-300"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-deep to-blue-mid flex items-center justify-center text-white text-xl font-bold mb-5">
                  {person.initials}
                </div>
                <h3 className="text-lg font-semibold text-charcoal">
                  {person.name}
                </h3>
                <p className="text-sm text-gold font-medium mb-3">
                  {person.role}
                </p>
                <p className="text-sm text-gray leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="From Our Families"
            title="What our community says"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="VOPA has been an answer to prayer. Our daughter wakes up excited to go to school — that says everything."
              name="The Ramirez Family"
              role="Parents of a Form 1 student"
              index={0}
            />
            <TestimonialCard
              quote="The teachers genuinely know my son. They pray for him, push him academically, and celebrate his growth like it's their own."
              name="Sarah Thompson"
              role="Mother of a Form 2 student"
              index={1}
            />
            <TestimonialCard
              quote="I graduated from VOPA and now my own children walk the same halls. The foundation I received here shaped who I am."
              name="David Osei-Wusu"
              role="Alumnus, Class of 2009"
              index={2}
            />
          </div>
        </div>
      </section>

      <PageCta
        title="Come see what a VOPA education feels like"
        description="The best way to understand our community is to experience it. Schedule a campus visit and meet us in person."
        primary={{ label: "Start Your Application", href: "/admissions" }}
        secondary={{ label: "Schedule a Visit", href: "/contact" }}
      />
    </>
  );
}