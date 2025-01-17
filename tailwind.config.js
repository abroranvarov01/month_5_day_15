/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1200px",
        },
      },
      colors: {
        "bg-shade": "#eeeffb",
        "grey-text": "rgba(21, 24, 117, 0.1)",
        accent: "#fb2e86",
        white: "#fff",
        ugsadug: "#9f63b5",
        text: "#151875",
        "sky-blue": "#00c1fe",
        "section-hover": "#2f1ac4",
        "sale-tage-coloe": "#3f509e",
        "price-tag-color": "#fb2448",
        violet: "#7e33e0",
        "sub-text-color": "#8a8fb9",
        "page-button-color": "#e0d3f5",
        pink: "#fb2e86",
      },
    },
  },
  plugins: [],
};
