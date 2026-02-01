"use client"

import { motion } from "framer-motion"

export function CertificationsSection() {
  const certifications = [
    { title: "AWS Machine Learning Engineer Associate", issuer: "Amazon Web Services" },
    { title: "AWS Data Engineer Associate", issuer: "Amazon Web Services" },
    { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services" },
    { title: "Databricks Generative AI", issuer: "Databricks" },
    { title: "Microsoft Azure Fundamentals", issuer: "Microsoft" },
    { title: "Microsoft Azure Data Fundamentals", issuer: "Microsoft" },
  ]

  const getCompanyIcon = (issuer: string) => {
    switch (issuer) {
      case "Amazon Web Services":
        return <img src="/Images/aws-icon.jpeg" alt="AWS" className="w-16 h-16 mx-auto object-contain" />;
      case "Microsoft":
        return <img src="/Images/ms-azure-icon.jpeg" alt="Microsoft Azure" className="w-16 h-16 mx-auto object-contain" />;
      case "Databricks":
        return <img src="/Images/databricks-icon.jpeg" alt="Databricks" className="w-16 h-16 mx-auto object-contain" />;
      default:
        return <span className="text-4xl">📜</span>;
    }
  };

  return (
    <section id="certifications" className="relative w-full py-20 px-4 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-card/50 border border-border/50 p-6 rounded-2xl hover:border-primary/50 transition-all text-center"
            >
              <div className="mb-3 flex justify-center">{getCompanyIcon(cert.issuer)}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
