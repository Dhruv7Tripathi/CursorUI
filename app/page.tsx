// import { Navbar } from "@/components/landingpage/landing-navbar";
import HeroSection from "@/components/landingpage/heroSection";
import Footer from "@/components/landingpage/landing-footer";
import FAQ from "@/components/landingpage/faq";
import { Pricing } from "@/components/landingpage/pricing";
import { TestimonialsSection } from "@/components/landingpage/testimonial-section";
import BentoSection from "@/components/landingpage/bento-grid";
export default function HomePage() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      {/* <Navbar /> */}
      <HeroSection />

      {/* Main Content Container */}
      {/* <div className={`
        relative
        min-h-[calc(100vh-82px)]
        px-4 sm:px-6
        md:mx-4 md:px-0
        md:border-l md:border-r md:border-neutral-200 md:dark:border-neutral-900
        
        lg:mx-8 xl:mx-12
        lg:border-l lg:border-r lg:border-neutral-200 lg:dark:border-neutral-900
      `}>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">

          <section className="pt-8 sm:pt-12 lg:pt-16">
          </section>

          <section>
            <BentoSection />
          </section>

          <section>
            <Pricing />
          </section>

          <section>
            <TestimonialsSection />
          </section>

          <section>
            <FAQ />
          </section>

          <section className="pb-0">
            <Footer />
          </section>

        </div>
      </div> */}
    </div>
  );
}