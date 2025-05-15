"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    title: "SRE Intern",
    company: "Nutanix Inc.",
    period: "Jan 2025 - June 2025",
    description: [
      "Mastered 5 key enterprise infrastructure domains (Hardware, Linux, Networking, VMware, Nutanix HCI), with 20+ hands-on labs.",
      "Resolved 15+ complex break-fix scenarios and customer simulations through systematic RCA for complex infrastructure issues, while demonstrating professionalism and communication under pressure environment.",
      "Contributed to an internal SaaS tool, developed 10+ components that improved workflow efficiency by 30% for Managers.",
    ],
    skills: ["Linux", "Networking", "VMware", "Nutanix HCI", "RCA", "SaaS"],
    hasDetailedView: true,
  },
  {
    title: "React Development Trainee & UI/UX Design Intern",
    company: "LanguifyAI",
    period: "Sept 2023 - Dec 2023",
    description: [
      "Designed user interfaces and dashboards for Conversational AI using Figma, enhancing UI/UX understanding.",
      "Collaborated with the 6-member tech team to learn to implement designs, advancing my React skills.",
    ],
    skills: ["React", "UI/UX", "Figma", "Conversational AI"],
    hasDetailedView: false,
  },
  {
    title: "Web Development Intern",
    company: "Metwiz Materials Ltd.",
    period: "Aug 2023 - Sep 2023",
    description: [
      "Developed 10+ responsive front-end components for the company's website using HTML, CSS, JS, Bootstrap, and React.",
      "Enhanced React proficiency through collaborative learning with 2 senior developers, completing project 20% ahead of schedule.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
    hasDetailedView: false,
  },
  {
    title: "Secretary & Finance Head",
    company: "VBC VIT (Technical Club)",
    period: "Jan 2023 - Jan 2025",
    description: [
      "Organized and chaired weekly meetings, managed documentation, and liaised with the SWO and 3 administrative departments.",
      "Trained 40+ students and led financial operations, securing ₹1.2 lakhs in sponsorships and a ₹19k profit during Riviera 2024",
    ],
    skills: ["Leadership", "Financial Management", "Documentation", "Training"],
    hasDetailedView: false,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My journey through various roles and organizations that have shaped my skills and expertise.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`relative mb-16 ${
              idx % 2 === 0 ? "md:pr-16 md:text-left md:ml-auto md:mr-1/2" : "md:pl-16 md:ml-1/2"
            } md:w-5/12 z-10`}
          >
            <Card className={`border-2 hover:shadow-lg transition-shadow duration-300`}>
              <CardHeader className={idx % 2 === 0 ? "md:text-left" : ""}>
                <div className={`flex items-center gap-2 mb-2`}>
                  <Building className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                </div>
                <CardDescription className={`flex flex-col gap-1`}>
                  <span className="text-lg font-medium">{exp.company}</span>
                  <span className="flex items-center gap-1 text-sm">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className={`space-y-2 mb-4`}>
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className={`flex flex-wrap gap-2 mt-4`}>
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="rounded-full">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {exp.hasDetailedView && (
                  <div className="mt-6 text-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                      onClick={() => {
                        document.getElementById("nutanix-detailed")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      Read Detailed Experience <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Timeline dot 
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div> */}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
