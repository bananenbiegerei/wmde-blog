const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./**/*.php'],
	safelist: [
		{
			pattern: /justify-/,
			variants: ['sm', 'md', 'lg'],
		},
		{
			pattern: /text-(xs|sm|lg|xl)/,
		},
		{
			pattern: /(text|bg)-(black|white|primary|gray|gray-700|primary-50|primary-600|red|red-50|red-800|green-50|green-700|neon|neon-800|success|warning|error)$/,
		},
		{
			// BG colors for team members
			pattern: /bg-(pale(rose|purple|peach|cyan|pink|blue|green)|default)$/,
		},
		{
			// BG for 20 years wmde birthday
			pattern: /bg-wmde20-(green|yellow|purple|white)$/,
		},
		{
			// BG for wissens bonbons
			pattern: /bg-bonbon-(primary|success|warning|default)$/,
		},
		{
			pattern: /mt-(36|0)/,
		},
	],
	theme: {
		screens: {
			xxs: '120px',
			xs: '320px',
			sm: '640px',
			md: '821px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		// Helper pixel to rem calc: https://nekocalc.com/de/px-zu-rem-umrechner
		fontSize: {
			xs: '0.75rem', // 12px
			sm: '0.875rem', // 14px
			base: '1rem', // 16px
			lg: '1.125rem', // 18px -> h6
			xl: '1.25rem', // 20px -> p, h5
			'2xl': '1.5rem', // 24px -> h4
			'3xl': '2rem', // 32px -> h3
			'4xl': '2.5rem', // 40px -> h2
			'5xl': '3.5rem', // 56px -> h1
			'6xl': '6rem', // 96px
			'3vw': '10vw',
		},
		fontFamily: {
			alt: ['Montserrat', 'sans-serif'],
			sans: ['Roboto', 'sans-serif'],
		},
		fontWeight: {
			normal: 300,
			robotonormal: 320,
			medium: 400,
			semibold: 500,
			bold: 700,
		},
		extend: {
			spacing: {
				'desktopscrolledheader': '140px', // + 10px for not being to close to header in anchor nav
				'mobilescrolledheader': '130px',
			},
			dropShadow: {
				navbar: ['0px 3px 8px rgba(0, 0, 0, 0.24)'],
			},
			boxShadow: {
				xl: '0 0px 60px -15px rgba(0, 0, 0, 0.3)',
				navbar: '0 8px 30px rgb(0,0,0,0.12);',
				hard: '-10px 10px 0 0 rgb(0,0,0,1);',
			},
			maxWidth: {
				32: '8rem',
			},
			minHeight: {
				32: '8rem',
			},
			height: {
				specialscreen: 'calc(100vh - 5rem)',
			},
			maxHeight: {
				'screen-80': '80vh',
				'screen-1/2': '50vh',
				specialscreen: 'calc(100vh - 5rem)',
				mobilespecialscreen: 'calc(100vh - 2.5rem)',
			},
			scale: {
				cards: '1.01',
			},
			containers: {
				'2xs': '13.125rem', // 210px
			},
			keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0%)' },
                    '50%': { transform: 'translateY(20%)' },
                },
            },
            animation: {
                float: 'float 5s ease-in-out infinite',
				floatslow: 'float 7s ease-in-out infinite',
				floatfast: 'float 3s ease-in-out infinite',
            },
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/container-queries'),
		// plugin(function ({ addBase }) {
		// 	addBase({
		// 		//				html: { fontSize: '6px' },
		// 	});
		// }),
		require('@tailwindcss/forms'),
		require('tailwindcss-themer')({
			defaultTheme: {
				extend: {
					colors: {
						primary: {
							50: '#e5eeff',
							100: '#cfe0ff',
							200: '#a9c3ff',
							300: '#7599ff',
							400: '#3f5dff',
							500: '#1423ff',
							600: '#0008ff',
							700: '#0009ff',
							800: '#0008e3',
							900: '#000094',
							DEFAULT: '#000068',
						},
						secondary: {
							50: '#f7f7f7',
							DEFAULT: '#f7f7f7',
							100: '#e3e3e3',
							200: '#c8c8c8',
							300: '#a4a4a4',
							400: '#818181',
							500: '#666666',
							600: '#515151',
							700: '#434343',
							800: '#383838',
							900: '#000000',
						},
						focus: {
							50: '#e7f6ff',
							100: '#d3efff',
							200: '#b0dfff',
							300: '#81c8ff',
							400: '#4fa1ff',
							500: '#2878ff',
							DEFAULT: '#2878ff',
							600: '#044bff',
							700: '#0049ff',
							800: '#0038c4',
							900: '#0b3aa4',
						},
						black: {
							DEFAULT: 'black',
						},
						red: {
							50: '#fff0f2',
							100: '#ffe2e6',
							200: '#ffc9d4',
							300: '#ff9db1',
							400: '#ff6688',
							DEFAULT: '#ff3164',
							600: '#f21b5a',
							650: '#f21b5a',
							700: '#cb0544',
							800: '#B0003E',
							900: '#910a3d',
						},
						gray: {
							50: '#f7f7f7',
							100: '#DCDCDC',
							200: '#c8c8c8',
							300: '#a4a4a4',
							400: '#797979',
							DEFAULT: '#F6F6F6',
							500: '#666666',
							600: '#515151',
							700: '#434343',
							800: '#383838',
							900: '#313131',
						},
						green: {
							50: '#edfcf4',
							100: '#d2f9e2',
							200: '#a9f1cb',
							300: '#72e3ae',
							400: '#39ce8e',
							500: '#15b474',
							600: '#0a915e',
							DEFAULT: '#087951',
							800: '#095c3f',
							900: '#084c35',
						},
						neon: {
							50: '#fcffe5',
							100: '#f5ffc8',
							DEFAULT: '#ebff9a',
							300: '#d8fb5b',
							400: '#c4f229',
							500: '#a5d80a',
							600: '#80ad03',
							700: '#608308',
							800: '#4d670d',
							900: '#415710',
						},
						orange: {
							50: '#fffaec',
							100: '#fff3d3',
							200: '#ffe4a5',
							300: '#ffce6d',
							400: '#ffae32',
							500: '#ff930a',
							DEFAULT: '#ff7b00',
							700: '#cc5902',
							800: '#a1450b',
							900: '#823b0c',
							950: '#461b04',
						},
						wmde20: {
							green: '#7CA88B',
							yellow: '#FAE49B',
							purple: '#A59DD8',
							white: '#fff',
							DEFAULT: '#A59DD8',
						},
						bonbon: {
							success: '#D2EADE',
							primary: '#D8DEFF',
							warning: '#FBE0D0',
							DEFAULT: '#D8DEFF',
						},
					},
				},
			},
			themes: [
				{
					name: 'team-members-scheme',
					extend: {
						colors: {
							palerose: {
								DEFAULT: '#FBC5B4',
							},
							palepurple: {
								DEFAULT: '#E0D3FF',
							},
							palepeach: {
								DEFAULT: '#FADAB6',
							},
							palecyan: {
								DEFAULT: '#D4E9DE',
							},
							palepink: {
								DEFAULT: '#F7DAEF',
							},
							paleblue: {
								DEFAULT: '#C0D8F4',
							},
							palegreen: {
								DEFAULT: '#E3F9D6',
							},
							default: {
								DEFAULT: '#d5d2d7',
							},
						},
					},
				},
				{
					name: 'orga-scheme',
					extend: {
						colors: {
							red: {
								DEFAULT: '#D04425',
							},
							cyan: {
								DEFAULT: '#00B9FF',
							},
							blue: {
								DEFAULT: '#3A25FF',
								200: '#EEEAFF',
							},
							black: {
								DEFAULT: '#000',
							},
						},
					},
				},
				{
					name: 'white-scheme',
					extend: {
						colors: {
							primary: {
								DEFAULT: '#fff',
							},
							black: {
								DEFAULT: '#fff',
							},
						},
					},
				},
			],
		}),
	],
};
