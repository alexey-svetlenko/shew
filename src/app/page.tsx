import { AboutSection } from "@/components/AboutSection";
import { CoachingProcessSection } from "@/components/CoachingProcessSection";
import { CompletionSection } from "@/components/CompletionSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { InvitationSection } from "@/components/InvitationSection";
import { ReflectionJourney } from "@/components/ReflectionJourney";
import { TelegramSection } from "@/components/TelegramSection";
import { TransitionSection } from "@/components/TransitionSection";
import { VideoSection } from "@/components/VideoSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <VideoSection />
        <TransitionSection />

        <ReflectionJourney />
        <CompletionSection />
        <InvitationSection />
        <AboutSection />
        <CoachingProcessSection />
        <TelegramSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
