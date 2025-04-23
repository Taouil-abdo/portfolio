"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", level: 90, icon: "html5.svg" },
        { name: "CSS3", level: 85, icon: "css3.svg" },
        { name: "JavaScript", level: 80, icon: "javascript.svg" },
        { name: "Bootstrap", level: 85, icon: "bootstrap.svg" },
        { name: "TailwindCSS", level: 80, icon: "tailwind.svg" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "PHP", level: 85, icon: "php.svg" },
        { name: "Laravel", level: 80, icon: "laravel.svg" },
        { name: "MySQL", level: 75, icon: "mysql.svg" },
      ],
    },
    {
      category: "Outils & Méthodologies",
      items: [
        { name: "Git", level: 80, icon: "git.svg" },
        { name: "GitHub", level: 80, icon: "github.svg" },
        { name: "Figma", level: 70, icon: "figma.svg" },
        { name: "Agile/Scrum", level: 75, icon: "agile.svg" },
        { name: "Jira/Trello", level: 75, icon: "jira.svg" },
        { name: "UML", level: 70, icon: "uml.svg" },
      ],
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-4">
              Mes Compétences
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Mon <span className="text-blue-600 dark:text-blue-400">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
            <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              J'ai travaillé avec diverses technologies dans le monde du développement web. Voici mes principaux
              domaines d'expertise et les outils que j'utilise quotidiennement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <div className="p-6 bg-gradient-to-r from-blue-600 to-cyan-600">
                  <h3 className="text-xl font-bold text-white text-center">{skillGroup.category}</h3>
                </div>
                <div className="p-6 space-y-6">
                  {skillGroup.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: (groupIndex * skillGroup.items.length + index) * 0.1 + 0.3 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <div className="w-8 h-8 mr-3 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full">
                            {/* Placeholder for icon */}
                            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">
                              {skill.name.charAt(0)}
                            </span>
                          </div>
                          <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: (groupIndex * skillGroup.items.length + index) * 0.1 + 0.5,
                          }}
                          className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
