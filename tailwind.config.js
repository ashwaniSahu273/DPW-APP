const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    colors: {
      ...colors,
      primary: {
        ...colors.blue,
  
      },
      secondary: {
        ...colors.coolGray,
      },
      error: {
        ...colors.rose,
      },
      warning: {
        ...colors.amber,
        DEFAULT: colors.amber["400"],
      },
      success: {
        ...colors.green,
      },
    },
    extend: {
      animation: {
        ping100: "ping 1s infinite 100ms",
        ping200: "ping 1s infinite 200ms",
        ping300: "ping 1s infinite 300ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
