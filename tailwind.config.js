module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "517px",

        md: "767px",

        lg: "1023px",

        xl:"1300px",
      },
      fontFamily: {
        FREE: ["FREE"],
      },
    },
  },
  plugins: [],
};
