import React from "react";
import aboutImage from "@/assets/hero-digital-transformation.jpg";
import whyImage from "@/assets/pourquoi-nous.png";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutSection = () => (
  <section className="relative py-6 bg-black/5 overflow-hidden">
    {/* SVG vectoriel en arrière-plan */}
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="about-gradient" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e0f7fa" />
            <stop offset="1" stopColor="#b2ebf2" />
          </linearGradient>
        </defs>
        <ellipse cx="300" cy="500" rx="260" ry="120" fill="#089cb0" opacity="0.12" />
        <ellipse cx="1200" cy="100" rx="180" ry="80" fill="#ff9800" opacity="0.10" />
        <path d="M0,600 Q720,400 1440,600" stroke="#089cb0" strokeWidth="40" fill="none" opacity="0.08" />
        <circle cx="1200" cy="200" r="80" fill="url(#about-gradient)" opacity="0.18" />
      </svg>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-1">
      {/* Bloc 1 : Texte puis image */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-1 md:mb-2 md:text-justify">
            À propos de <span className="text-[#089cb0]">Rodanol</span>
          </h2>
          <p className="text-lg text-gray-700 mb-4 md:mb-8 bg-white/5 rounded-xl p-4 md:p-6 text-center md:text-justify">
            Rodanol est une initiative spécialisée dans la transformation digitale des entreprises au Cameroun et en Afrique. <br />
            Nous croyons que le numérique n’est pas réservé aux grandes organisations, mais qu’il peut devenir un levier de croissance pour toutes les entreprises, quelle que soit leur taille. <br /><br />

            Notre mission est de rendre la transformation digitale accessible, en aidant nos clients à :
            <ul>
              <li className="flex items-center text-md">
                <ArrowRight className="h-4 w-4 text-primary mr-3 ml-3 flex-shrink-0" />
                <span>Moderniser leurs processus,</span>
              </li>
              <li className="flex items-center text-md">
                <ArrowRight className="h-4 w-4 text-primary mr-3 ml-3 flex-shrink-0" />
                <span>Améliorer leur productivité,</span>
              </li>
              <li className="flex items-center text-md">
                <ArrowRight className="h-4 w-4 text-primary mr-3 ml-3 flex-shrink-0" />
                <span>Renforcer leur compétitivité.</span>
              </li>
            </ul>

          </p>
        </motion.div>
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src={aboutImage} alt="Transformation digitale" className="w-full max-w-xl min-h-[200px] md:min-h-[320px] rounded-xs object-cover" />
        </motion.div>
      </motion.div>
      {/* Bloc 2 : Image puis texte */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <motion.div
          className="flex justify-center md:justify-start order-2 md:order-1"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <img src={whyImage} alt="Transformation digitale" className="w-full max-w- min-h-[200px] md:min-h-[320px] rounded-xs object-cover" />
        </motion.div>
        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {/* <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pourquoi choisir <span className="text-[#089cb0]">Rodanol</span> ?
          </h2> */}
          <p className="text-lg text-gray-700 mb-4 md:mb-8 bg-white/5 rounded-xl p-4 md:p-6 text-center md:text-justify">
            <br />
            Nous mettons à profit notre expertise en technologies modernes de la gestion des données à l’automatisation des tâches pour offrir des solutions concrètes et adaptées aux réalités locales. <br /> <br />

            Avec Rodanol, vous bénéficiez d’une approche flexible, pragmatique et orientée résultats, qui combine savoir-faire technique et accompagnement stratégique pour assurer la réussite de vos projets digitaux.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
