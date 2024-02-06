import type {Config} from "tailwindcss"

const config = {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}'
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			},
		},
		extend: {
			colors: {
				'text': {
					50: '#efe6fe',
					100: '#dfcdfe',
					200: '#bf9cfc',
					300: '#9f6afb',
					400: '#7f38fa',
					500: '#5f06f9',
					600: '#4c05c7',
					700: '#390495',
					800: '#260363',
					900: '#130132',
					950: '#0a0119',
				},
				'background': {
					50: '#f0e6fe',
					100: '#e2cefd',
					200: '#c49cfc',
					300: '#a76bfa',
					400: '#8939f9',
					500: '#6c08f7',
					600: '#5606c6',
					700: '#410594',
					800: '#2b0363',
					900: '#160231',
					950: '#0b0119',
				},
				'primary': {
					50: '#f2f0f4',
					100: '#e5e2e9',
					200: '#cbc4d4',
					300: '#b1a7be',
					400: '#978aa8',
					500: '#7d6c93',
					600: '#645775',
					700: '#4b4158',
					800: '#322b3b',
					900: '#19161d',
					950: '#0c0b0f',
				},
				'secondary': {
					50: '#f1e8fc',
					100: '#e3d1fa',
					200: '#c7a4f4',
					300: '#aa76ef',
					400: '#8e48ea',
					500: '#721be4',
					600: '#5b15b7',
					700: '#441089',
					800: '#2e0b5b',
					900: '#17052e',
					950: '#0b0317',
				},
				'accent': {
					50: '#f9fee6',
					100: '#f2fdce',
					200: '#e5fb9d',
					300: '#d8fa6b',
					400: '#ccf83a',
					500: '#bff609',
					600: '#99c507',
					700: '#729405',
					800: '#4c6204',
					900: '#263102',
					950: '#131901',
				},
			},
			fontSize: {
				sm: '0.750rem',
				base: '1rem',
				xl: '1.333rem',
				'2xl': '1.777rem',
				'3xl': '2.369rem',
				'4xl': '3.158rem',
				'5xl': '4.210rem',
			},
			fontFamily: {
				heading: 'Poppins',
				body: 'Poppins',
			},
			fontWeight: {
				normal: '400',
				bold: '700',
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: {height: "0"},
					to: {height: "var(--radix-accordion-content-height)"},
				},
				"accordion-up": {
					from: {height: "var(--radix-accordion-content-height)"},
					to: {height: "0"},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")]
} satisfies Config

export default config
