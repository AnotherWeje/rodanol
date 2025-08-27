import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, Zap, Users, GraduationCap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Exploitez vos données pour prendre des décisions éclairées et booster votre performance.",
      features: ["Tableaux de bord interactifs", "Analyse prédictive", "Reporting automatisé"]
    },
    {
      icon: Zap,
      title: "Automatisation & Applications sur-mesure",
      description: "Optimisez vos opérations et facilitez la vie de vos équipes grâce à des solutions digitales personnalisées.",
      features: ["Workflows intelligents", "Création d’applications sur-mesure"]
    },
    {
      icon: Users,
      title: "Conseil & Accompagnement",
      description: "Bénéficiez d’un appui stratégique pour réussir vos projets digitaux et accompagner le changement.",
      features: ["Audit digital", "Stratégie de transformation", "Accompagnement au changement"]
    },
    {
      icon: GraduationCap,
      title: "Formation",
      description: "Renforcez les compétences de vos équipes sur les outils digitaux et la Power Platform.",
      features: ["Formation Power BI", "Autres outils de la Power Platform", "Excel", "..."]
    }
  ];

  return (
    <motion.section
      className="py-8 bg-muted/50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
  <div className="text-center mb-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Nos Services
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Découvrez comment Rodanol peut transformer votre entreprise avec des solutions digitales sur-mesure
          </motion.p>
        </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="shadow-card hover:shadow-elegant transition-smooth border-0 bg-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3, delay: 0.9 }}
        >
          <Button asChild size="lg" className="gradient-primary">
            <Link to="/services" className="flex items-center gap-2">
              Découvrez tous nos services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ServicesSection;