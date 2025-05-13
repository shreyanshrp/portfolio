"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

const certifications = [
  {
    title: "AWS Solution Architect Associate",
    validTill: "2027",
    score: "Score: 769/1000",
    link: "https://drive.google.com/file/d/1ZIrJfqSso0QKc_Q0fR-C81QkUkGwqqzo/view?usp=sharing",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    title: "AWS Cloud Practitioner",
    validTill: "2027",
    score: "Score: 916/1000",
    link: "https://drive.google.com/file/d/1uMxk0o6ypn5295fHJx5KGEF5t2lude0L/view?usp=sharing",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    title: "Cisco Certified Network Associate (CCNA)",
    validTill: "2028",
    score: "Certified Professional",
    link: "https://drive.google.com/file/d/1vUCjXt05-A8xju-57XmWqjBflRmUqwSx/view?usp=sharing",
    icon: "/placeholder.svg?height=80&width=80",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Certifications</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Industry-recognized certifications that validate my expertise and knowledge.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            className="block"
          >
            <Card className="h-full border-2 hover:border-primary transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-6 flex justify-center">
                  <Award className="h-16 w-16 text-primary" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">Valid till: {cert.validTill}</p>
                  <p className="text-primary font-medium">{cert.score}</p>
                </div>
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
