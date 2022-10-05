import Image from "next/image";
import React from "react";
import styled, { useTheme } from "styled-components";

import PhoneImage from "assets/images/last-section-phone.png";
import Text from "components/Text";
import useWindowSize from "utils/hooks/useWindowSize";
import { ThemeType } from "constants/theme";
import {
	SmallDesktopScreenWidth,
	TabletScreenWidth,
} from "constants/data";

const FifthSection = () => {
	const {
		colors: { headingPrimary },
	} = useTheme() as ThemeType;
	const { width } = useWindowSize();

	return (
		<Container>
			<div className="content">
				<div className="content__left">
					<Text
						type="heading"
						text="Join the conversation cooked by your favourite influencer 🥷"
						className={`text__heading--${
							width > TabletScreenWidth ? "large" : "xs"
						}`}
						color={headingPrimary}
					/>

					<Text
						type="body"
						text="Jiggylife gives you the opportunity to connect with your favourite influencer, join the conversation around them and help them drag other influencers."
						className={`text__body--${
							width > TabletScreenWidth ? "xl" : "small"
						}`}
					/>
				</div>

				<div className="content__right">
					<Image src={PhoneImage} alt="" className="image" />
				</div>
			</div>
		</Container>
	);
};

const Container = styled.section`
	padding: 6% 0 10% 0;

	@media only screen and (max-width: ${TabletScreenWidth}px) {
		padding: 8% 0 15% 0;
	}

	.content {
		width: var(--content-width);
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;

		@media only screen and (max-width: ${TabletScreenWidth}px) {
			flex-direction: column;
		}

		&__right {
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

		&__left {
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

				@media only screen and (max-width: ${TabletScreenWidth}px) {
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

export default FifthSection;
