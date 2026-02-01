"use client"

import { motion } from "framer-motion"
import { useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Code, Cpu, Cloud, ArrowRight } from "lucide-react"

export function HeroSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <section 
      id="hero" 
      className="relative h-[100vh] w-full overflow-hidden flex items-center" 
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y,
          opacity,
          scale,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-secondary/50" />
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"
        />
        <Cloud className="absolute top-[10%] left-[10%] h-32 w-32 text-primary/10 animate-float" />
        <Cloud className="absolute top-[20%] right-[15%] h-48 w-48 text-primary/5 animate-float [animation-delay:-2s]" />
        <Cloud className="absolute bottom-[10%] left-[20%] h-24 w-24 text-primary/10 animate-float [animation-delay:-4s]" />
        <Cloud className="absolute bottom-[20%] right-[5%] h-36 w-36 text-primary/5 animate-float [animation-delay:-1s]" />
      </motion.div>

      <div className="relative z-10 container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <motion.div 
                className="rounded-full border bg-card/50 backdrop-blur-sm p-3"
                whileHover={{ scale: 1.05 }}
              >
                <Code className="h-6 w-6 text-primary" />
              </motion.div>
              <motion.div 
                className="rounded-full border bg-card/50 backdrop-blur-sm p-3"
                whileHover={{ scale: 1.05 }}
              >
                <Cpu className="h-6 w-6 text-primary" />
              </motion.div>
              <motion.div 
                className="rounded-full border bg-card/50 backdrop-blur-sm p-3"
                whileHover={{ scale: 1.05 }}
              >
                <Cloud className="h-6 w-6 text-primary" />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-primary font-medium tracking-widest uppercase text-sm">Data Scientist & GenAI Engineer</p>
              <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80">
                Aniket Vinesh Anvekar
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-muted-foreground/90 leading-relaxed max-w-xl"
            >
              5+ years of experience building scalable backend systems, data-driven applications, and AI-powered solutions across ML and Generative AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button 
                size="lg" 
                className="group relative overflow-hidden"
                onClick={() => scrollToSection("projects")}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-primary/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                />
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="group relative overflow-hidden"
                onClick={() => scrollToSection("contact")}
              >
                <span className="relative z-10">
                  Contact Me
                </span>
                <motion.div
                  className="absolute inset-0 bg-secondary/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="animate-float hidden md:block"
          >
            <div className="relative w-96 h-[550px] mx-auto">
              <div className="absolute inset-0 bg-primary rounded-3xl rotate-6 opacity-20"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-primary to-primary/60 rounded-3xl shadow-2xl overflow-hidden border-2 border-primary/30">
                <img 
                  src="Images/Aniket-IMG2.png" 
                  alt="Aniket Anvekar" 
                  className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity scale-125 origin-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
