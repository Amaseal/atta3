const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		container: {
			center: true
		},
		extend: {}
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')],

	daisyui: {
		styled: true,
		themes: [
			{
				test: {
					primary: '#F6F8FB',
					'primary-focus': '#E8EAEF',
					'primary-content': '#252527',

					secondary: '#f000b8',
					'secondary-focus': '#bd0091',
					'secondary-content': '#ffffff',

					accent: '#37cdbe',
					'accent-focus': '#2ba69a',
					'accent-content': '#ffffff',

					neutral: '#2a2e37',
					'neutral-focus': '#16181d',
					'neutral-content': '#ffffff',

					'base-100': '#252527',
					'base-200': '#2a2e37',
					'base-300': '#16181d',
					'base-content': '#ebecf0',

					info: '#66c7ff',
					success: '#87cf3a',
					warning: '#e1d460',
					error: '#ff6b6b',

					'--rounded-box': '1rem',
					'--rounded-btn': '0.5rem',
					'--rounded-badge': '1.9rem',

					'--animation-btn': '0.25s',
					'--animation-input': '0.2s',

					'--btn-text-case': 'uppercase',
					'--navbar-padding': '0.5rem',
					'--border-btn': '1px'
				}
			}
		],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: '',
		darkTheme: 'test'
	}
};

module.exports = config;
