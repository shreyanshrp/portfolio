"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Network, Terminal, Database, Cpu, Layers } from "lucide-react"

const modules = [
  {
    title: "Hardware",
    icon: <Cpu className="h-8 w-8 text-primary" />,
    description:
      "Practical hands-on training with real server hardware; disassembled servers to understand components like SSDs, CPUs (NUMA), DIMMs, NICs, etc.",
  },
  {
    title: "Networking",
    icon: <Network className="h-8 w-8 text-primary" />,
    description:
      "Acquired CCNA; mastered L2-L3 concepts like routing, switching, VLANs, ACLs, and troubleshooting via CLI.",
  },
  {
    title: "Linux",
    icon: <Terminal className="h-8 w-8 text-primary" />,
    description:
      "Built Linux from scratch; strong command-line skills and troubleshooting expertise including service management, permissions, and file systems.",
  },
  {
    title: "Virtualization",
    icon: <Layers className="h-8 w-8 text-primary" />,
    description:
      "Hands-on with Windows Servers, VMware ESXi, vCenter, and Nutanix AHV; learned hypervisor-level debugging and configuration.",
  },
  {
    title: "System Design",
    icon: <Database className="h-8 w-8 text-primary" />,
    description:
      "Evaluated via assessments to design efficient, scalable datacenter architectures using provided hardware.",
  },
  {
    title: "Nutanix Stack",
    icon: <Server className="h-8 w-8 text-primary" />,
    description:
      "Comprehensive understanding of AOS architecture, services, AHV operations, Prism Central, and upgrades on OEM platforms (NX, Dell, Lenovo, HPE).",
  },
]

const evaluations = [
  "Break-fix labs: Diagnosed and resolved realistic technical issues across stack layers (network, virtualization, storage, compute).",
  "Conceptual evaluations: In-depth interviews and quizzes on core modules (Linux, VMware, Nutanix, networking).",
  "System Design presentations: Developed & delivered solutions to infrastructure use cases, justifying design trade-offs before senior technical leadership.",
]

export default function DetailedExperience() {
  return (
    <section id="nutanix-detailed" className="py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Nutanix SRE Internship Experience</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          A comprehensive overview of my 6-month intensive internship at Nutanix, focusing on enterprise infrastructure,
          Linux, virtualization, networking, and Nutanix technologies.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 bg-gradient-to-br from-background to-primary/5">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed">
                Selected for a highly intensive 6-month internship program focused on enterprise infrastructure, Linux,
                virtualization, networking, and Nutanix technologies (AHV, AOS, Prism, LCM).
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Technical Modules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full border-2 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-3 rounded-full">{module.icon}</div>
                      <h4 className="text-xl font-bold">{module.title}</h4>
                    </div>
                    <p className="text-muted-foreground">{module.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Mock Customer Calls</h3>
          <Card className="border-2 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed">
                Regularly participated in mock calls where Subject Matter Experts (SMEs) simulated real-world customer
                escalations under stressful, time-bound environments — testing both communication and troubleshooting
                depth.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Technical Evaluations</h3>
          <Card className="border-2 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {evaluations.map((evaluation, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-primary text-2xl leading-none">•</span>
                    <span className="text-muted-foreground">{evaluation}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="mt-6 text-lg">
                Demonstrated strong communication and professionalism under pressure, gaining customer-handling
                expertise critical for SRE/Support roles.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Additional Contributions</h3>
          <Card className="border-2 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed">
                Parallelly contributed to development of an internal SaaS tool, working on frontend development,
                collaborating with cross-functional teams.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  "React",
                  "TypeScript",
                  "Material UI",
                  "Frontend Development",
                  "Cross-functional Collaboration",
                  "SaaS",
                ].map((skill, i) => (
                  <Badge key={i} variant="secondary" className="rounded-full">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
