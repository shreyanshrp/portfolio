"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const education = [
  {
    institution: "VIT University",
    location: "Vellore, Tamil Nadu",
    degree: "B. Tech Computer Science Engineering",
    period: "Sept 2021 - May 2025",
    achievements: ["CGPA: 8.8", "AIR 876 VITEEE"],
  },
  {
    institution: "GNFC Narmada Vidyalaya",
    location: "Bharuch, Gujarat",
    degree: "12th GSHEB",
    period: "June 2020 - May 2021",
    achievements: ["Percentage: 90.2"],
  },
  {
    institution: "SMCP Sanskar Vidya Bhavan",
    location: "Bharuch, Gujarat",
    degree: "10th CBSE",
    period: "June 2018 - May 2019",
    achievements: ["Percentage: 94.0"],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">My academic journey and educational qualifications.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl text-center">{edu.institution}</CardTitle>
                <CardDescription className="text-center font-medium">{edu.degree}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2 items-center text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="mt-4 text-center">
                    {edu.achievements.map((achievement, i) => (
                      <p key={i} className="font-medium text-primary">
                        {achievement}
                      </p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
