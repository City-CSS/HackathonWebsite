import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		colors: {
			'text': '#15090e',
			'background': '#fefbfc',
			'primary': '#d77fa4',
			'secondary': '#5d223a',
			'accent': '#a92d61',
		},

		fontSize: {
			sm: '0.750rem',
			base: '1rem',
			xl: '1.333rem',
			'2xl': '1.777rem',
			'3xl': '2.369rem',
			'4xl': '3.158rem',
			'5xl': '4.210rem'
		},
		fontFamily: {
			heading: 'Noto Sans Runic',
			body: 'Noto Sans Runic'
		},
		fontWeight: {
			normal: '400',
			bold: '700'
		}
  },
  plugins: [],
};
export default config;
