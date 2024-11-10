import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

     
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out",
        slideIn: "slideIn 1s ease-out",
        slideOut: "slideOut 1s ease-in",
        bounce: "bounce 1s infinite",
        pulse: "pulse 2s infinite",
        scaleUp: "scaleUp 0.5s ease-in-out",
        scaleDown: "scaleDown 0.5s ease-in-out",
        bgChange: "bgChange 20s infinite",
        shake: "shake 0.5s ease-in-out",
        flash: "flash 1s ease-in-out infinite",
        flip: "flip 1s ease-in-out",
        textShadow: 'textShadow 6s infinite'
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
    
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        scaleDown: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.9)" },
        },
        bgChange: {
          "2%": { backgroundImage: "url('/home.png')" },
         
          "20%": { backgroundImage: "url('/home2.png')" },
          
          "60%": { backgroundImage: "url('/home4.png')" },

          "100%": { backgroundImage: "url('/home3.png')" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
        },
        flash: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        flip: {
          "from": { transform: "rotateX(0)" },
          "to": { transform: "rotateX(180deg)" },
        },
        textShadow: {
          '0%': { textShadow: '0 0 5px maroon' },
          '50%': { textShadow: '0 0 20px blue' },
          '100%': { textShadow: '0 0 5px red' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
