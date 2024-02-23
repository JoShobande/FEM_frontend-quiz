import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "purple": "#A729F5",
        "dark-navy": "#313E51",
        "navy":"#3B4D66",
        "grey-navy": "#626C7F",
        "blue": "#ABC1E1",
        'light-blue':'#A04400',
        "white": "#FFFFFF",
        "green": '#26D782',
        "red": '#EE5454'
      },
      backgroundImage:{
        // 'light-image': "url('/app/images/pattern-background-desktop-light.svg')"
        // 'light-image': '#26D782' 
      }
    },
  },
  plugins: [],
}
export default config
