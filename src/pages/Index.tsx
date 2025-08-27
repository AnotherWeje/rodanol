import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import AboutSection from "@/components/ui/about-section";
import ServicesSection from "@/components/ui/services-section";
import MissionSection from "@/components/ui/mission-section";
import Footer from "@/components/ui/footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const [recentBlogs, setRecentBlogs] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://bold-champion-c121bc4dec.strapiapp.com/api/articles?populate=*&sort=createdAt:desc")
      .then((res) => res.json())
      .then((data) => {
        const blogs = (data.data || [])
          .filter((article: any) => article.favoris === true)
          .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .slice(0, 3);
        setRecentBlogs(blogs);
      });
  }, []);

  return (
    <div className="min-h-screen">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <Navigation />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
        <HeroSection />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }}>
        <AboutSection />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }}>
        <ServicesSection />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }}>
        <MissionSection />
      </motion.div>

      {/* Section blogs récents */}
      <motion.section
        className="py-10 bg-muted/50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-bold text-foreground mb-6 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            Quelques blogs
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentBlogs.map((article, idx) => (
              <motion.div
                key={article.id}
                className="shadow-card border rounded-lg p-6 flex flex-col h-full bg-white"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: 0.8 + idx * 0.1 }}
              >
                {article.cover?.url && (
                  <div className="relative mb-4 w-full h-[180px] rounded overflow-hidden">
                    <img
                      src={article.cover.url}
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
                      aria-hidden="true"
                    />
                    <img
                      src={article.cover.url}
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-contain z-10"
                    />
                  </div>
                )}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <div className="text-muted-foreground text-sm mb-2 text-left">
                    Auteur : {article.author?.name}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4 justify-left">
                    <Calendar className="h-4 w-4" />
                    {article.createdAt?.slice(0, 10)}
                  </div>
                  <p className="text-base mb-4">
                    {article.description?.slice(0, 150)}{article.description && article.description.length > 150 ? '...' : ''}
                  </p>
                  <div className="mt-auto">
                    <Link
                      to={`/blog/${btoa(article.documentId + '-' + Date.now())}`}
                      className="inline-flex items-center justify-center text-primary font-medium"
                      onClick={() => {
                        localStorage.setItem('articleId', article.documentId);
                      }}
                    >
                      Lire l'article
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: 1.2 }}
          >
            <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-primary text-white font-semibold shadow hover:opacity-90 transition">
              Découvrez tous nos articles
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Index;