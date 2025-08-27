import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";

const ArticleDetail = () => {
  const { id: hash } = useParams();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Récupérer l'id réel depuis le hash ou localStorage
    let realId = null;
    try {
      const storedId = localStorage.getItem('articleId');
      if (hash && hash.includes('-')) {
        const decoded = atob(hash);
        realId = decoded.split('-')[0];
      } else if (storedId) {
        realId = storedId;
      }
    } catch (e) {}
    if (!realId) {
      setError("Article introuvable");
      setLoading(false);
      return;
    }
    fetch(`https://bold-champion-c121bc4dec.strapiapp.com/api/articles/${realId}?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        if (!data || !data.data) {
          setError("Article introuvable");
          setLoading(false);
          return;
        }
        setArticle(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Erreur lors du chargement de l'article");
        setLoading(false);
      });
  }, [hash]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
  }
  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

  const a = article;
  // Si la structure est data, adapter ici
  const art = a.data || a;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fond noir transparent 99% */}
  <div className="fixed inset-0 w-full h-full -z-20 pointer-events-none" style={{background: "rgba(0,0,0,0.07)"}} />
      {/* SVG vectoriel en arrière-plan */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="about-gradient" x1="0" y1="0" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e0f7fa" />
              <stop offset="1" stopColor="#b2ebf2" />
            </linearGradient>
          </defs>
          <ellipse cx="300" cy="700" rx="260" ry="220" fill="#089cb0" opacity="0.12" />
          <ellipse cx="1200" cy="200" rx="180" ry="180" fill="#ff9800" opacity="0.10" />
          <path d="M0,900 Q720,400 1440,900" stroke="#089cb0" strokeWidth="40" fill="none" opacity="0.08" />
          <circle cx="1200" cy="400" r="120" fill="url(#about-gradient)" opacity="0.18" />
        </svg>
      </div>
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
  <div className="max-w-3xl mx-auto py-16 px-4 text-black">
        <h1 className="text-4xl font-bold mb-4">{art.title}</h1>
        <div className="flex items-center gap-2 text-muted-foreground mb-6">
          <Calendar className="h-4 w-4" />
          {art.createdAt?.slice(0, 10)}
        </div>
        {art.cover?.url && (
          <img src={art.cover.url} alt={art.title} className="mb-8 rounded-lg w-full object-cover" />
        )}
        <div className="prose prose-lg mb-8 text-justify">
          <p style={{whiteSpace: "pre-line"}}>
            {art.description}
          </p>
        </div>
        {art.author?.name && (
          <div className="mb-4 text-muted-foreground">Auteur : {art.author.name}</div>
        )}
        <Button asChild className="gradient-primary text-white">
          <Link to="/blog">Retour au blog</Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default ArticleDetail;