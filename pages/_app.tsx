import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import "../styles/main.scss";
import { GlobalStyles } from "../constants/globalStyles";
import { theme } from "constants/theme";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
