export default {
  content: ["./frontends/**/*.{tsx,js}"],
  theme: {
    extend: {
      screens: {
        "@374": "374px",
        "@464": "464px",
        "@500": "500px",
        "@992": "992px",
        "@2000": "2000px",
      },
      backgroundSize: {
        "100%": "100%",
        "125%": "125%",
      },
    },
  },
  plugins: [],
};
