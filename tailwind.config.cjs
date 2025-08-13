module.exports = {
  content: ["./src/**/*.{njk,md}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            p: {
              marginTop: "6pt",
              marginBottom: "6pt",
            },
            "p:first-of-type": {
              marginTop: "0",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};