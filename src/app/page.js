import Contact from "@/Components/Shared/Contact/Contact";
import Education from "@/Components/Shared/Education/Education";
import Experiences from "@/Components/Shared/Experiences/Experiences";
import Footer from "@/Components/Shared/Footer/Footer";
import Projects from "@/Components/Shared/Projects/Projects";
import Skills from "@/Components/Shared/Skills/Skills";
import ParticlesCom from "./ParticlesCom";
import Navbar from "@/Components/Shared/Navbar/Navbar";
import HomeAbout from "@/Components/Shared/HomeAbout/HomeAbout";


export default function Home() {

  return (
    <main>

      <div className="relative z-40 min-h-[50vh]">
        <ParticlesCom />
        <div className="w-full bg-transparent" id="about">
          <Navbar />
          <HomeAbout />
        </div>
      </div>


      <Skills />
      <Experiences />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
