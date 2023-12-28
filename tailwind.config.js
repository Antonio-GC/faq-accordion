/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.astro", // Analizar todos los archivos .astro en la carpeta src y sus subcarpetas
    "./src/**/*.html",  // Analizar todos los archivos .html en la carpeta src y sus subcarpetas
    "./src/**/*.js",    // Analizar todos los archivos .js en la carpeta src y sus subcarpetas
    "./src/**/*.jsx",   // Analizar todos los archivos .jsx (React) en la carpeta src y sus subcarpetas
    // Agrega más patrones de archivos según sea necesario
  ],
  theme: {
    extend: {
      colors:{
        "pink-light": "#F8EEFF",
      }
    },
  },
  plugins: [],
}

