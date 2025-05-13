"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Server, Code, Cloud, Layout, Wrench } from "lucide-react"

const skillCategories = [
  {
    id: "systems",
    name: "Systems & Infrastructure",
    icon: <Server className="h-8 w-8 text-primary" />,
    skills: ["Linux", "Windows Server", "VMware ESXi", "Nutanix AOS & AHV", "System Administration"],
  },
  {
    id: "core",
    name: "Core Subjects",
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "OS", "Computer Networks", "System Design", "C++"],
  },
  {
    id: "web",
    name: "Web Development",
    icon: <Layout className="h-8 w-8 text-primary" />,
    skills: ["React", "HTML", "CSS", "JavaScript", "SQL", "MongoDB"],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: <Cloud className="h-8 w-8 text-primary" />,
    skills: ["AWS", "CI/CD", "Git", "Docker"],
  },
  {
    id: "tools",
    name: "Tools & Technologies",
    icon: <Wrench className="h-8 w-8 text-primary" />,
    skills: ["Prism", "vCenter", "ncli", "acli", "Wireshark", "Cisco Packet Tracer", "Jira", "Postman"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my technical skills across various domains.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">{category.icon}</div>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-secondary/50 hover:bg-primary/20 hover:text-primary-foreground px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
