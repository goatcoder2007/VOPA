import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { PageCta } from "@/components/PageCta";
import { Icon } from "@/components/Icon";
import { ElectiveDeck } from "@/components/ElectiveDeck";

export const metadata = {
  title: "Academics — Valley of Peace SDA Academy",
  description:
    "Explore the academic program at Valley of Peace SDA Academy. A shared foundation in Forms 1 and 2, then Business or Science pathways from Form 3.",
};

const coreSubjects = [
  {
    icon: <Icon name="BookOpenText" size={22} />,
    title: "English",
    description:
      "Reading, writing, and language arts that build clear communication and confident expression.",
  },
  {
    icon: <Icon name="ComputerTower" size={22} />,
    title: "Information Technology",
    description:
      "Computing skills and digital literacy for a connected world, from the basics to practical tools.",
  },
  {
    icon: <Icon name="Flag" size={22} />,
    title: "Belizean Studies",
    description:
      "Understanding our nation's history, geography, culture, and heritage — with pride and perspective.",
  },
  {
    icon: <Icon name="HandsPraying" size={22} />,
    title: "Bible",
    description:
      "Daily Bible class that grounds our learning in faith and shapes character and values.",
  },
  {
    icon: <Icon name="MathOperations" size={22} />,
    title: "Mathematics",
    description:
      "Foundations in numeracy, problem solving, and logical thinking that grow with every form.",
  },
  {
    icon: <Icon name="BookOpen" size={22} />,
    title: "Reading Comprehension",
    description:
      "Dedicated reading practice that builds fluency, vocabulary, and a lifelong love of books.",
  },
  {
    icon: <Icon name="Plant" size={22} />,
    title: "Agriculture",
    description:
      "A hands-on program in every form — planting, growing, and understanding where food comes from.",
  },
];

const formOneElectives = [
  {
    icon: <Icon name="Palette" size={20} />,
    title: "Visual Arts",
    description: "Drawing, painting, and creativity",
  },
  {
    icon: <Icon name="Shovel" size={20} />,
    title: "Landscaping",
    description: "Caring for the grounds, plants, and green spaces",
  },
  {
    icon: <Icon name="ForkKnife" size={20} />,
    title: "Food & Nutrition",
    description: "Cooking basics and healthy eating",
    image: "/cooking.jpg",
    photoAlt: "Valley of Peace students cooking in the school kitchen",
    photoLabel: "Food & Nutrition",
  },
];

const formTwoElectives = [
  {
    icon: <Icon name="PencilLine" size={20} />,
    title: "Graphic Design",
    description: "Design, layout, and visual communication",
  },
  {
    icon: <Icon name="ForkKnife" size={20} />,
    title: "Food & Nutrition",
    description: "Deeper kitchen skills and nutrition science",
    image: "/cooking.jpg",
    photoAlt: "Valley of Peace students cooking in the school kitchen",
    photoLabel: "Food & Nutrition",
  },
  {
    icon: <Icon name="MusicNotes" size={20} />,
    title: "Music",
    description: "Theory, performance, and worship music",
    image: "/music.jpg",
    photoAlt: "Valley of Peace SDA Academy music group",
    photoLabel: "Our Music Group",
  },
];

const streams = [
  {
    icon: <Icon name="Briefcase" size={28} />,
    title: "Business",
    description:
      "Students who choose the Business stream as they enter Form 3 explore the worlds of commerce, finance, and enterprise — building practical skills for careers in the private sector and for managing their own futures.",
    points: [
      "Accounting and records",
      "Commerce and enterprise",
      "Office practice and communications",
      "Preparation for business careers",
    ],
  },
  {
    icon: <Icon name="Atom" size={28} />,
    title: "Science",
    description:
      "The Science stream takes students deeper into the natural world — biology, chemistry, and physics — with hands-on lab work that prepares them for health, research, and technical careers.",
    points: [
      "Biology and life sciences",
      "Chemistry fundamentals",
      "Physics and applied science",
      "Lab work and scientific method",
    ],
  },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="A shared foundation, then your path"
        subtitle="Every student builds a common core in Forms 1 and 2 — then, from Form 3, chooses a Business or Science pathway that fits their calling and gifts."
        imageUrl="https://picsum.photos/seed/vopa-academics/1920/900"
        imageAlt="Students learning at Valley of Peace"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Forms 1 & 2"
            title="The common core"
            description="In Forms 1 and 2, every student takes the same foundation of subjects. This shared core makes sure no one misses the basics — and it means a complete schedule of learning for everyone. Agriculture is part of the program in every form."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreSubjects.map((subject) => (
              <div
                key={subject.title}
                className="rounded-2xl border border-blue-deep/10 bg-white p-6 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-deep/10 flex items-center justify-center text-blue-deep mb-4">
                  {subject.icon}
                </div>
                <h3 className="text-base font-semibold text-charcoal mb-1.5">
                  {subject.title}
                </h3>
                <p className="text-sm text-gray leading-relaxed">
                  {subject.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Electives"
            title="Explore a little wider"
            description="Alongside the common core, students pick an elective each term to try something hands-on and discover what they love."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ElectiveDeck
              title="Form 1 Electives"
              subtitle="Choose one hands-on class to complement the core"
              electives={formOneElectives}
            />
            <ElectiveDeck
              title="Form 2 Electives"
              subtitle="A new set of choices to go a little deeper"
              accent="gold"
              electives={formTwoElectives}
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Form 3 & Beyond"
            title="Two pathways, one purpose"
            description="From Form 3 onward, students choose a pathway that shapes their senior years. Both keep academics rigorous, values at the center, and students on a clear path after graduation."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {streams.map((stream) => (
              <div
                key={stream.title}
                className="rounded-2xl border border-blue-deep/10 overflow-hidden hover:shadow-lg hover:shadow-blue-deep/5 transition-shadow duration-300"
              >
                <div className="bg-blue-deep/5 px-8 py-7 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center text-gold shrink-0">
                    {stream.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal tracking-tight">
                      {stream.title}
                    </h3>
                    <p className="text-xs text-gold font-semibold uppercase tracking-widest">
                      From Form 3
                    </p>
                  </div>
                </div>
                <div className="bg-white px-8 py-7">
                  <p className="text-sm text-gray leading-relaxed mb-6">
                    {stream.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {stream.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-charcoal"
                      >
                        <Icon
                          name="ArrowRight"
                          size={16}
                          weight="bold"
                          className="text-gold shrink-0 mt-0.5"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-blue-deep/10">
                <img
                  src="/sports.jpg"
                  alt="Valley of Peace students competing in sports"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden md:block bg-gold text-charcoal rounded-2xl px-6 py-5 shadow-lg rotate-2">
                <div className="text-lg font-bold tracking-tight">
                  Go VOPA!
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider">
                  Athletics
                </div>
              </div>
            </div>
            <div>
              <SectionHeader
                eyebrow="P.E. & Athletics"
                title="Training in sport, growing in spirit"
                description="Physical education is part of every form. Beyond the classroom, our students step onto the field and the court to compete against other Seventh-day Adventist schools across the region — bringing their best, showing teamwork, and representing VOPA with pride."
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl border border-blue-deep/10 px-5 py-4">
                  <Icon
                    name="Trophy"
                    size={22}
                    weight="fill"
                    className="text-gold"
                  />
                  <div>
                    <div className="text-sm font-semibold text-charcoal">
                      Volleyball
                    </div>
                    <div className="text-xs text-gray">
                      Inter-SDA school matches
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl border border-blue-deep/10 px-5 py-4">
                  <Icon
                    name="Trophy"
                    size={22}
                    weight="fill"
                    className="text-gold"
                  />
                  <div>
                    <div className="text-sm font-semibold text-charcoal">
                      Football
                    </div>
                    <div className="text-xs text-gray">
                      Inter-SDA school matches
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <SectionHeader
                eyebrow="Our Approach"
                title="Small classes, big impact"
                description="With small classes, our teachers know every child by name. Individualized attention means no student falls behind — and every student is challenged to grow."
              />
            </div>
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="rounded-2xl bg-white border border-blue-deep/10 p-6 text-center">
                  <div className="text-3xl font-bold text-blue-deep tracking-tight">
                    18:1
                  </div>
                  <div className="text-sm text-gray mt-1">
                    Student-teacher ratio
                  </div>
                </div>
                <div className="rounded-2xl bg-white border border-blue-deep/10 p-6 text-center">
                  <div className="text-3xl font-bold text-blue-deep tracking-tight">
                    98%
                  </div>
                  <div className="text-sm text-gray mt-1">
                    College acceptance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCta
        title="Find the path that fits your child"
        description="Talk with our academic team about which pathway makes the most sense for your family."
        primary={{ label: "Start Your Application", href: "/admissions" }}
        secondary={{ label: "Schedule a Visit", href: "/contact" }}
      />
    </>
  );
}