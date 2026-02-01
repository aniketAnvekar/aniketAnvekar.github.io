"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const experiences = [
  {
    date: "Jul 2025 – Present",
    title: "Generative AI Engineer",
    company: "Vanguard",
    location: "Malvern, PA",
    project: "Architected an enterprise-grade Generative AI platform using multi-agent orchestration and optimized RAG pipelines, with scalable conversational memory, cloud-native deployment, and CI/CD-based evaluation for production reliability.",
    outcomes: [
      "Improved complex query resolution accuracy by 25%",
      "Reduced LLM context redundancy by 15%",
      "Achieved sub-100ms API latency under high concurrency",
      "Lowered inference costs across enterprise workloads",
    ]
  },
  {
    date: "Jul 2024 – Jun 2025",
    title: "AWS Conversational AI Engineer",
    company: "Kansas Department of Labor",
    location: "Edison, NJ",
    project: "Designed and deployed a scalable, cloud-native conversational AI platform on AWS to modernize legacy public-sector workflows, including real-time validation, analytics, and operational dashboards at production scale.",
    outcomes: [
      "Supported 10K+ daily users at peak",
      "Reduced claim processing time by 60%",
      "Cut operational issue triage from 6 hours to 30 minutes through real-time streaming analytics",
    ]
  },
  {
    date: "May 2021 – Aug 2022",
    title: "Machine Learning Engineer",
    company: "Eli Lilly & Company",
    location: "Remote",
    project: "Developed an end-to-end clinical AI platform combining deep learning–based medical imaging, explainable MLOps pipelines, and compliant NLP workflows to support healthcare decision-making at scale.",
    outcomes: [
      "Achieved 0.91 ROC-AUC in breast cancer risk identification",
      "Automated 50K+ medical document summaries",
      "Delivered explainable, bias-monitored models aligned with clinical and regulatory standards",
    ]
  },
  {
    date: "Aug 2019 – May 2021",
    title: "Data Scientist",
    company: "Reserve Bank of India",
    location: "Mumbai, India",
    project: "Led the development of a distributed data engineering and machine learning platform, combining large-scale web data extraction, containerized orchestration, and distributed model training to support analytical decision-making.",
    outcomes: [
      "Achieved a 99.5% crawl success rate",
      "Reduced pipeline downtime by 30%",
      "Improved house price prediction performance by 25% RMSE over baseline models",
    ]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-primary/30"
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0 shadow-[0_0_10px_hsl(var(--primary))]"></div>
              
              <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <span className="text-primary font-semibold text-sm">{exp.date}</span>
                  <div className="mt-1">
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>{exp.company} • {exp.location}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-primary font-semibold mb-2">Project:</p>
                      <p className="text-foreground text-sm">{exp.project}</p>
                    </div>
                    <div>
                      <p className="text-primary font-semibold mb-2">Outcome:</p>
                      <ul className="space-y-2">
                        {exp.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex gap-3 items-start text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
