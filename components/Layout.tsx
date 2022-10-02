import styled from "styled-components";

import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Wrapper>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</Wrapper>
		</>
	);
};

const Wrapper = styled.div`
	width: 100%;
	min-height: 100%;
	max-width: 1440px;
	margin: 0 auto;
	position: relative;
`;

export default Layout;
