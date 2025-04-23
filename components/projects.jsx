"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState("all")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const projects = [
    {
      id: 1,
      title: "TaAuto",
      description:
        "Site offrant des services de vente et de location de voitures avec système de gestion des annonces.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Laravel 10", "PHP", "Bootstrap", "JavaScript", "MySQL"],
      category: "web",
      liveLink: "https://example.com/taauto",
      githubLink: "https://github.com/TAABDO/TA_AUTO",
    },
    {
      id: 2,
      title: "Youdemy",
      description: "Une plateforme proposant des cours variés avec système de gestion et recherche avancée.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["PHP", "TailwindCSS", "JavaScript", "MySQL"],
      category: "web",
      liveLink: "https://example.com/youdemy",
      githubLink: "https://github.com/Taouil-abdo/Youdemy",
    },
    {
      id: 3,
      title: "Système de Gestion des Réservations",
      description: "Système complet de gestion des réservations avec téléchargement PDF des données.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Laravel 10", "PHP", "Bootstrap", "JavaScript"],
      category: "app",
      liveLink: "https://example.com/reservations",
      githubLink: "https://github.com/abdellatif-taouil/reservations",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const categories = [
    { value: "all", label: "Tous les Projets" },
    { value: "web", label: "Sites Web" },
    { value: "app", label: "Applications" },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-4">
              Mon Travail
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Projets <span className="text-blue-600 dark:text-blue-400">Récents</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
            <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Voici quelques-uns de mes projets récents. Chaque projet est unique et résout un problème spécifique.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.value}
                onClick={() => setFilter(category.value)}
                variant={filter === category.value ? "default" : "outline"}
                className={`rounded-full px-6 ${
                  filter === category.value
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                    : "border-blue-600 text-blue-600 hover:text-blue-700 hover:border-blue-700 dark:border-blue-500 dark:text-blue-400"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </motion.div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden h-full border-0 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 z-10">
                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/20 backdrop-blur-sm border-white/50 text-white rounded-full"
                          asChild
                        >
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="h-10 w-[6rem]">
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100 rounded-full" asChild>
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-blue-600 text-blue-600 hover:text-blue-700 hover:border-blue-700 dark:border-blue-500 dark:text-blue-400"
              asChild
            >
              <a
                href="https://github.com/Taouil-abdo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Code className="h-5 w-5" />
                Voir Tous les Projets
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
