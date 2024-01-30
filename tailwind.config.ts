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
					50: '#F7EDF1',
					100: '#F0DBE4',
					200: '#E0B8C9',
					300: '#D194AD',
					400: '#C27092',
					500: '#B34D77',
					600: '#8F3D5F',
					700: '#6B2E47',
					800: '#471F30',
					900: '#240F18',
					950: '#12080C'
				},
				'background': {
					50: '#FAEBF0',
					100: '#F5D6E0',
					200: '#EBADC2',
					300: '#E085A3',
					400: '#D65C85',
					500: '#CC3366',
					600: '#A32952',
					700: '#7A1F3D',
					800: '#521429',
					900: '#290A14',
					950: '#14050A'
				},
				'primary': {
					50: '#F9ECF1',
					100: '#F3D8E3',
					200: '#E7B1C8',
					300: '#DA8BAC',
					400: '#CE6490',
					500: '#C23D74',
					600: '#9B315D',
					700: '#742546',
					800: '#4E182F',
					900: '#270C17',
					950: '#13060C'
				},
				'secondary': {
					50: '#F8ECF1',
					100: '#F1DAE3',
					200: '#E3B5C7',
					300: '#D68FAA',
					400: '#C86A8E',
					500: '#BA4572',
					600: '#95375B',
					700: '#702944',
					800: '#4A1C2E',
					900: '#250E17',
					950: '#13070B'
				},
				'accent': {
					50: '#FAEBF1',
					100: '#F4D7E3',
					200: '#EAAEC7',
					300: '#DF86AB',
					400: '#D45E8F',
					500: '#C93673',
					600: '#A12B5C',
					700: '#792045',
					800: '#51152E',
					900: '#280B17',
					950: '#14050C'
				},
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
	plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
