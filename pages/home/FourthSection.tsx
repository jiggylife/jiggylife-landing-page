import Image from "next/image";
import React from "react";
import styled, { useTheme } from "styled-components";

import PhoneImage from "assets/images/last-section-phone.png";
import Text from "components/Text";
import useWindowSize from "utils/hooks/useWindowSize";
import { ThemeType } from "constants/theme";
import { SmallDesktopScreenWidth, TabletScreenWidth } from "constants/data";

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
						text="Know whats happening to your favourite influencer 👀"
						className={`text__heading--${
							width > TabletScreenWidth ? "large" : "xs"
						}`}
						color={headingPrimary}
					/>

					<Text
						type="body"
						text="Get a glimpse into the life of some of your favourite influencers, discover more great and shitty things about them."
						className={`text__body--${
							width > TabletScreenWidth ? "xl" : "small"
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

export default FourthSection;
