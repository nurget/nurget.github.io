/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',    // 가장 밝은 하늘색
          100: '#e0f2fe',   // 매우 밝은 하늘색
          200: '#bae6fd',   // 밝은 하늘색
          300: '#7dd3fc',   // 중간밝기의 하늘색
          400: '#38bdf8',   // 선명한 하늘색
          500: '#0ea5e9',   // 기본 하늘색
          600: '#0284c7',   // 진한 하늘색
          700: '#0369a1',   // 매우 진한 하늘색
          800: '#075985',   // 어두운 하늘색
          900: '#0c4a6e',   // 가장 어두운 하늘색
          950: '#082f49'    // 거의 검정에 가까운 하늘색
        }
      },
    },
  },
  plugins: [],
}
