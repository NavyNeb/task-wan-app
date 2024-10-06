/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}, ./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { 
          10: "#F4F9FF",
          20: "#D6E9FF",
          30: "#B8D9FF",
          40: "#97C8FF",
          50: "#7CBAFF",
          60: "#5AA8FF",
          70: "#3A97FE",
          80: "#1A81F4",
          90: "#006EE9",
          100: "#105CDB",
        },
        textColor: "#4A4646",
        headerColor: "#000000",
        subHeader: "#474747",
        destructive: "#CB2F2F",
      },
      fontSize: {
        xxs: "10px",
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "40px",
      },
      fontFamily: {
        regular: "PoppinsRegular",
        medium: "PoppinsMedium",
        semiBold: "PoppinsSemiBold",
        bold: "PoppinsBold",
        righteous: "Righteous",
      },
    },
  },
  plugins: [],
}

