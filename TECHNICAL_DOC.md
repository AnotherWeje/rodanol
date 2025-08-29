# Documentation Technique - Rodanol Digital Hub

## Vue d'ensemble du projet

Rodanol Digital Hub est une plateforme web moderne conçue pour présenter les services de transformation digitale de Rodanol. Le site comprend une page d'accueil, des services, un blog, et des fonctionnalités de contact.

## Stack Technique

### Technologies de Base
- **React** - Framework JavaScript pour l'interface utilisateur
- **TypeScript** - Superset JavaScript ajoutant le typage statique
- **Vite** - Outil de build moderne pour le développement rapide
- **TailwindCSS** - Framework CSS utilitaire pour le styling

### Bibliothèques Principales
- **react-router-dom** - Gestion du routage
- **framer-motion** - Animations fluides et transitions
- **Lucide React** - Icônes vectorielles
- **Radix UI** - Composants primitifs accessibles
- **Shadcn/ui** - Composants UI réutilisables basés sur Radix et Tailwind
- **@tanstack/react-query** - Gestion des requêtes API et du cache

### Backend & API
- **Strapi** - Headless CMS pour la gestion de contenu
- Endpoint API: `https://bold-champion-c121bc4dec.strapiapp.com/api/`

## Architecture du Projet

### Structure des Dossiers
```
src/
├── assets/         # Images et ressources statiques
├── components/     # Composants réutilisables
│   └── ui/        # Composants d'interface utilisateur
├── data/          # Données statiques et constantes
├── hooks/         # Hooks React personnalisés
├── lib/           # Utilitaires et configurations
└── pages/         # Composants de pages
```

### Composants Principaux

#### Pages
- `Index.tsx` - Page d'accueil
- `Blog.tsx` - Liste des articles
- `ArticleDetail.tsx` - Détail d'un article
- `Services.tsx` - Page des services
- `Contact.tsx` - Page de contact

#### UI Components
- `Navigation.tsx` - Barre de navigation responsive
- `Footer.tsx` - Pied de page
- `HeroSection.tsx` - Section d'en-tête de la page d'accueil
- `ServicesSection.tsx` - Section des services
- `AboutSection.tsx` - Section à propos

### État Global
- **BlogContext** - Gestion de l'état global des articles
  - Mise en cache des articles
  - Partage des données entre les pages

## Fonctionnalités Clés

### Gestion des Articles
- Préchargement des articles en mémoire
- Mise en cache pour optimiser les performances
- Pagination côté client
- Tri et filtrage

### Animations
- Transitions de pages fluides avec Framer Motion
- Animations au scroll
- Effets visuels interactifs

### Optimisation des Performances
- Chargement différé des images
- Mise en cache des requêtes API
- Code splitting automatique avec Vite

## Configuration et Installation

### Prérequis
- Node.js >= 16.0.0
- npm ou Bun (gestionnaire de paquets)

### Installation
```bash
# Installation des dépendances
npm install
# ou
bun install

# Démarrage en développement
npm run dev
# ou
bun run dev

# Build production
npm run build
# ou
bun run build
```

### Variables d'Environnement
```env
VITE_API_URL=https://bold-champion-c121bc4dec.strapiapp.com/api
```

## Bonnes Pratiques

### Code Style
- TypeScript strict mode
- ESLint pour le linting
- Prettier pour le formatage
- Composants fonctionnels React avec Hooks

### Performance
- Utilisation de `React.memo()` pour les composants purs
- Hooks personnalisés pour la logique réutilisable
- Context API pour l'état global léger
- Images optimisées et compressées

### Accessibilité
- Composants Radix UI pour l'accessibilité native
- Contraste des couleurs respecté
- Navigation au clavier supportée
- ARIA labels où nécessaire

## Déploiement

### Production
- Build optimisé avec Vite
- Assets statiques compressés
- Code splitting automatique

### Hébergement
- Vercel pour le frontend
- Strapi hébergé séparément pour le CMS

## Tests
- Pas de tests automatisés actuellement
- Recommandation d'ajouter :
  - Tests unitaires avec Vitest
  - Tests d'intégration avec Testing Library
  - Tests E2E avec Cypress

## Maintenance et Evolution

### Backlog Technique
1. Ajout de tests automatisés
2. Migration vers React Server Components
3. Implémentation du SSR
4. Optimisation des images avec next/image
5. Cache Service Worker pour le offline

### Monitoring
- Logs d'erreurs à implémenter
- Analytics à ajouter
- Monitoring des performances à mettre en place
