import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../../assets/logo-blanc.png";

const Footer = () => {
  return (
  <footer className="text-secondary-foreground" style={{background: 'linear-gradient(135deg, #0d293b 0%, #0a687b 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-8 rounded-lg flex items-center justify-center">
                <span className="text-secondary font-bold text-lg">
                  <img
                    src={logo}
                    alt="R"
                    className="w-6 h-8"
                  />
                </span>
              </div>
              <span className="text-xl font-bold">Rodanol</span>
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Votre partenaire de confiance pour la transformation digitale. 
              Nous accompagnons les entreprises vers l'excellence opérationnelle.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4" />
                <span>jose.voukeng@roda-nol.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4" />
                <span>+237 677 105 923</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Douala, Cameroun</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                Accueil
              </Link>
              <Link to="/services" className="block text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                Services
              </Link>
              <Link to="/blog" className="block text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                Blog
              </Link>
              <Link to="/contact" className="block text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2 text-sm text-secondary-foreground/80">
              <div>Business Intelligence</div>
              <div>Automatisation</div>
              <div>Conseil & Accompagnement</div>
              <div>Formation</div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © 2025 Rodanol. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;