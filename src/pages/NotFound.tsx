import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-100">
      <div className="text-center p-8 rounded-3xl shadow-2xl bg-white/80 border border-blue-100 max-w-lg w-full">
        {/* Illustration SVG 404 */}
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="mx-auto mb-6">
          <circle cx="60" cy="60" r="58" fill="#fff3e0" stroke="#ff9800" strokeWidth="4" />
          <text x="50%" y="54%" textAnchor="middle" fontSize="48" fontWeight="bold" fill="#089cb0" dy=".3em">404</text>
          <ellipse cx="60" cy="90" rx="28" ry="8" fill="#ff9800" opacity="0.18" />
        </svg>
        <h1 className="text-5xl font-extrabold text-[#089cb0] mb-4 drop-shadow-lg">Oups !</h1>
        <p className="text-lg text-gray-700 mb-6">La page que vous cherchez n'existe pas ou a été déplacée.<br />Vérifiez l'URL ou revenez à l'accueil.</p>
        <a href="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#089cb0] to-[#ff9800] text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200">
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
