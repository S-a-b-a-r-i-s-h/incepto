import type { Config } from "tailwindcss";

const config: Config = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    options: {
      safelist: [
        'bg-blue-500',
        'bg-green-500',
        'bg-violet-500',
        'bg-yellow-500',
        'bg-red-500',
      ],
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
      }
    },
  },
  plugins: [],
};
export default config;
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   // darkMode: "class",
//   theme: {
//     extend: {
//       animation: {
//         shimmer: "shimmer 2s linear infinite",
//       },
//       keyframes: {
//         shimmer: {
//           from: {
//             backgroundPosition: "0 0",
//           },
//           to: {
//             backgroundPosition: "-200% 0",
//           },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
// export {}
