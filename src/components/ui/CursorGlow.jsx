import { useEffect, useState } from 'react';

export default function CursorGlow() {
    // Only render on desktop to match media query min-width: 768px
    const [position, setPosition] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const updatePosition = (e) => {
            // Use requestAnimationFrame for smooth performance
            requestAnimationFrame(() => {
                setPosition({ x: e.clientX, y: e.clientY });
            });
        };

        window.addEventListener('mousemove', updatePosition);
        return () => window.removeEventListener('mousemove', updatePosition);
    }, []);

    return (
        <div
            className="hidden md:block fixed pointer-events-none z-[9999] transition-transform duration-100 ease-linear mix-blend-screen"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent 70%)',
                transform: 'translate(-50%, -50%)',
            }}
        />
    );
}
