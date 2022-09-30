import Image from "next/image";
import React from "react";
import styled, { useTheme } from "styled-components";

import PhoneImage from "assets/images/last-section-phone.png";
import Text from "components/Text";
import useWindowSize from "utils/hooks/useWindowSize";
import { ThemeType } from "constants/theme";
import {
	MobileScreenWidth,
	SmallDesktopScreenWidth,
	TabletScreenWidth,
} from "constants/data";

const FourthSection = () => {
	const {
		colors: { headingPrimary },
	} = useTheme() as ThemeType;
	const { width } = useWindowSize();

	return (
		<Container>
			<div className="content">
				<div className="content__left">
					<Image src={PhoneImage} alt="" className="image" />
				</div>

				<div className="content__right">
					<Text
						type="heading"
						text="Play Our Games and Learn More Every day💰"
						className={`text__heading--${
							width > MobileScreenWidth ? "large" : "xs"
						}`}
						color={headingPrimary}
					/>

					<Text
						type="body"
						text="We send trivia questions as an opportunity to learn and earn. So For every correct answer, we will give a cash prize."
						className={`text__body--${
							width > MobileScreenWidth ? "xl" : "small"
						}`}
					/>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.section`
	padding: 4% 0;

	@media only screen and (max-width: ${TabletScreenWidth}px) {
		padding: 6% 0 12% 0;
	}

	.content {
		width: var(--content-width);
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;

		@media only screen and (max-width: ${TabletScreenWidth}px) {
			flex-direction: column-reverse;
		}

		&__left {
			width: 40%;

			@media only screen and (max-width: ${TabletScreenWidth}px) {
				width: 100%;
				max-width: 36.3rem;
			}

			.image {
				width: 100%;
				aspect-ratio: 1.086;
			}
		}

		&__right {
			width: 45%;

			@media only screen and (max-width: ${TabletScreenWidth}px) {
				width: 100%;
			}

			h1 {
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
				@media screen and (max-width: ${TabletScreenWidth}px) {
					margin-bottom: 5rem;
				}
			}
		}
	}
`;

export default FourthSection;
