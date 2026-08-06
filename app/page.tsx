import CrystalShatterTextPreview from "@/components/Previews/crystalshattertext";
import HeroSection from "@/components/landingpage/heroSection";
import SplitFlapTextPreview from "@/components/Previews/SplitFlapText";
import RetroShaderPreview from "@/components/Previews/retroshader";
import StretchContactPreview from "@/components/Previews/StretchText";
import TextShimmer from "@/components/code/textshimmer";
export default function HomePage() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      {/* <Navbar /> */}
      <HeroSection />
      <SplitFlapTextPreview />
      <CrystalShatterTextPreview />
      <RetroShaderPreview />
      <StretchContactPreview />
      <div className="flex flex-col items-center justify-center py-20">

        <TextShimmer
          className="mt-4 cursor-default pl-3 text-lg"
          repeatDelay={0.5}
          delay={1.5}
        >
          and more....
        </TextShimmer>
      </div>

    </div>
  );
}