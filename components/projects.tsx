"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code, BarChart3, Database, PenToolIcon as Tool } from "lucide-react"

const projects = [
  {
    title: "Case Review Assistant",
    description:
      "Developed an internal SaaS tool for Nutanix managers to streamline the case review process. Created 10+ components that improved workflow efficiency by 30%, enabling faster decision-making and better resource allocation.",
    icon: <Tool className="h-10 w-10 text-primary" />,
    skills: ["React", "TypeScript", "Material UI", "Node.js", "Express", "MongoDB"],
    links: {
      github: null, // Internal project, no public repo
      demo: null,
    },
  },
  {
    title: "Linux from Scratch",
    description:
      "Built a minimal custom Linux system in 5 days, compiling 30+ packages and configuring the toolchain, bootloader and kernel. Gained hands-on expertise in Linux internals, including kernel compilation.",
    icon: <Code className="h-10 w-10 text-primary" />,
    skills: ["Linux", "Kernel Compilation", "System Configuration", "Bootloader"],
    links: {
      github: "https://github.com/shreyanshrp/linux-from-scratch",
      demo: null,
    },
  },
  {
    title: "SpendWise",
    description:
      "Developed a finance tracker using MongoDB, ExpressJS, React, and NodeJS, incorporating transaction categorization and charts. Implementing auto-categorization of expenses from bank statements, boosting user efficiency by 40%.",
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    skills: ["MongoDB", "Express.js", "React", "Node.js", "Data Visualization"],
    links: {
      github: "https://github.com/shreyanshrp/spendwise",
      demo: "https://spendwiseweb.vercel.app/",
    },
  },
  {
    title: "ElevateMe",
    description:
      "Developed a real-time elevator monitoring system for VIT using React, Firebase, Python and scikit-learn. Implementing a machine learning model with scikit-learn to predict elevator arrival times, improving accuracy and reducing wait times for over 22,000 students across 24 hostels and academic blocks.",
    icon: <Database className="h-10 w-10 text-primary" />,
    skills: ["React", "Firebase", "Python", "scikit-learn", "Machine Learning", "Real-time Monitoring"],
    links: {
      github: "https://github.com/shreyanshrp/elevateme",
      demo: "https://elevateme.onrender.com/",
    },
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of my technical projects and applications that demonstrate my skills and problem-solving abilities.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative"
          >
            <Card className="h-full flex flex-col border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">{project.icon}</div>
                <CardTitle className="text-xl text-center">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-sm text-foreground mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="rounded-full text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center gap-4 pt-4">
                {project.links.github && (
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.links.demo && (
                  <Button asChild size="sm" className="rounded-full">
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>

            {/* Subtle border glow effect on hover */}
            {hoveredIndex === index && (
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse -z-10"></div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
