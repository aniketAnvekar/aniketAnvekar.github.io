"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef } from "react"

const skillCategories = [
  {
    title: "AI & Data Science",
    icon: "🧠",
    skills: [
      { name: "Generative AI (LLMs)", percentage: 95 },
      { name: "Machine Learning", percentage: 90 },
      { name: "Natural Language Processing", percentage: 88 },
      { name: "RAG & Prompt Engineering", percentage: 90 },
    ]
  },
  {
    title: "Engineering & Cloud",
    icon: "☁️",
    skills: [
      { name: "AWS (Lambda, S3, Bedrock)", percentage: 85 },
      { name: "Python / Backend", percentage: 92 },
      { name: "Docker & DevOps", percentage: 80 },
      { name: "Data Engineering & ETL", percentage: 85 },
    ]
  }
]

export function SkillsSection() {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute("data-width")
          if (width) {
            (entry.target as HTMLElement).style.width = width
          }
        }
      })
    }, { threshold: 0.5 })

    progressRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="relative w-full py-20 px-4 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: catIdx * 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: catIdx * 0.2 + skillIdx * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        ref={(el) => {
                          if (el) progressRefs.current[catIdx * 4 + skillIdx] = el
                        }}
                        data-width={`${skill.percentage}%`}
                        className="h-full bg-gradient-to-r from-primary to-primary/60"
                        initial={{ width: 0 }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
