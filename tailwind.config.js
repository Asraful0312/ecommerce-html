/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
      },
      colors: {
        primary: "#00d084",
        darkPrimary: "#29A56C",
        secondry: "#54595F",
        darkGray: "#7E7E7E",
        lightGray: "#F2F3F4",
        greenLight: "#7bdcb5",
        darkGreen: "#253d4e",
        cyanBlue: "#0693e3",
        darkRed: "#cf2e2e",
        palePink: "#f78da7",
        bluishGray: "#abb8c3",
        amber: "#fcb900",
        vavidPurple: "#9b51e0",
        lightOrange: "#fde1bd",
        cream1: "#f2fce4",
        cream2: "#feefea",
        cream3: "#ecffec",
        cream4: "#fff3eb",
        cream5: "#fff3ff",
      },
      fontFamily: {
        quicksand: ["Quicksand"],
      },
    },
  },
  plugins: [],
};
