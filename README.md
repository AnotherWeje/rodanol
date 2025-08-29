# Documentation Technique - Projet Rodanol

## 1. Architecture Générale

Le projet Rodanol est construit sur une architecture découplée (headless) composée de deux parties distinctes :

-   **Backend** : Un système de gestion de contenu (CMS) basé sur **Strapi**. Il expose les données via une API REST.
-   **Frontend** : Une application web monopage (SPA) développée avec **React** qui consomme les données du backend Strapi pour les afficher aux utilisateurs.

Les deux projets coexistent dans le même dépôt mais fonctionnent de manière indépendante, chacun avec son propre environnement et ses propres dépendances.

---

## 2. Backend (`backend-strapi`)

Le backend est une application Strapi V5. Strapi est un CMS headless open-source basé sur Node.js qui permet de créer, gérer et exposer du contenu via des APIs.

### Stack Technique et Outils Externes

-   **Framework** : Strapi 5.23.0
-   **Langage** : TypeScript
-   **Base de données** : SQLite (via `better-sqlite3`), configurée pour le développement local.
-   **Environnement d'exécution** : Node.js (version >=18.0.0)
-   **Librairies Notables** :
    -   `@strapi/plugin-users-permissions` : Gestion des utilisateurs et des permissions (rôles, authentification).
    -   `@strapi/plugin-cloud` : Pour le déploiement sur le cloud de Strapi.
    -   `react`, `react-dom`, `styled-components` : Strapi utilise React pour la construction de son panneau d'administration.

### Structure des Dossiers Clés

-   `src/api/**` : Contient la logique de vos collections (models, services, controllers). C'est ici que vous définissez la structure de vos données (articles, catégories, etc.).
-   `src/components/**` : Contient les composants réutilisables dans vos types de contenu.
-   `config/` : Fichiers de configuration pour la base de données (`database.ts`), les middlewares (`middlewares.ts`), l'API (`api.ts`), etc.
-   `.tmp/` : Contient la base de données SQLite (`data.db`) pour l'environnement de développement.
-   `public/uploads/` : Dossier où sont stockés les médias téléversés via le panneau d'administration.

### Installation et Lancement

1.  **Se placer dans le dossier du backend :**
    ```bash
    cd "backend-strapi"
    ```
2.  **Installer les dépendances :**
    ```bash
    npm install
    ```
3.  **Lancer le serveur de développement :**
    ```bash
    npm run develop
    ```
    Le panneau d'administration sera accessible par défaut sur `http://localhost:1337/admin`.

---

## 3. Frontend (`rodanol-digital-hub-main`)

Le frontend est une application web moderne construite avec React et un écosystème d'outils performants.

### Stack Technique et Outils Externes

-   **Framework** : React 18
-   **Langage** : TypeScript
-   **Build Tool** : Vite.js (pour un développement et un build rapides)
-   **Styling** :
    -   **Tailwind CSS** : Un framework CSS "utility-first" pour un design rapide et personnalisé.
    -   **Shadcn/ui** : Une collection de composants d'interface utilisateur réutilisables et accessibles, construits sur Radix UI et Tailwind CSS.
    -   `tailwindcss-animate`, `clsx`, `tailwind-merge` : Utilitaires pour la gestion des classes CSS.
-   **Routing** : `react-router-dom` pour la navigation entre les pages.
-   **Gestion de l'état et des données serveur** :
    -   `@tanstack/react-query` : Pour la récupération, la mise en cache et la synchronisation des données depuis l'API Strapi.
-   **Gestion de formulaires** :
    -   `react-hook-form` : Pour la création et la validation de formulaires.
    -   `zod` : Pour la validation de schémas de données.
-   **Composants d'UI et UX** :
    -   `lucide-react` : Pour les icônes.
    -   `framer-motion` : Pour les animations.
    -   `sonner` : Pour l'affichage de notifications (toasts).
    -   `recharts` : Pour les graphiques.
-   **Linting** : ESLint pour maintenir la qualité et la cohérence du code.
-   **Services Externes** :
    -   `emailjs-com` : Intégration pour l'envoi d'e-mails directement depuis le client (ex: formulaire de contact).
    -   `firebase` : Potentiellement utilisé pour des fonctionnalités d'authentification, de base de données temps réel ou d'hébergement (à confirmer selon l'usage).

### Structure des Dossiers Clés

-   `src/` : Contient tout le code source de l'application.
-   `src/pages/` : Les composants de haut niveau qui correspondent aux différentes pages de l'application (ex: `Index.tsx`, `Blog.tsx`).
-   `src/components/` : Composants React réutilisables.
    -   `src/components/ui/` : Composants de base de la librairie Shadcn/ui.
-   `src/lib/` : Fonctions utilitaires (ex: `utils.ts`).
-   `src/hooks/` : Hooks React personnalisés pour encapsuler de la logique réutilisable.
-   `src/assets/` : Fichiers statiques (images, logos).
-   `public/` : Fichiers statiques qui sont servis directement à la racine du site.

### Installation et Lancement

1.  **Se placer dans le dossier du frontend :**
    ```bash
    cd "rodanol-digital-hub-main"
    ```
2.  **Installer les dépendances :**
    ```bash
    npm install
    # ou `bun install` si vous utilisez Bun
    ```
3.  **Lancer le serveur de développement :**
    ```bash
    npm run dev
    ```
    L'application sera accessible par défaut sur `http://localhost:5173`.

---

## 4. Déploiement

-   **Frontend** : Le fichier `vercel.json` à la racine du projet frontend indique une configuration de déploiement prévue pour la plateforme **Vercel**. Vercel est idéal pour les applications frontend modernes et s'intègre parfaitement avec les projets basés sur Vite.
-   **Backend** : Le backend Strapi peut être déployé sur diverses plateformes comme Heroku, DigitalOcean, AWS, ou en utilisant la solution **Strapi Cloud** (`@strapi/plugin-cloud`). La méthode de déploiement dépendra de l'infrastructure choisie.
