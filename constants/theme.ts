const pallete = {
	white: "#FFFFFF",
	whiteTint: "#FFFFFE",
	black: "#222222",
	blackLight: "#4F4F4F",
	grey: {
		100: "#898989",
		200: "#D9D9D9",
		300: "#F4F4F4",
		400: "#828282",
	},
	orange: {
		100: "#FDF1E1",
		200: "#FADBB1",
		300: "#FFBD68",
		400: "#FF914D",
	},
};

export type ThemeType = {
	colors: {
		primary: string;
		mainBackground: string;
		headingPrimary: string;
		headingSecondary: string;
		textPrimary: string;
		textSecondary: string;
		footerBackground: string;
		gradientBackground: string;
		gradientBackgroundSecondary: string;
	};
	navHeight: string;
};

export const theme: ThemeType = {
	colors: {
		primary: pallete.orange[400],
		mainBackground: pallete.whiteTint,
		headingPrimary: pallete.black,
		headingSecondary: pallete.orange[400],
		textPrimary: pallete.grey[100],
		textSecondary: pallete.grey[400],
		footerBackground: pallete.orange[100],
		gradientBackground: pallete.orange[400],
		gradientBackgroundSecondary: pallete.orange[100],
	},
	navHeight: "11.5rem",
};
