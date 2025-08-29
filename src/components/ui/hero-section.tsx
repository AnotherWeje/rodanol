import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-digital-transformation.jpg";

const HeroSection = () => {
  return (
  <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background Gradient statique */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, hsl(186,94%,41%) 0%, hsl(222,47%,11%) 50%, hsl(186,94%,31%) 100%)' }}
      />
      <img
        src={heroImage}
        alt="Transformation digitale chez Rodanol"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        loading="lazy"
        decoding="async"
      />

      {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transformez votre entreprise
            <span className="block text-blue-200">avec le digital</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Rodanol transforme vos données et vos processus en solutions simples et efficaces, 
            tout en formant vos équipes pour que votre entreprise prospère dans le digital.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-blue-50 transition-bounce text-lg px-8 py-4 h-auto"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Contactez-nous
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            {/* <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white bg-white/10 hover:bg-white/10 transition-bounce text-lg px-8 py-6 h-auto"
            >
              <Link to="/contact" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Réservez un RDV
              </Link>
            </Button> */}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;