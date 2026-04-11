import { cv } from "@/cv.config";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-14 print:py-8 print:px-0">
        <Header
          name={cv.name}
          title={cv.title}
          photo={cv.photo}
          contact={cv.contact}
          cvPdfPath={cv.cvPdfPath}
        />
        <Summary summary={cv.summary} />
        <Experience experience={cv.experience} />
        <Projects projects={cv.projects} />
        <Skills skills={cv.skills} />
        <Education education={cv.education} />
        <Footer name={cv.name} contact={cv.contact} />
      </main>
    </div>
  );
}
