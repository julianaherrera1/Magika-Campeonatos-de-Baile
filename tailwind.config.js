module.exports = {
    content: ["./dist/**/*.html"], // Cambiado para que detecte archivos en dist
    theme: {
      extend: {
        fontFamily: {
          'headings': ['"Rajdhani"', 'sans-serif'],    // Titulares - urbano delgado pero potente
          'subheadings': ['"Exo 2"', 'sans-serif'],    // Subtítulos - futurista elegante
          'playfair': ['"Playfair Display"', 'serif'],
          'body': ['"Karla"', 'sans-serif'],            // Texto general - legibilidad profesional
          'rajdhani': ['Rajdhani', 'sans-serif'],      // Subtítulos
          /* 'sans': ['Montserrat', 'sans-serif'],  */      // Texto general
        },
      colors: {
          'magika-purple': '#373634',
          'magika-pink': '#c3a655',
          'magika-yellow': '#f1eff2',
          'gold': {
            500: '#c3a655', // Dorado principal
            600: '#b2944a', // Dorado oscuro
            700: '#9e8240', // Dorado más oscuro
          },
          'black': {
            DEFAULT: '#000000',
            900: '#0a0a0a',  // Negro con un toque cálido
            800: '#111111',  // Para fondos oscuros
            700: '#1a1a1a',  // Para cards y elementos
          },
      },

      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      },
    },
    plugins: [],
  }