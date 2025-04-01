module.exports = {
    content: ["./dist/**/*.html"], // Cambiado para que detecte archivos en dist
    theme: {
      extend: {
        fontFamily: {
          'headings': ['"Rajdhani"', 'sans-serif'],    // Titulares - urbano delgado pero potente
          'subheadings': ['"Exo 2"', 'sans-serif'],    // Subtítulos - futurista elegante
          'body': ['"Karla"', 'sans-serif'],            // Texto general - legibilidad profesional
        },
      colors: {
          'magika-purple': '#373634',
          'magika-pink': '#c3a655',
          'magika-yellow': '#f1eff2',
      },
      },
    },
    plugins: [],
  }