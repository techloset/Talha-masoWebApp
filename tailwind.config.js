
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
      screens: {
        'sm': '500px',
        // => @media (min-width: 640px) { ... }
  
        'md': '767px',
        // => @media (min-width: 1024px) { ... }  
      },
      fontFamily: { 
        FREE: ["FREE"],
      },
    },
  },
  plugins: [],
}
