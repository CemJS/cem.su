export default {
  content: ["./frontends/**/*.{tsx,js}"],
  theme: {
    extend: {
      screens: {
        "@374": "374px",
        "@464": "464px",
        "@500": "500px",
        "@550": "550px",
        "@700": "700px",
        "@767": "767px",
        "@992": "992px",
        "@1100": "1100px",
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
