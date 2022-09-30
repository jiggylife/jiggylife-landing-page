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
							width > MobileScreenWidth ? "medium" : "xxs"
						}`}
						color={primary}
						style={{ fontWeight: 700 }}
					/>

					<Text
						type="heading"
						text="You Probably Want to Know About Us Right?"
						className={`text__heading--${
							width > MobileScreenWidth ? "large" : "xs"
						}`}
						color={headingPrimary}
					/>

					<Text
						type="body"
						text="JIGGY is a registered social platform established in 2022 that allow you earn money by answering trivia questions, view contents and videos from other users, vote for your favorite BBNaija Housemates and access leaderboard of influencers on the platform."
						className={`text__body--${
							width > MobileScreenWidth ? "xl" : "small"
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

				@media only screen and (max-width: ${MobileScreenWidth}px) {
					font-size: 25px;
					line-height: 31px;
					margin-bottom: 1.5rem;
					font-weight: 800;
				}
			}
			p {
				@media only screen and (max-width: ${SmallDesktopScreenWidth}px) and (min-width: ${MobileScreenWidth}px) {
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
