module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 25s reverse infinite",
        third: "zigZag 35s linear infinite",
        fourth: "moveDiagonal 40s ease infinite",
        fifth: "moveInCircle 18s ease infinite",
        sixth: "moveVerticalLarge 33s ease infinite",
        seventh: "zigZagLarge 27s reverse infinite",
        eighth: "moveInCircleLarge 45s linear infinite",
        ninth: "moveHorizontalLarge 37s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": { transform: "translateX(-80vw) translateY(-10vh)" },
          "50%": { transform: "translateX(80vw) translateY(20vh)" },
          "100%": { transform: "translateX(-80vw) translateY(-10vh)" },
        },
        moveHorizontalLarge: {
          "0%": { transform: "translateX(-100vw) translateY(-15vh)" },
          "50%": { transform: "translateX(100vw) translateY(25vh)" },
          "100%": { transform: "translateX(-100vw) translateY(-15vh)" },
        },
        moveVertical: {
          "0%": { transform: "translateY(-80vh)" },
          "50%": { transform: "translateY(80vh)" },
          "100%": { transform: "translateY(-80vh)" },
        },
        moveVerticalLarge: {
          "0%": { transform: "translateY(-100vh)" },
          "50%": { transform: "translateY(100vh)" },
          "100%": { transform: "translateY(-100vh)" },
        },
        moveInCircle: {
          "0%": { transform: "rotate(0deg) translateX(10vw)" },
          "50%": { transform: "rotate(180deg) translateX(-10vw)" },
          "100%": { transform: "rotate(360deg) translateX(10vw)" },
        },
        moveInCircleLarge: {
          "0%": { transform: "rotate(0deg) translateX(30vw) translateY(30vh)" },
          "50%": { transform: "rotate(180deg) translateX(-30vw) translateY(-30vh)" },
          "100%": { transform: "rotate(360deg) translateX(30vw) translateY(30vh)" },
        },
        moveDiagonal: {
          "0%": { transform: "translateX(-70vw) translateY(-70vh)" },
          "50%": { transform: "translateX(70vw) translateY(70vh)" },
          "100%": { transform: "translateX(-70vw) translateY(-70vh)" },
        },
        zigZag: {
          "0%": { transform: "translateX(-50vw) translateY(0vh)" },
          "25%": { transform: "translateX(50vw) translateY(-50vh)" },
          "50%": { transform: "translateX(-50vw) translateY(50vh)" },
          "75%": { transform: "translateX(50vw) translateY(-50vh)" },
          "100%": { transform: "translateX(-50vw) translateY(0vh)" },
        },
        zigZagLarge: {
          "0%": { transform: "translateX(-80vw) translateY(0vh)" },
          "25%": { transform: "translateX(80vw) translateY(-80vh)" },
          "50%": { transform: "translateX(-80vw) translateY(80vh)" },
          "75%": { transform: "translateX(80vw) translateY(-80vh)" },
          "100%": { transform: "translateX(-80vw) translateY(0vh)" },
        },
      },
    },
  },
  plugins: [],
};
