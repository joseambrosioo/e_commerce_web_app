// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: ['class'],
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       borderRadius: {
//         lg: 'var(--radius)',
//         md: 'calc(var(--radius) - 2px)',
//         sm: 'calc(var(--radius) - 4px)'
//       },
//       colors: {
//         // Error or Critical Notifications
//         destructive: {
//           DEFAULT: "#dc2626", // Red for destructive actions
//           foreground: "#ffffff", // White text
//         },
//         // Success Notifications
//         success: {
//           DEFAULT: "#16a34a", // Green for success
//           foreground: "#ffffff", // White text
//         },
//         // Warning Notifications
//         warning: {
//           DEFAULT: "#facc15", // Yellow for warnings
//           foreground: "#000000", // Black text
//         },
//         // Information Notifications
//         info: {
//           DEFAULT: "#2563eb", // Blue for information
//           foreground: "#ffffff", // White text
//         },
//         // Neutral or Default Notifications
//         neutral: {
//           DEFAULT: "#6b7280", // Gray for neutral notifications
//           foreground: "#ffffff", // White text
//         },
//         // Primary Notifications (Custom Usage)
//         // primary: {
//         //   DEFAULT: "#3b82f6", // Lighter Blue for primary actions
//         //   foreground: "#ffffff", // White text
//         // },
//         // Custom Notifications (Generic Customizable Variant)
//         custom: {
//           DEFAULT: "#9333ea", // Purple for a distinct custom look
//           foreground: "#ffffff", // White text
//         },
//         // Dark Mode Notifications
//         dark: {
//           DEFAULT: "#000000", // Black for dark mode notifications
//           foreground: "#ffffff", // White text
//         },
//         // Light Mode Notifications
//         light: {
//           DEFAULT: "#ffffff", // White for light mode notifications
//           foreground: "#000000", // Black text
//         },
//         muted: '#d3d3d3', // Define muted color or adjust accordingly
//         foreground: '#333333', // Define foreground color
//       }
//     }
//   },
//   plugins: [require("tailwindcss-animate")],
// }


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: ['class'],
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       borderRadius: {
//         lg: 'var(--radius)',
//         md: 'calc(var(--radius) - 2px)',
//         sm: 'calc(var(--radius) - 4px)'
//       },
//       colors: {
//         // Error or Critical Notifications
//         destructive: {
//           DEFAULT: "#dc2626", // Red for destructive actions
//           foreground: "#ffffff", // White text
//         },
//         muted: '#d3d3d3', // Define muted color or adjust accordingly
//         foreground: '#333333', // Define foreground color
//         backgroundColor: '#ffffff'
//       }
//     }
//   },
//   plugins: [require("tailwindcss-animate")],
// }

// tailwind.config.js
import tailwindcssAnimate from "tailwindcss-animate";
import forms from "@tailwindcss/forms";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#ffffff",
        },
        muted: "#d3d3d3",
        foreground: "#333333",
      },
    },
  },
  plugins: [tailwindcssAnimate, forms],
};
