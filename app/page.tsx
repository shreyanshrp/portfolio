import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import Certifications from "@/components/certifications"

export default function Home() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <Education />
          <Certifications />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}
