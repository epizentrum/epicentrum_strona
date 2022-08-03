/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif']
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				'pablo-pink': '#f72585',
				'pablo-purple': '#720987',
				'pablo-grenade': '#3a0ca3',
				'pablo-blue': '#4361ee',
				'pablo-sea': '#4cc9f0',
				'pablo-violet-pink': '#a21090'
				}
			
		},
		
	},
	plugins: [],
};
