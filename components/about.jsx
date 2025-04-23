"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  const stats = [
    { value: "2+", label: "Ans d'Expérience" },
    { value: "3+", label: "Projets Réalisés" },
    { value: "4", label: "Technologies Maîtrisées" },
    { value: "2", label: "Langues" },
  ]

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-4">
              À Propos de Moi
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Apprenez à Me <span className="text-blue-600 dark:text-blue-400">Connaître</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="relative z-10">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/880-1727859974.jfif-67F3HiRTn0gcKpxBkZNpjOJglRNrVI.jpeg"
                  alt="Taouil Abdellatif"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-10 -left-10 w-full h-full border-2 border-blue-600 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                Développeur Full Stack basé à Youssoufia, Maroc
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                Je suis un développeur full stack passionné par la création de sites web et d'applications modernes. Je
                me spécialise dans les technologies web comme HTML, CSS, JavaScript, PHP et Laravel.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                Actuellement en formation à Youcode/UM6P, je continue à développer mes compétences en développement web
                et à travailler sur des projets passionnants qui résolvent des problèmes réels.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
                  >
                    <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</span>
                  </motion.div>
                ))}
              </div>

              <Button
                className="bg-gradient-to-r from-gray-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full h-[6rem] text-center"
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Télécharger CV
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
