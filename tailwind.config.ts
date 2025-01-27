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
				50: '#f7f5ef',
				100: '#ebe6d6',
				200: '#d8ceb0',
				300: '#c2af82',
				400: '#b0945f',
				500: '#a18251',
				600: '#906e47',
				700: '#6f5139',
				800: '#5f4534',
				900: '#523c31',
				950: '#2f2019'
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
		fontWeight: {
			hairline: '100',   // Hairline weight
			thin: '200',        // Thin weight
			light: '300',       // Light weight
			normal: '400',      // Normal weight
			medium: '500',      // Medium weight
			semibold: '600',    // Semibold weight
			bold: '700',        // Bold weight
			extrabold: '800',   // Extra bold weight
			black: '900',       // Black weight
			// Custom weights
			customLight: '350', // Custom light weight
			customHeavy: '750', // Custom heavy weight
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
		},
		spacing: {
			'0': '0px',
			'1': '0.25rem',   // 4px
			'2': '0.5rem',     // 8px
			'3': '0.75rem',    // 12px
			'4': '1rem',       // 16px
			'5': '1.25rem',    // 20px
			'6': '1.5rem',     // 24px
			'8': '2rem',       // 32px
			'10': '2.5rem',    // 40px
			'12': '3rem',      // 48px
			'14': '3.5rem',    // 56px
			'16': '4rem',      // 64px
			'20': '5rem',      // 80px
			'24': '6rem',      // 96px
			'28': '7rem',      // 112px
			'32': '8rem',      // 128px
			'36': '9rem',      // 144px
			'40': '10rem',     // 160px
			'44': '11rem',     // 176px
			'48': '12rem',     // 192px
			'52': '13rem',     // 208px
			'56': '14rem',     // 224px
			'60': '15rem',     // 240px
			'64': '16rem',     // 256px
			'72': '18rem',     // 288px
			'80': '20rem',     // 320px
			'96': '24rem',     // 384px
			'100': '25rem',    // 400px
			'120': '30rem',    // 480px
			'140': '35rem',    // 560px
			'160': '40rem',    // 640px
			'180': '45rem',    // 720px
			'200': '50rem',    // 800px
			'225': '56.25rem', // 900px
			// Add more custom sizes as needed
		}
		
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
