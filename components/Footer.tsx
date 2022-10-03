import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled, { useTheme } from "styled-components";

import DesktopLogo from "assets/images/logo-desktop.png";
import Text from "./Text";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./Icons";
import { StoreButton } from "./Button";
import {
	MobileScreenWidth,
	SmallDesktopScreenWidth,
	TabletScreenWidth,
} from "constants/data";
import useWindowSize from "utils/hooks/useWindowSize";
import { ThemeType } from "constants/theme";

function Footer() {
	const { width } = useWindowSize();
	const {
		colors: { headingPrimary },
	} = useTheme() as ThemeType;

	return (
		<Container>
			<div className="content">
				<div className="content__top">
					<div className="content__top--left">
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

						<Text
							type="body"
							text="Jiggylife is a platform designed for you to learn, earn, and be entertained."
							className={`text__body--${
								width > TabletScreenWidth ? "large" : "small"
							} `}
						/>

						<div className="links-box">
							<FacebookIcon />
							<TwitterIcon />
							<InstagramIcon />
						</div>
					</div>

					<div className="content__top--right">
						<div className="contact-box">
							<Text
								type="heading"
								text="Get in Touch"
								className="text__heading--xs"
								color={headingPrimary}
							/>

							<a href="mailto:support@jiggylife.com">
								<Text
									type="body"
									text="support@jiggylife.com"
									className={`text__body--${
										width > TabletScreenWidth
											? "xl"
											: "medium"
									}`}
								/>
							</a>

							<a href="tel:+234811211111">
								<Text
									className={`text__body--${
										width > TabletScreenWidth
											? "xl"
											: "medium"
									}`}
									type="body"
									text="+234811211111"
								/>
							</a>

							<Text
								className={`text__body--${
									width > TabletScreenWidth ? "xl" : "medium"
								}`}
								type="body"
								text="Lagos, Nigeria"
							/>
						</div>

						<div className="company-box">
							<Text
								type="heading"
								text="Company"
								className={`text__heading--${
									width > TabletScreenWidth ? "xs" : "xxs"
								}`}
								color={headingPrimary}
							/>

							<Link href="#">
								<a>
									<Text
										className={`text__body--${
											width > TabletScreenWidth
												? "xl"
												: "medium"
										}`}
										type="body"
										text="Privacy Policy"
									/>
								</a>
							</Link>

							<Link href="#">
								<a>
									<Text
										className={`text__body--${
											width > TabletScreenWidth
												? "xl"
												: "medium"
										}`}
										type="body"
										text="Terms and Conditions"
									/>
								</a>
							</Link>
						</div>
					</div>
				</div>

				<div className="content__bottom">
					{width <= TabletScreenWidth && (
						<div className="store-links">
							<StoreButton store="appstore" footer />
							<StoreButton store="playstore" footer />
						</div>
					)}

					<Text
						type="body"
						text={`Jiggylife ©${new Date().getFullYear()} Copyright. All right reserved`}
						className={`text__body--${
							width > TabletScreenWidth ? "large" : "xs"
						}`}
					/>
				</div>
			</div>
		</Container>
	);
}

const Container = styled.footer`
	width: 100%;
	margin-bottom: 5%;

	.content {
		width: var(--content-width);
		padding: 8.4rem 7.8rem 7rem 7.8rem;
		background-color: ${({ theme }) => theme.colors.footerBackground};
		margin: 0 auto;
		border-radius: 20px;

		@media screen and (max-width: ${TabletScreenWidth}px) {
			padding: 5.9rem 2.5rem 3.3rem 2.5rem;
		}

		&__top {
			display: flex;
			justify-content: space-between;

			@media screen and (max-width: ${SmallDesktopScreenWidth}px) {
				flex-direction: column;
			}

			&--left {
				.logo-box {
					height: 5.7rem;
					width: 11.1rem;
					margin-bottom: 3rem;

					@media screen and (max-width: ${SmallDesktopScreenWidth}px) {
						margin: 0 auto;
						margin-bottom: 2rem;
					}
				}

				p {
					margin-bottom: 3rem;
					max-width: 40rem;

					@media screen and (max-width: ${SmallDesktopScreenWidth}px) {
						margin: 0 auto;
						text-align: center;
						margin-bottom: 4rem;
					}

					@media screen and (max-width: ${MobileScreenWidth}px) {
						max-width: 30rem;
					}
				}

				.links-box {
					@media screen and (max-width: ${SmallDesktopScreenWidth}px) {
						display: flex;
						justify-content: center;
						margin-bottom: 4.5rem;
					}

					& > *:not(:last-child) {
						margin-right: 3.1rem;
					}
				}
			}

			&--right {
				width: 50%;
				display: flex;
				justify-content: space-between;

				@media screen and (max-width: 1120px) {
					width: 60%;
				}

				@media screen and (max-width: ${SmallDesktopScreenWidth}px) {
					width: 100%;
				}

				@media screen and (max-width: ${TabletScreenWidth}px) {
					flex-direction: column;
					justify-content: center;
				}

				.contact-box,
				.company-box {
					& > *:not(:last-child) {
						margin-bottom: 2rem;

						@media screen and (max-width: ${TabletScreenWidth}px) {
							margin-bottom: 0.8rem;
						}
					}

					h1 {
						@media screen and (max-width: 1200px) {
							font-size: 20px;
						}
					}

					h1,
					a,
					p {
						width: max-content;
						display: block;
						margin: 0 auto;
					}

					a,
					p {
						@media screen and (max-width: 1200px) {
							font-size: 18px;
						}
					}
				}

				.company-box {
					margin-left: auto;

					@media screen and (max-width: ${TabletScreenWidth}px) {
						margin-left: unset;
						margin-top: 3.8rem;
					}
				}
			}
		}

		&__bottom {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 10.6rem;

			@media screen and (max-width: 1200px) {
				margin-top: 6.6rem;
			}

			.store-links {
				display: flex;
				margin-bottom: 4.9rem;

				@media screen and (max-width: 395px) {
					flex-direction: column;
				}

				& > *:first-child {
					margin-right: 1rem;

					@media screen and (max-width: 395px) {
						margin-right: unset;
						margin-bottom: 1rem;
					}
				}
			}

			p {
				text-align: center;
			}
		}
	}
`;

export default Footer;
