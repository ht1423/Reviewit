module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      animation: {
        first: "moveVertical 18s ease-in-out infinite",
        second: "moveInCircleLarge 14s reverse infinite",
        third: "moveInCircle 22s linear infinite",
        fourth: "moveHorizontalLarge 25s ease-in-out infinite",
        fifth: "moveDiagonal 16s ease infinite",
        sixth: "moveInCircleMedium 20s ease-in-out infinite",
        seventh: "moveHorizontal 22s ease infinite",
        eighth: "moveInCircle 15s ease infinite",
        ninth: "moveDiagonalLarge 28s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": { transform: "translateX(-60%) translateY(-15%)" },
          "50%": { transform: "translateX(60%) translateY(15%)" },
          "100%": { transform: "translateX(-60%) translateY(-15%)" },
        },
        moveHorizontalLarge: {
          "0%": { transform: "translateX(-80%) translateY(-20%)" },
          "50%": { transform: "translateX(80%) translateY(20%)" },
          "100%": { transform: "translateX(-80%) translateY(-20%)" },
        },
        moveInCircle: {
          "0%": { transform: "rotate(0deg) translateX(30px)" },
          "50%": { transform: "rotate(180deg) translateX(30px)" },
          "100%": { transform: "rotate(360deg) translateX(30px)" },
        },
        moveInCircleMedium: {
          "0%": { transform: "rotate(0deg) translateX(50px)" },
          "50%": { transform: "rotate(180deg) translateX(50px)" },
          "100%": { transform: "rotate(360deg) translateX(50px)" },
        },
        moveInCircleLarge: {
          "0%": { transform: "rotate(0deg) translateX(80px)" },
          "50%": { transform: "rotate(180deg) translateX(80px)" },
          "100%": { transform: "rotate(360deg) translateX(80px)" },
        },
        moveVertical: {
          "0%": { transform: "translateY(-60%)" },
          "50%": { transform: "translateY(60%)" },
          "100%": { transform: "translateY(-60%)" },
        },
        moveDiagonal: {
          "0%": { transform: "translateX(-40%) translateY(-40%)" },
          "50%": { transform: "translateX(40%) translateY(40%)" },
          "100%": { transform: "translateX(-40%) translateY(-40%)" },
        },
        moveDiagonalLarge: {
          "0%": { transform: "translateX(-70%) translateY(-70%)" },
          "50%": { transform: "translateX(70%) translateY(70%)" },
          "100%": { transform: "translateX(-70%) translateY(-70%)" },
        },
      },
    },
  },
};
