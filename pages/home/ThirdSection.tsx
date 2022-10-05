import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import Image from "next/image";

import Text from "components/Text";
import { ThemeType } from "constants/theme";
import TwoPhones from "assets/images/two-phones.png";
import useWindowSize from "utils/hooks/useWindowSize";
import {
	MobileScreenWidth,
	SmallDesktopScreenWidth,
	TabletScreenWidth,
} from "constants/data";

const ThirdSection = () => {
	const {
		colors: { primary, headingPrimary },
	} = useTheme() as ThemeType;
	const { width } = useWindowSize();

	return (
		<Container>
			<div className="content">
				<div className="content__left">
					<Text
						type="heading"
						text="About Jiggy"
						className={`text__heading--${
							width > TabletScreenWidth ? "medium" : "xxs"
						}`}
						color={primary}
						style={{ fontWeight: 700 }}
					/>

					<Text
						type="heading"
						text="What is a Jiggy?"
						className={`text__heading--${
							width > TabletScreenWidth ? "large" : "xs"
						}`}
						color={headingPrimary}
					/>

					<Text
						type="body"
						text="Jiggylife is an entertaining channel made possible by influencers. We're here to entertain and spread vawulence. We also brings you the best in entertainment, lifestyle, life tips, up-to-date informations and more from your favourite influencers."
						className={`text__body--${
							width > TabletScreenWidth ? "xl" : "small"
						}`}
					/>
				</div>
				<div className="content__right">
					<Image src={TwoPhones} alt="" className="image" />
				</div>
			</div>
		</Container>
	);
};

const Container = styled.section`
	padding: 6% 0;

	@media only screen and (max-width: ${MobileScreenWidth}px) {
		padding: 24% 0 6% 0;
	}

	.content {
		width: var(--content-width);
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media only screen and (max-width: ${TabletScreenWidth}px) {
			flex-direction: column;
		}

		&__left {
			width: 45%;

			@media only screen and (max-width: ${TabletScreenWidth}px) {
				width: 100%;
			}

			& > *:first-child {
				margin-bottom: 2rem;

				@media only screen and (max-width: ${SmallDesktopScreenWidth}px) {
					font-size: 30px;
				}

				@media only screen and (max-width: 870px) {
					margin-bottom: 1.5rem;
					font-size: 25px;
				}
			}
			& > *:nth-child(2) {
				margin-bottom: 3rem;

				@media only screen and (max-width: ${SmallDesktopScreenWidth}px) {
					font-size: 40px;
					line-height: 45px;
				}

				@media only screen and (max-width: 870px) {
					font-size: 35px;
					margin-bottom: 2rem;
				}

				@media only screen and (max-width: ${TabletScreenWidth}px) {
					font-size: 25px;
					line-height: 31px;
					margin-bottom: 1.5rem;
					font-weight: 800;
				}
			}
			p {
				@media only screen and (max-width: ${SmallDesktopScreenWidth}px) and (min-width: ${769}px) {
					font-size: 16px;
				}
			}
		}

		&__right {
			width: 45%;

			@media only screen and (max-width: ${TabletScreenWidth}px) {
				width: 100%;
				max-width: 30.9rem;
				margin-top: 7rem;
			}

			.image {
				width: 100%;
				aspect-ratio: 0.7;
			}
		}
	}
`;

export default ThirdSection;
