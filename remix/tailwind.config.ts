import type {Config} from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.fuchsia,
        gray: colors.zinc,
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
} satisfies Config;
