"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "abdotaouil03@gmail.com",
      link: "mailto:abdotaouil03@gmail.com",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+212 634 748 166",
      link: "tel:+212634748166",
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Youssoufia, Maroc",
      link: "https://maps.google.com/?q=Youssoufia+Morocco",
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-4">
              Contactez-Moi
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Restons en <span className="text-blue-600 dark:text-blue-400">Contact</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
            <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              N'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez collaborer. Je vous répondrai
              dès que possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="md:col-span-1">
              <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 rounded-2xl overflow-hidden h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Informations de Contact</h3>

                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.link}
                        target={item.title === "Localisation" ? "_blank" : undefined}
                        rel={item.title === "Localisation" ? "noopener noreferrer" : undefined}
                        className="flex items-start group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      >
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-colors duration-300">
                          <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 dark:text-white">{item.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {item.value}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  <div className="mt-10">
                    <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Suivez-Moi</h3>
                    <div className="flex space-x-4">
                      <motion.a
                        href="https://github.com/abdellatif-taouil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        aria-label="GitHub"
                      >
                        <span className="capitalize">G</span>
                      </motion.a>
                      <motion.a
                        href="https://twitter.com/Taouil-abdo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        aria-label="Twitter"
                      >
                        <span className="capitalize">T</span>
                      </motion.a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-2">
              <Card className="border-0 shadow-xl bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Envoyez-Moi un Message</h3>

                  {submitSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6"
                    >
                      Merci pour votre message ! Je vous répondrai bientôt.
                    </motion.div>
                  ) : null}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Votre Nom
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500 rounded-lg"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Votre Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500 rounded-lg"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Sujet
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Demande de Projet"
                        className="bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Votre Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Parlez-moi de votre projet..."
                        rows={5}
                        className="bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500 rounded-lg resize-none"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}   
                      className="w-full md:w-auto bg-gradient-to-r from-gray-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full px-8 py-6 text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-16 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Envoyer le Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
