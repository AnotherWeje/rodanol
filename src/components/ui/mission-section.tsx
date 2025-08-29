import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Lightbulb, Rocket } from "lucide-react";

const MissionSection = () => {
  const values = [
    {
      icon: Target,
      title: "Notre Mission",
      description: "Aider les entreprises à optimiser leurs processus et tirer le meilleur parti du digital pour gagner en efficacité, productivité et compétitivité sur leur marché."
    },
    {
      icon: Lightbulb,
      title: "Notre Expertise",
      description: "Une initiative soutenue par une expertise en transformation digitale, Business Intelligence, automatisation des processus et création d’applications sur mesure."
    },
    {
      icon: Rocket,
      title: "Notre Approche",
      description: "Un accompagnement personnalisé de A à Z, allant de l’audit et la stratégie à la mise en œuvre opérationnelle, en passant par la formation de vos équipes. Nous adaptons nos solutions aux besoins spécifiques de chaque client pour garantir des résultats concrets et mesurables."
    }
  ];

  return (
    <section className="py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Pourquoi choisir
              <span className="block" style={{ color: '#089cb0' }}>Rodanol ?</span>
            </h2>

            <div className="space-y-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <Button asChild size="lg" className="gradient-primary">
                <Link to="/contact">Commencez votre transformation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">En savoir plus</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="gradient-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Transformez votre entreprise dès aujourd'hui
              </h3>
              <h5 className="text-md mb-6">
                Grâce à notre offre d’accompagnement :
              </h5>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  <span>Consultation gratuite de 20 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  <span>Audit personnalisé de vos processus</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  <span>Devis détaillé sous 48h</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  <span>Suivi et accompagnement tout au long du projet</span>
                </div>
              </div>
              <Button
                asChild
                className="w-full mt-6 bg-white text-primary hover:bg-blue-50"
              >
                <Link to="https://calendly.com/josevoukeng25/20min" target="_blank">Réservez un créneau</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;