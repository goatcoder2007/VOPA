import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Programs } from "@/components/Programs";
import { Timeline } from "@/components/Timeline";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "SDA High School in Valley of Peace, Belize | Valley of Peace SDA Academy",
  },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Welcome to Valley of Peace"
        title="Where Faith Meets Academic Excellence"
        subtitle="Nurturing minds, building character, and fostering faith-based excellence in education since 2006."
        primaryCta={{ label: "Apply Now", href: "/admissions" }}
        secondaryCta={{ label: "Learn More", href: "/about" }}
        imageUrl="/gradthrow.jpg"
        imageAlt="Valley of Peace SDA Academy campus"
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Programs"
            title="Excellence Across Every Dimension"
            description="We offer a comprehensive high school education that develops the whole student — academically, spiritually, and personally."
            align="center"
          />
          <div className="mt-12">
            <Programs />
          </div>
          <div className="mt-10 text-center">
            <Button href="/admissions">Start Your Application</Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our History"
            title="A Legacy of Faith & Learning"
            description="From our founding in 2006 to today, we've grown while staying true to our mission."
          />
          <div className="mt-12">
            <Timeline />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-blue-deep ring-1 ring-inset ring-gold/20 px-6 py-14 md:px-16 md:py-20 text-center">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4 max-w-3xl mx-auto">
                Begin Your Child&apos;s Journey at Valley of Peace
              </h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
                Applications are now open for the upcoming school year. Join a
                community where faith and academic excellence grow together.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button href="/admissions">Apply Now</Button>
                <Button href="/about" variant="secondary">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
