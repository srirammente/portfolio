# DevPortfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Vite. Features glassmorphism effects, smooth scroll animations, and a dynamic "tech stack" display.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1.  Clone the repository (or open the project folder):
    ```bash
    cd dev-portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser at `http://localhost:5173` (or the URL shown in the terminal).

## 🛠️ Tech Stack

-   **Framework:** [React](https://react.dev/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Fonts:** [Outfit](https://fonts.google.com/specimen/Outfit)

## 📁 Project Structure

```text
src/
├── components/         # UI Components
│   ├── ui/             # Reusable UI elements (RevealOnScroll, CursorGlow)
│   ├── Hero.jsx        # Landing section
│   ├── Skills.jsx      # Skills & Tech stack
│   ├── Projects.jsx    # Featured projects
│   ├── Contact.jsx     # Contact form
│   └── ...
├── App.jsx             # Main application layout
├── index.css           # Global styles & Tailwind directives
└── main.jsx            # Entry point
```

## 🎨 Features

-   **Dark Mode Theme**: Sleek dark aesthetic with neon accents.
-   **Glassmorphism**: Modern frosted glass effects on cards and navigation.
-   **Scroll Animations**: Elements reveal smoothly as you scroll down.
-   **Interactive Elements**: Custom cursor glow (desktop), hover effects, and mobile-responsive menu.

## 📄 Scripts

-   `npm run dev`: Start the dev server.
-   `npm run build`: Build for production.
-   `npm run preview`: Preview the production build locally.
