import React from "react";
import aboutImage from "@/assets/hero-digital-transformation.jpg";
import whyImage from "@/assets/pourquoi-nous.jpg";
import { motion } from "framer-motion";

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
      className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
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
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          À propos de <span className="text-[#089cb0]">Rodanol</span>
        </h2>
        <p className="text-lg text-gray-700 mb-8 bg-white/5 rounded-xl p-6 text-center md:text-justify">
          Rodanol est une initiative spécialisée dans la transformation digitale des entreprises au Cameroun et en Afrique. Nous aidons les organisations à tirer parti des nouvelles technologies grâce à des solutions innovantes en Business Intelligence (Power BI, reporting, analyse de données), automatisation & applications sur mesure (workflow, création d’appliction) et conseil & accompagnement stratégique. Nous proposons également des formations professionnelles sur-mesure pour renforcer les compétences des équipes. <br /><br />
          Notre mission est de rendre la transformation digitale accessible à toutes les entreprises. Nous accompagnons nos clients pour optimiser leurs processus, améliorer leur productivité, renforcer leur compétitivité et réussir leurs projets digitaux.
        </p>
      </motion.div>
      <motion.div
        className="flex justify-center md:justify-end"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img src={aboutImage} alt="Transformation digitale" className="w-full max-w-xl min-h-[320px] rounded-xs object-cover" />
      </motion.div>
    </motion.div>
    {/* Bloc 2 : Image puis texte */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
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
        <img src={whyImage} alt="Transformation digitale" className="w-full max-w- min-h-[320px] rounded-xs object-cover" />
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
        <p className="text-lg text-gray-700 mb-8 bg-white/5 rounded-xl p-6 text-center md:text-justify">
          En choisissant Rodanol, vous bénéficiez d’une approche flexible, pragmatique et orientée résultats, combinant expertise technique et accompagnement stratégique.<br /><br />
          Que ce soit pour créer des tableaux de bord interactifs, automatiser vos workflows, former vos équipes ou bénéficier de conseils sur vos projets digitaux, nous vous aidons à exploiter pleinement le potentiel du digital.
        </p>
      </motion.div>
    </motion.div>
  </div>
  </section>
);

export default AboutSection;
