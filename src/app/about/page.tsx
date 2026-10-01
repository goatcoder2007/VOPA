import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { PageCta } from "@/components/PageCta";
import { Timeline } from "@/components/Timeline";

import { MissionVision } from "@/components/MissionVision";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, pageImages } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "About Our School",
  description:
    "Valley of Peace SDA Academy is a Christ-centred school in Valley of Peace, Belize, founded in 2006. Read our motto, mission, and vision, and meet the values that guide us.",
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
        overlay="soft"
        imagePosition="center 35%"
        size="tall"
      />

      <MissionVision />

      <section className="pt-16 md:pt-24 pb-20 md:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div>
              <SectionHeader
                eyebrow="Who We Are"
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
          </div>
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
                <div className="text-sm font-semibold">Justine Price</div>
                <div className="text-xs text-white/60">Principal</div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <Timeline />
            </div>
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