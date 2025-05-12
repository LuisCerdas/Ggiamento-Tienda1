/** @type {import('tailwindcss').Config} */
module.exports = {
  // Archivos donde Tailwind buscará clases
  content: ["./public/**/*.{html,js}"],
  
  // darkMode: 'class' - El modo oscuro se activa con la clase "dark" en el HTML
  darkMode: 'class',
  
  // Personalización del tema
  theme: {
    extend: {
      // Extensión de colores personalizados
      colors: {
        primary: '#3b82f6', // Azul de Tailwind
        secondary: '#7928ca', // Púrpura
        accent: '#79ffe1', // Cyan claro
        dark: { // Paleta para modo oscuro
          primary: '#60a5fa', // Azul más claro
          secondary: '#7928ca', // Mismo púrpura
          accent: '#79ffe1', // Mismo cyan
          text: '#fff', // Texto blanco
          'text-secondary': '#888', // Texto gris
          background: '#000', // Fondo negro
          'background-secondary': '#111', // Fondo gris muy oscuro
          'background-tertiary': '#171717', // Fondo gris oscuro
          border: '#333', // Borde gris
        }
      },
      
      // Fuentes personalizadas
      fontFamily: {
        'sans': ['Inter', 'sans-self'], // Inter como fuente principal
      },
      
      // Sombras personalizadas
      boxShadow: {
        'custom': '0 4px 14px rgba(0, 0, 0, 0.1)', // Sombra ligera
        'dark': '0 4px 14px rgba(0, 0, 0, 0.25)', // Sombra más pronunciada
      },
      
      // Animaciones personalizadas
      animation: {
        'morph': 'morph 8s ease-in-out infinite', // Animación de cambio de forma
        'pulse-slow': 'pulse 10s infinite', // Pulsación lenta
      },
      
      // Definición de keyframes para animaciones
      keyframes: {
        morph: { // Animación que cambia border-radius
          '0%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '50%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
          '100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
        },
        pulse: { // Animación de pulsación
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  
  // Plugins de Tailwind (actualmente vacío)
  plugins: [],
}