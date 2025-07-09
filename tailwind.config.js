/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f7ff",
          100: "#e0efff",
          200: "#bae2ff",
          300: "#7cc8ff",
          400: "#36a9fc",
          500: "#0c8ce9",
          600: "#006fc7",
          700: "#0158a1",
          800: "#064b85",
          900: "#0b406e",
        },
        neutral: {
          50: "#fafbfc",
          100: "#f4f6f8",
          200: "#e8ecf0",
          300: "#d4dce5",
          400: "#9aa6b2",
          500: "#6b7684",
          600: "#4a5568",
          700: "#2d3748",
          800: "#1a202c",
          900: "#171923",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        shimmer: "shimmer 2s infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #0c8ce9 0%, #0158a1 100%)",
        "gradient-elegant": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "gradient-soft": "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        "gradient-subtle": "linear-gradient(135deg, #fafbfc 0%, #ffffff 100%)",
      },
      boxShadow: {
        elegant: "0 20px 50px -10px rgba(0, 0, 0, 0.15)",
        soft: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        subtle: "0 4px 15px -2px rgba(0, 0, 0, 0.05)",
      },
      backdropBlur: {
        xs: "2px",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
    },
  },
  plugins: [],
};
