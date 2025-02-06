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
			'1': '4px',       // 0.25rem
			'2': '8px',       // 0.5rem
			'3': '12px',      // 0.75rem
			'4': '16px',      // 1rem
			'5': '20px',      // 1.25rem
			'6': '24px',      // 1.5rem
			'8': '32px',      // 2rem
			'10': '40px',     // 2.5rem
			'12': '48px',     // 3rem
			'14': '56px',     // 3.5rem
			'16': '64px',     // 4rem
			'20': '80px',     // 5rem
			'24': '96px',     // 6rem
			'28': '112px',    // 7rem
			'32': '128px',    // 8rem
			'36': '144px',    // 9rem
			'40': '160px',    // 10rem
			'44': '176px',    // 11rem
			'48': '192px',    // 12rem
			'52': '208px',    // 13rem
			'56': '224px',    // 14rem
			'60': '240px',    // 15rem
			'64': '256px',    // 16rem
			'72': '288px',    // 18rem
			'80': '320px',    // 20rem
			'96': '384px',    // 24rem
			'100': '400px',   // 25rem
			'120': '480px',   // 30rem
			'130': '520px',   // 32.5rem
			'140': '560px',   // 35rem
			'160': '640px',   // 40rem
			'180': '720px',   // 45rem
			'200': '800px',   // 50rem
			'225': '900px',   // 56.25rem
			// Add more custom sizes as needed
		}
		
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
