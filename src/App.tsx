import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import ArticleDetail from "./pages/ArticleDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <div className="relative min-h-screen">
      {/* SVG vectoriel en background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 2000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="bg-gradient" x1="0" y1="0" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff3e0" />
              <stop offset="1" stopColor="#ffe0b2" />
            </linearGradient>
            <radialGradient id="radial1" cx="0.5" cy="0.5" r="0.5" gradientTransform="translate(0.2 0.2) scale(0.6 0.6)" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="#ffcc80" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffe0b2" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="1200" cy="200" r="320" fill="url(#bg-gradient)" opacity="0.45" />
          <ellipse cx="300" cy="700" rx="260" ry="180" fill="#ffcc80" opacity="0.35" />
          <ellipse cx="300" cy="1700" rx="260" ry="180" fill="#ffcc80" opacity="0.35" />
          <path d="M0,900 Q720,600 1440,900" stroke="#ff9800" strokeWidth="60" fill="none" opacity="0.18" />
          <path d="M0,1800 Q720,1500 1440,1800" stroke="#ff9800" strokeWidth="60" fill="none" opacity="0.18" />
          {/* Motifs supplémentaires */}
          <circle cx="400" cy="180" r="80" fill="url(#radial1)" opacity="0.7" />
          <circle cx="400" cy="1180" r="80" fill="url(#radial1)" opacity="0.7" />
          <rect x="900" y="600" width="180" height="80" rx="40" fill="#fff3e0" opacity="0.35" />
          <rect x="900" y="1600" width="180" height="80" rx="40" fill="#fff3e0" opacity="0.35" />
          <polygon points="1200,800 1300,850 1250,900" fill="#ffcc80" opacity="0.32" />
          <polygon points="1200,1800 1300,1850 1250,1900" fill="#ffcc80" opacity="0.32" />
          <path d="M200,100 Q300,200 400,100 T600,100" stroke="#ff9800" strokeWidth="8" fill="none" opacity="0.28" />
          <path d="M200,1100 Q300,1200 400,1100 T600,1100" stroke="#ff9800" strokeWidth="8" fill="none" opacity="0.28" />
          <g opacity="0.18">
            <circle cx="800" cy="500" r="40" fill="#ff9800" />
            <circle cx="800" cy="1500" r="40" fill="#ff9800" />
            <rect x="600" y="200" width="60" height="60" rx="16" fill="#ffcc80" />
            <rect x="600" y="1200" width="60" height="60" rx="16" fill="#ffcc80" />
            <ellipse cx="1100" cy="600" rx="50" ry="20" fill="#fff3e0" />
            <ellipse cx="1100" cy="1600" rx="50" ry="20" fill="#fff3e0" />
          </g>
        </svg>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<ArticleDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
