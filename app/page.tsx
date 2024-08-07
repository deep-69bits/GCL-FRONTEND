import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import Hero from "@/components/Home/Hero";
import Players from "@/components/Home/Players";
import Teams from "@/components/Home/Teams";
import KnowledgeSection from "@/components/KnowledgeSection";
import LabelStripSection from "@/components/LabelStripSection";
import Layout from "@/components/Layout/Layout";
import MentorSection from "@/components/MentorsSection";
import ParticipationSection from "@/components/ParticipationSection";
import PrizesSection from "@/components/PrizesSection";
import RegistrationSection from "@/components/RegistrationSection";
import ShortlistedTeams from "@/components/ShortlistedTeams";
import SponsorSection from "@/components/SponsorSection";
import TeamSection from "@/components/TeamSection";
import { ThemesSection } from "@/components/ThemesSection";
import TimelineSection from "@/components/TimelineSection";
import LeagueFormat from "@/components/LeagueFormatSection";

export default function Home() {
  const timeLabels = [
    {
      message: "Registration And Idea Submission By ",
      left: false,
      boldText: "26th May",
    },
    {
      message: "Concept Development by ",
      left: false,
      boldText: "26th May",
    },
    {
      message: "Concept refinement and submission by ",
      left: false,
      boldText: "26th May",
    },
    {
      message: "final showcase and presentation by ",
      left: false,
      boldText: "26th May",
    },
  ];
  const formatLabels = [
    {
      message: "Double Round Robin ",
      left: true,
      boldText: "6 Teams - ",
    },
    {
      message: "Best of Boards ",
      left: true,
      boldText: "6 Boards - ",
    },
    {
      message: "6 Players in Every Team ",
      left: true,
      boldText: "36 Players - ",
    },
    {
      message: "In Every Team ",
      left: true,
      boldText: "2 Women ",
    },
    {
      message: "Rapid Format ",
      left: true,
      boldText: "2.5 Hours ",
    },
    {
      message: "Each Team ",
      left: true,
      boldText: "10 Matches ",
    },
  ];
  return (
    <main className="bg-black ">
      <Layout>
       <Hero/>
       <Teams/>
       <LeagueFormat />
       <Players/>
      </Layout>
    </main>
  );
}
