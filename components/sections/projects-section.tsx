"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Legal Document Q&A",
    description: "Multi-agent RAG system with 85% accuracy on complex legal queries.",
    icon: "🤖",
    tags: ["LangChain", "FAISS", "LLM"],
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Kidney Disease Classification",
    description: "Deep learning model achieving 81% accuracy for early diagnosis.",
    icon: "🔬",
    tags: ["TensorFlow", "MLFlow", "Deep Learning"],
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Airbnb Data Analytics",
    description: "Price prediction and visualization using Random Forest and Tableau.",
    icon: "📊",
    tags: ["Tableau", "Scikit-Learn", "Analytics"],
    color: "from-cyan-500 to-cyan-600"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-all hover:shadow-lg h-full overflow-hidden group">
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-5xl opacity-80 group-hover:opacity-100 transition-opacity`}>
                  {project.icon}
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-semibold transition-colors group"
                  >
                    View Project
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
