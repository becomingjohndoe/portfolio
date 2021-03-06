module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			gridTemplateRows: {
				layout: "auto 1fr auto",
			},
			colors: {
				"light-transparent": "#F8FAFC82",
				"dark-transparent": "#33415582",
			},
		},
	},
	plugins: [require("daisyui")],
};
