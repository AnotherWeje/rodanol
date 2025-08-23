import React from "react";
import aboutImage from "@/assets/hero-digital-transformation.jpg";

const AboutSection = () => (
  <section className="py-10 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      {/* Colonne gauche : Texte */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          À propos de <span className="text-[#089cb0]">Rodanol</span>
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-justify p-4">
          Rodanol est une entreprise spécialisée dans la transformation digitale des entreprises. Forte de plus de 10 années d'expérience, notre équipe d'experts accompagne les organisations dans leur évolution technologique grâce à des solutions innovantes de Business Intelligence, d'automatisation et de formation.<br /><br />
          Notre mission est de démocratiser l'accès aux technologies de pointe et d'aider nos clients à optimiser leurs processus pour gagner en efficacité et en compétitivité sur leur marché.
          Notre mission est de démocratiser l'accès aux technologies de pointe et d'aider nos clients à optimiser leurs processus pour gagner en efficacité et en compétitivité sur leur marché.
        </p>
        {/* <a href="#" className="inline-block bg-[#00AEEF] text-white px-8 py-4 rounded-lg font-semibold shadow transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-600">
          Découvrir notre approche
        </a> */}
      </div>
      {/* Colonne droite : Image */}
      <div className="flex justify-center md:justify-end">
        <img src={aboutImage} alt="Transformation digitale" className="w-full max-w-l rounded-sm shadow-lg object-cover" />
      </div>
    </div>
  </section>
);

export default AboutSection;
