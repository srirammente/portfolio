export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ['Outfit', 'sans-serif'],
        },
        extend: {
            colors: {
                dark: '#0a0a0a',
                card: '#171717',
                primary: '#6366f1', // Indigo
                accent: '#a855f7', // Purple
            },
            // These are likely animation utilities, not the animation definitions
            // 'blob': 'blob 7s infinite',
            // 'float': 'float 6s ease-in-out infinite',
            animation: {
                'blob': 'blob 7s infinite',
                'float': 'float 6s ease-in-out infinite',
                'shine': 'shine 1.5s',
            },
        },
        keyframes: {
            blob: {
                '0%': { transform: 'translate(0px, 0px) scale(1)' },
                '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                '100%': { transform: 'translate(0px, 0px) scale(1)' },
            },
            float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-20px)' },
            },
            shine: {
                '100%': { left: '125%' }
            }
        },
    },
    plugins: [],
}
