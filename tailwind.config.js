/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg.png')",
        "mc-bg": "url('/src/assets/mc.png')",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    function ({ addComponents }) {
      addComponents({
        '.torn-border': {
          maskImage: "url('/src/assets/torn_border_mask.png')",
          maskSize: "cover",
          WebkitMaskImage: "url('/src/assets/torn_border_mask.png')",
          WebkitMaskSize: "cover",
        },
      });
    },
  ],
}
