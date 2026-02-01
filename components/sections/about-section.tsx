"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="relative w-full py-20 px-4 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a <strong>Generative AI Engineer and Backend Engineer</strong> with 5+ years of experience building production-grade, scalable systems at the intersection of data, machine learning, and AI. I specialize in <strong>multi-agent architectures, retrieval-augmented generation (RAG), and cloud-native deployments</strong>, taking ideas from prototype to enterprise scale. Across financial services, healthcare, and public-sector platforms, I deliver systems that prioritize <strong>accuracy, reliability, and responsible AI</strong>. My strength lies in designing <strong>end-to-end AI systems</strong>—from data pipelines and model evaluation to low-latency APIs and CI/CD-driven validation.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I naturally gravitate toward <strong>leadership and ownership</strong>, enjoy mentoring junior engineers and undergraduate students, and care deeply about <strong>engineering rigor, explainability, and real-world impact</strong>—not just demos. Outside of work, you'll find me at the gym, experimenting in the kitchen, or planning my next trip. I'm a firm believer that strong engineers grow both inside and outside the codebase.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Years Exp</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary">6+</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Certifications</div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card/50 border-border/50 border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">MS in Computer Science</CardTitle>
                    <CardDescription>Rutgers University</CardDescription>
                  </div>
                  <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded">2022 - 2024</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic">Specialization: Machine Learning, NLP, and Artificial Intelligence</p>
              </CardContent>
            </Card>
        </motion.div>
      </div>
    </section>
  )
}
