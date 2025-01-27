import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			white: '#fff',
			primary: {
				50: '#fbf9eb',
				100: '#f7f1ca',
				200: '#efe199',
				300: '#e6c95e',
				400: '#ddb232',
				500: '#ce9b24',
				600: '#b1791d',
				700: '#8e581a',
				800: '#76471d',
				900: '#5b361b',
				950: '#3a1f0e'
			},
			secondary: {
				50: '#ffffff',
				100: '#efefef',
				200: '#dcdcdc',
				300: '#bdbdbd',
				400: '#989898',
				500: '#7c7c7c',
				600: '#656565',
				700: '#525252',
				800: '#464646',
				900: '#3d3d3d',
				950: '#292929'
			},
			stone: {
				50: '#FAFAF9',
				100: '#F5F5F4',
				200: '#E7E5E4',
				300: '#D6D3D1',
				400: '#A8A29E',
				500: '#78716C',
				600: '#57534E',
				700: '#44403C',
				800: '#292524',
				900: '#1C1917',
				950: '#0C0A09'
			},
			neutral: {
				50: '#FAFAFA',
				100: '#F5F5F5',
				200: '#E5E5E5',
				300: '#D4D4D4',
				400: '#A3A3A3',
				500: '#737373',
				600: '#525252',
				700: '#404040',
				800: '#262626',
				900: '#171717',
				950: '#0A0A0A'
			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			// primary: {
  			// 	DEFAULT: 'hsl(var(--primary))',
  			// 	foreground: 'hsl(var(--primary-foreground))'
  			// },
  			// secondary: {
  			// 	DEFAULT: 'hsl(var(--secondary))',
  			// 	foreground: 'hsl(var(--secondary-foreground))'
  			// },
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
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontFamily: {
			roboto: ["var(--font-roboto)"]
		},
		fontSize: {
			'xs': '0.75rem',   
			'sm': '0.875rem',  
			'base': '1rem',    
			'lg': '1.125rem',  
			'xl': '1.25rem',   
			'2xl': '1.5rem',   
			'3xl': '1.875rem', 
			'4xl': '2.25rem',  
			'5xl': '3rem',     
			'6xl': '4rem',     
			// Custom sizes
			'tiny': '0.625rem', 
			'huge': '2.5rem',   
		},
		lineHeight: {
			normal: '1.5',       
			snug: '1.375rem',    
			relaxed: '1.625rem',   
			'extra-loose': '2rem', 
			'tight': '20px',       
			'loose': '28px',       
		}
		
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
