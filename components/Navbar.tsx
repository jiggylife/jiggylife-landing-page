import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import DesktopLogo from "assets/images/logo-desktop.png";
import Button from "./Button";
import { MobileScreenWidth, TabletScreenWidth } from "constants/data";
import useWindowSize from "utils/hooks/useWindowSize";

const Navbar = () => {

	return (
		<Nav>
			<div className="nav-content">
				<div className="logo-box">
					<Link href="/">
						<a>
							<Image
								src={DesktopLogo}
								alt="logo"
								quality={100}
								placeholder="blur"
							/>
						</a>
					</Link>
				</div>

				<Button link href="#" label="Get the app" />
			</div>
		</Nav>
	);
};

const Nav = styled.nav`
	height: var(--nav-height);
	position: absolute;
	top: 0;
	z-index: 1;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	padding-bottom: 1.5rem;

	.nav-content {
		left: 0;
		width: var(--content-width);
		display: flex;
		justify-content: space-between;
		align-items: center;

		.logo-box {
			height: 6.8rem;
			width: 12.4rem;

			@media screen and (max-width: ${TabletScreenWidth}px) {
				height: 4rem;
				width: 8rem;
			}
		}
	}
`;

export default Navbar;
