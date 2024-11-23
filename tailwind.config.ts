import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
		},
		screens: {
			xs: '375px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1400px',
		},
		extend: {
			keyframes: {
				profileAnimate: {
					'0%': {
						borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
					},
					'50%': {
						borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
					},
					'100%': {
						borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
					},
				},
				shapeAnimate: {
					'0%': {
						borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
					},
					'50%': {
						borderRadius: '50% 60% 30% 60% / 30% 60% 70% 40%',
					},
					'100%': {
						borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
					},
				},
			},
			animation: {
				profile_animate: 'profileAnimate 8s ease-in-out infinite 1s',
				shape_animate: 'shapeAnimate 8s ease-in-out infinite 1s',
			},
			boxShadow: {
				custom_shadow: '0 20px 10px 10px hsl(var(--primary) / 0.1), inset 0 0 0 5px hsl(var(--foreground) / 1)',
				custom_inset: 'inset 0 0 0 9px hsl(var(--secondary) / 0.5)',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				tertiary: {
					DEFAULT: 'hsl(var(--tertiary))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				shape: '60% 40% 30% 70% / 60% 30% 70% 40%',
				// shape_light: '50% 50% 50% 50% / 50% 50% 50% 50%',
				shape_light: '50% 40% 30% 70% / 60% 40% 70% 40%',
			},
			backgroundImage: {
				profile_img: "url('/hero/profile.jpg')",
				hero: 'url(/hero/hero-bg.png)',
				hero_shape: 'url(/hero/shape-1.svg)',
				hero_shape2_light: 'url(/hero/shape-2-light.svg)',
				hero_shape2_dark: 'url(/hero/shape-2-dark.svg)',
				about_shape_light: 'url(/about/shape-light.svg)',
				about_shape_dark: 'url(/about/shape-dark.svg)',
				dots_light: 'url(/dots-light.svg)',
				dots_dark: 'url(/dots-dark.svg)',
				work_project_bg_light: 'url(/work/project-bg-light.png)',
				work_project_bg_dark: 'url(/work/project-bg-dark.png)',
				contact_illustration_light: 'url(/contact/illustration-light.svg)',
				contact_illustration_dark: 'url(/contact/illustration-dark.svg)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
