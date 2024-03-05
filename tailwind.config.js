export default {
  content: ["./frontends/**/*.{tsx,js}"],
  theme: {
    extend: {
      screens: {
        "@374": "374px",
        "@464": "464px",
        "@992": "992px",
      },
      backgroundSize: {
        "100%": "100%",
      },
    },
  },
  plugins: [],
};
