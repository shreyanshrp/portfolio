"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Network, Terminal, Database, Cpu, Layers, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"

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

export function DetailedExperienceDialog() {
  const [open, setOpen] = useState(false)
  const searchParams = useSearchParams()

  // Check for the experience query parameter
  useEffect(() => {
    const experience = searchParams.get("experience")
    if (experience === "nutanix") {
      setOpen(true)
    }
  }, [searchParams])

  // Check for hash fragment
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#nutanix-detail") {
        // Scroll to experience section
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
        // Open the modal
        setOpen(true)
      }
    }

    // Check on mount
    handleHashChange()

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return (
    <>
      <Button variant="outline" size="sm" className="rounded-full" onClick={() => setOpen(true)}>
        Read Detailed Experience <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Nutanix SRE Internship Experience</DialogTitle>
            <DialogDescription>
              A comprehensive overview of my 6-month intensive internship at Nutanix
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <div className="mb-8">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 bg-gradient-to-br from-background to-primary/5">
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed">
                    Selected for a highly intensive 6-month internship program focused on enterprise infrastructure,
                    Linux, virtualization, networking, and Nutanix technologies (AHV, AOS, Prism, LCM).
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Technical Modules</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {modules.map((module, index) => (
                  <Card key={index} className="border hover:shadow-sm transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-primary/10 p-2 rounded-full">{module.icon}</div>
                        <h4 className="text-lg font-bold">{module.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{module.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Mock Customer Calls</h3>
              <Card className="border hover:shadow-sm transition-all duration-300">
                <CardContent className="p-6">
                  <p className="text-base leading-relaxed">
                    Regularly participated in mock calls where Subject Matter Experts (SMEs) simulated real-world
                    customer escalations under stressful, time-bound environments — testing both communication and
                    troubleshooting depth.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Technical Evaluations</h3>
              <Card className="border hover:shadow-sm transition-all duration-300">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {evaluations.map((evaluation, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary text-xl leading-none">•</span>
                        <span className="text-sm text-muted-foreground">{evaluation}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-base">
                    Demonstrated strong communication and professionalism under pressure, gaining customer-handling
                    expertise critical for SRE/Support roles.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Additional Contributions</h3>
              <Card className="border hover:shadow-sm transition-all duration-300">
                <CardContent className="p-6">
                  <p className="text-base leading-relaxed">
                    Parallelly contributed to development of an internal SaaS tool, working on frontend development,
                    collaborating with cross-functional teams.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[
                      "React",
                      "TypeScript",
                      "Material UI",
                      "Frontend Development",
                      "Cross-functional Collaboration",
                      "SaaS",
                    ].map((skill, i) => (
                      <Badge key={i} variant="secondary" className="rounded-full text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" onClick={() => setOpen(false)} className="rounded-full">
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
