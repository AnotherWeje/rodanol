import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, Zap, Users, GraduationCap, Check, ArrowRight } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";
import { motion } from "framer-motion";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Transformez vos données en insights actionnables avec nos solutions de BI avancées.",
      pourquoi: "Parce que chaque décision doit être éclairée par des données fiables et pertinentes.",
      longDescription: "Rodanol aide les entreprises à exploiter leurs données pour prendre des décisions éclairées et améliorer leur performance globale. Grâce à des solutions de Business Intelligence adaptées, vos informations deviennent un véritable levier stratégique.",
      image: blog1,
      features: [
        "Création de tableaux de bord interactifs et personnalisés",
        "Modélisation de données avancée", 
        "Reporting automatisé pour suivre vos indicateurs clés",
        "Intégration de sources de données diverses (ERP, CRM, Excel, etc.)"
      ],
      benefits: [
        "Décisions rapides et basées sur des données fiables",
        "Visualisation claire de la performance et des KPIs",
        "Réduction du temps de collecte et traitement des données",
        "Amélioration continue des performances de l’entreprise"
      ]
    },
    {
      icon: Zap,
      title: "Automatisation & Applications sur-mesure",
      description: "Optimisez vos opérations avec des workflows intelligents et des processus automatisés.",
      longDescription: "Rodanol optimise vos opérations et facilite le travail de vos équipes grâce à des solutions digitales personnalisées qui combinent automatisation de processus et applications sur-mesure.",
      pourquoi: "Parce que chaque processus mérite d'être optimisé pour gagner en efficacité.",
      image: blog2,
      features: [
        "Automatisation des workflows avec Power Automate",
        "Création d’applications personnalisées avec Power Apps et autres outils",
        "Optimisation des processus répétitifs et chronophages"
      ],
      benefits: [
        "Gain de temps et productivité accrue",
        "Réduction des erreurs humaines",
        "Solutions adaptées exactement à vos besoins",
        "Collaboration et communication interne facilitées"
      ]
    },
    {
      icon: Users,
      title: "Conseil & Accompagnement",
      description: "Bénéficiez de notre expertise pour définir et mettre en œuvre votre stratégie digitale.",
      longDescription: "Rodanol accompagne les entreprises dans leurs projets de transformation digitale en offrant un appui stratégique complet et en mettant à disposition des contacts fiables pour chaque aspect de la transformation, du marketing à la gestion opérationnelle, en passant par les processus internes et la formation des équipes. Nous couvrons l’ensemble du parcours, de l’audit initial à l’adoption et l’optimisation des solutions.",
      pourquoi: "Parce que chaque projet de transformation nécessite une approche sur mesure et un accompagnement de proximité.",
      image: blog3,
      features: [
        "Audit digital et analyse des processus existants",
        "Élaboration d’une stratégie de transformation digitale",
        "Accompagnement au changement pour vos équipes",
        "Support et suivi tout au long des projets",
      ],
      benefits: [
        "Vision claire des besoins et opportunités digitales",
        "Réduction des risques liés aux projets digitaux",
        "Adoption rapide et efficace des nouvelles solutions",
        "Optimisation des ressources et retour sur investissement plus rapide"
      ]
    },
    {
      icon: GraduationCap,
      title: "Formation",
      description: "Formez vos équipes aux outils digitaux et à Power Platform pour une autonomie totale.",
      longDescription: "Rodanol propose des formations pratiques et personnalisées pour permettre à vos équipes de maîtriser les outils digitaux et la Power Platform. L’objectif est de rendre vos collaborateurs autonomes, d’améliorer leur efficacité et d’assurer une adoption optimale des solutions mises en place, tout en renforçant les compétences internes de votre organisation.",
      pourquoi: "Parce que la montée en compétences de vos équipes est essentielle pour réussir votre transformation digitale.",
      image: blog4,
      features: [
        "Formation Power BI pour analyse et reporting avancé",
        "Formation Power Apps pour créer vos propres applications",
        "Sessions pratiques adaptées aux besoins de vos équipes",
        "Formations Excel pour tableaux, graphiques et reporting efficace"
      ],
      benefits: [
        "Équipes autonomes et compétentes sur les outils digitaux",
        "Meilleure adoption des solutions mises en place",
        "Amélioration de la productivité et de la qualité du travail",
        "Valorisation des compétences internes et développement professionnel"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Services */}
      <section className="relative py-24 min-h-[60vh] gradient-hero text-white">
        <img
          src={servicesHero}
          alt="Services digitaux Rodanol"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="lazy"
          decoding="async"
        />
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nos Services
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Chez Rodanol, nous accompagnons les entreprises dans leur transformation digitale grâce à des solutions sur-mesure et adaptées à leurs besoins. <br /><br />
            Chaque service est conçu pour apporter de la valeur concrète, améliorer la productivité et renforcer la compétitivité de votre entreprise.

          </motion.p>
        </motion.div>
  {/* Dégradé décoratif en bas du hero */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
  </section>

  {/* Services détaillés */}
  <section className="py-24 bg-background/0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-16 items-center rounded-2xl p-6 ${isEven ? 'bg-black/5' : 'bg-blue-50/60'} ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                >
                  <motion.div
                    className={isEven ? 'lg:order-1' : 'lg:order-2'}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: index * 0.2 + 0.1 }}
                  >
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-justify">
                      {service.longDescription}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="font-semibold text-foreground mb-4">Fonctionnalités</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-4">Bénéfices</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <ArrowRight className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Button asChild size="lg" className="gradient-primary">
                      <Link to="/contact">Discuter de ce service</Link>
                    </Button>
                  </motion.div>
                  <motion.div
                    className={isEven ? 'lg:order-2' : 'lg:order-1'}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: index * 0.2 + 0.2 }}
                  >
                    {/* <Card className="shadow-elegant border-0 bg-card"> */}
                      
                      <CardContent className="p-0">
                        <img
                          src={service.image}
                          alt={service.title + " illustration"}
                          className="rounded-xl shadow-lg mb-8 w-full  object-cover mx-auto"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="gradient-primary rounded-lg p-6 text-white">
                          <h4 className="font-semibold mb-4">Pourquoi ce service ?</h4>
                          <p className="text-blue-100 leading-relaxed">
                            {service.pourquoi}
                          </p>
                        </div>
                      </CardContent>
                    {/* </Card> */}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contactez-nous pour discuter de vos besoins et découvrir comment nos services peuvent vous aider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-primary">
              <Link to="/contact" className="flex items-center gap-2">
                Contactez-nous
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/blog">Lire nos articles</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;