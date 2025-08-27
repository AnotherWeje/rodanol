import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar, Clock, Users } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast";

import heroImage from "@/assets/contact.jpg";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_1qq4bsg", // Remplace par ton Service ID EmailJS
        "template_ls12ja9", // Remplace par ton Template ID EmailJS
        {
          name: formData.name,
          email: formData.email,
          title: formData.title,
          message: formData.message,
        },
        "T76Ycn-dVq6nFjb10" // Remplace par ton User ID EmailJS
      );
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({ name: "", email: "", title: "", message: "" });
    } catch (error) {
      toast({
        title: "Erreur lors de l'envoi",
        description: "Une erreur est survenue, veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Contact */}
      <section className="relative py-24 min-h-[60vh] gradient-hero text-white">
        <img
          src={heroImage}
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
            Contactez-nous
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Vous avez un projet ou une question concernant la transformation digitale? <br /><br />
            Remplissez le formulaire ci-dessous, utilisez nos coordonnées ou réservez un rendez vous gratuitement pour prendre contact facilement et rapidement. 
          </motion.p>
        </motion.div>
  {/* Dégradé décoratif en bas du hero */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
  </section>

  {/* Contact Section */}
  <section className="py-24 bg-background/0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Formulaire de contact */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6 bg-black/5 rounded-2xl shadow-xl p-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-black mb-2">
                      Nom complet *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="h-12 rounded-lg border border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all px-4 bg-white/80"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="h-12 rounded-lg border border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all px-4 bg-white/80"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="objet" className="block text-sm font-medium text-black mb-2">
                    Objet *
                  </label>
                  <Input
                    id="title"
                    name="title"
                    type="text"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="h-12 rounded-lg border border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all px-4 bg-white/80"
                    placeholder="Sujet de votre demande"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="rounded-lg border border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all px-4 bg-white/80"
                    placeholder="Décrivez votre projet ou vos besoins..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gradient-primary shadow-lg hover:scale-[1.03] transition-transform duration-200">
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* Informations et RDV */}
            <div className="space-y-8">
              
              {/* Informations de contact */}
              <Card className="shadow-card bg-black/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Informations de contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>jose.voukeng@roda-nol.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span>+237 677 105 923</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>Douala, Cameroun</span>
                  </div>
                </CardContent>
              </Card>

              {/* Réservation RDV */}
              <Card className="shadow-card border-0 gradient-primary text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Réservez votre consultation gratuite
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    20 minutes pour analyser vos besoins
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-blue-200" />
                      <span>Durée : 20 minutes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-blue-200" />
                      <span>Consultation personnalisée</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-blue-200" />
                      <span>Disponible sous 48h</span>
                    </div>
                  </div>
                  
                  <Button 
                    asChild
                    className="w-full bg-white text-primary hover:bg-blue-50"
                    size="lg"
                  >
                    <a href="https://calendly.com/josevoukeng25/20min" target="_blank" rel="noopener noreferrer">
                      Réserver un créneau
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Processus */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle>Notre processus</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Écoute et analyse</h4>
                        <p className="text-sm text-muted-foreground">Nous analysons vos besoins et contraintes</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Proposition sur mesure</h4>
                        <p className="text-sm text-muted-foreground">Devis détaillé sous 48h</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Mise en œuvre</h4>
                        <p className="text-sm text-muted-foreground">Accompagnement jusqu'à la réussite</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;