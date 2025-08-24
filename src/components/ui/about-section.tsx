import React from "react";
import aboutImage from "@/assets/hero-digital-transformation.jpg";
import whyImage from "@/assets/pourquoi-nous.jpg";

const AboutSection = () => (
  <section className="relative py-10 bg-black/5 overflow-hidden">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            À propos de <span className="text-[#089cb0]">Rodanol</span>
          </h2>
              <p className="text-lg text-gray-700 mb-8 text-justify bg-white/5 rounded-xl p-6">
            Rodanol est une entreprise spécialisée dans la transformation digitale des entreprises. Forte de plus de 10 années d'expérience, notre équipe d'experts accompagne les organisations dans leur évolution technologique grâce à des solutions innovantes de Business Intelligence, d'automatisation et de formation.<br /><br />
            Notre mission est de rendre la transformation digitale accessible à toutes les entreprises. Nous accompagnons nos clients pour optimiser leurs processus, améliorer leur productivité, renforcer leur compétitivité et réussir leurs projets digitaux.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
              <img src={aboutImage} alt="Transformation digitale" className="w-full max-w-xl min-h-[320px] rounded-xs object-cover" />
        </div>
      </div>
      {/* Bloc 2 : Image puis texte */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center md:justify-start order-2 md:order-1">
              <img src={whyImage} alt="Transformation digitale" className="w-full max-w- min-h-[320px] rounded-xs object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pourquoi choisir <span className="text-[#089cb0]">Rodanol</span> ?
          </h2>
              <p className="text-lg text-gray-700 mb-8 text-justify bg-white/5 rounded-xl p-6">
            En choisissant Rodanol, vous bénéficiez d’une approche flexible, pragmatique et orientée résultats, combinant expertise technique et accompagnement stratégique.<br /><br />
            Que ce soit pour créer des tableaux de bord interactifs, automatiser vos workflows, former vos équipes ou bénéficier de conseils sur vos projets digitaux, nous vous aidons à exploiter pleinement le potentiel du digital.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
