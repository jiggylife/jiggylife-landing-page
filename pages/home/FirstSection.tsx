/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled, { useTheme } from "styled-components";
import Image from "next/image";

import BgImage from "assets/images/grid-bg.svg";
import Text from "components/Text";
import {
	MobileScreenWidth,
	SmallDesktopScreenWidth,
	TabletScreenWidth,
} from "constants/data";
import { ThemeType } from "constants/theme";
import { StoreButton } from "components/Button";
import PhoneImage from "assets/images/hero-phone.png";
import PhoneImageBg from "assets/images/hero-phone-bg.svg";
import HeroLightning from "assets/images/hero-lightning.png";
import ManIcon from "assets/images/hero-image-man.png";
import GirlIcon from "assets/images/hero-image-girl.png";
import BabyIcon from "assets/images/hero-image-baby.png";
import useWindowSize from "utils/hooks/useWindowSize";
import GradientCircle from "components/GradientCircle";

const FirstSection = () => {
	const {
		colors: { textSecondary, headingPrimary },
	} = useTheme() as ThemeType;

	const { width } = useWindowSize();

	return (
		<Container>
			<div className="grid-container">
				<Image src={BgImage} />
			</div>

			{width > TabletScreenWidth && (
				<>
					<GradientCircle className="circle-1" />
					<GradientCircle className="circle-2" />
				</>
			)}
			<GradientCircle className="circle-3" />

			<Text
				text="Never get bored with jiggylife"
				type="heading"
				className={`text__heading--${
					width > TabletScreenWidth ? "xl" : "medium"
				}`}
				color={headingPrimary}
			/>

			<Text
				text="Jiggylife is a platform designed for you to learn, earn, and be entertained, we want you to stay Jiggy and stay Happy."
				type="body"
				className={`text__body--${
					width > TabletScreenWidth ? "medium" : "xs"
				}`}
				color={textSecondary}
				style={{ lineHeight: "18px" }}
			/>

			<div className="store-box">
				<StoreButton store="appstore" />
				<StoreButton store="playstore" />
			</div>

			<div className="phone-box">
				<div className="image">
					<Image src={PhoneImage} />
				</div>
				<div className="bg">
					<Image src={PhoneImageBg} />
				</div>
				<div className="lightning-box">
					<Image layout="responsive" src={HeroLightning} />
				</div>

				<div className="icon-man">
					<Image layout="fill" objectFit="contain" src={ManIcon} />
				</div>
				<div className="icon-girl">
					<Image layout="fill" objectFit="contain" src={GirlIcon} />
				</div>
				<div className="icon-baby">
					<Image layout="fill" objectFit="contain" src={BabyIcon} />
				</div>
			</div>
		</Container>
	);
};

const Container = styled.section`
	padding-top: calc(var(--nav-height) + 6%);
	width: 100%;
	position: relative;
	overflow: hidden;

	@media screen and (max-width: 1000px) {
		padding-top: calc(var(--nav-height) + 5%);
	}

	@media screen and (max-width: ${MobileScreenWidth}px) {
		padding-top: calc(var(--nav-height) + 15%);
	}

	.grid-container {
		position: absolute;
		top: 0;
		pointer-events: none;
		z-index: -1;
		opacity: 0.8;

		&::-webkit-scrollbar {
			display: none;
		}

		@media screen and (max-width: ${TabletScreenWidth}px) {
		}
	}

	.circle {
		&-1 {
			top: 13%;
			left: -25%;
		}
		&-2 {
			top: -10%;
			right: -10%;
		}
		&-3 {
			top: 65%;
			right: -10%;

			@media screen and (max-width: ${TabletScreenWidth}px) {
				top: 30%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
	}

	h1,
	p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		width: 70%;

		@media screen and (max-width: 1150px) {
			width: 70%;
		}
		@media screen and (max-width: 990px) {
			width: 80%;
		}

		@media screen and (max-width: 373px) {
			width: calc(var(--content-width));
		}
	}

	p {
		width: 40%;
		margin-top: 2.5rem;

		@media screen and (max-width: ${TabletScreenWidth}px) {
			width: 80%;
			margin-top: 2rem;
		}

		@media screen and (max-width: ${MobileScreenWidth}px) {
			width: var(--content-width);
		}
	}

	.store-box {
		width: max-content;
		margin: 0 auto;
		margin-top: 3rem;

		@media screen and (max-width: ${TabletScreenWidth}px) {
			margin-top: 2.5rem;
		}

		& > *:first-child {
			margin-right: 1.5rem;

			@media screen and (max-width: ${MobileScreenWidth}px) {
				margin-right: 1rem;
			}
		}
	}

	.phone-box {
		width: 70%;
		min-width: 26.5rem;
		margin: 0 auto;
		margin-top: 5.5rem;
		position: relative;

		@media screen and (max-width: ${TabletScreenWidth}px) {
			margin-top: 6.8rem;
		}

		@media screen and (max-width: 625px) {
			margin-top: 6.5rem;
		}

		@media screen and (max-width: ${MobileScreenWidth}px) {
			width: 16.3rem;
		}

		@media screen and (max-width: 350px) {
			width: 15.3rem;
		}

		.image,
		.bg {
			margin: 0 auto;
		}

		.image {
			width: 49%;
			min-width: 17.4rem;

			@media screen and (max-width: 350px) {
				min-width: 16.4rem;
			}
		}

		.bg {
			width: 72%;
			position: absolute;
			bottom: 32%;
			left: 50%;
			transform: translateX(-50%);
			z-index: -1;

			@media screen and (max-width: ${TabletScreenWidth}px) {
				bottom: 27%;
			}

			@media screen and (max-width: ${MobileScreenWidth}px) {
				width: 26.3rem;
			}
		}

		.lightning-box {
			height: 22.5rem;
			width: 16.5rem;
			position: absolute;
			z-index: 1;
			left: 78%;
			top: 20%;

			@media screen and (max-width: 1024px) {
				height: 18.5rem;
				width: 12.5rem;
			}

			@media screen and (max-width: ${TabletScreenWidth}px) {
				height: 5rem;
				width: 6.3rem;
				top: 30%;
			}

			@media screen and (max-width: 550px) {
				height: 4rem;
				width: 5.3rem;
			}

			@media screen and (max-width: ${MobileScreenWidth}px) {
				width: 3.5rem;
				height: 4.6rem;
				left: 87%;
			}
		}

		.icon-man,
		.icon-girl,
		.icon-baby {
			position: absolute;
		}

		.icon-man {
			aspect-ratio: 1;
			width: 16.1rem;
			top: 15%;
			right: -8.5%;
			z-index: 2;

			@media screen and (max-width: ${SmallDesktopScreenWidth}px) {
				width: 13rem;
			}

			@media screen and (max-width: ${TabletScreenWidth}px) {
				width: 6.1rem;
				top: 25%;
				right: 4%;
			}

			@media screen and (max-width: 695px) {
				top: 24%;
				right: 1%;
			}

			@media screen and (max-width: 596px) {
				top: 21%;
				right: -3%;
			}

			@media screen and (max-width: ${MobileScreenWidth}px) {
				top: 20%;
				right: -19%;
			}
		}
		.icon-girl {
			height: 19.8rem;
			width: 16.6rem;
			top: -35%;
			right: -7%;

			@media screen and (max-width: 932px) {
				top: -45%;
				right: -9%;
				height: 17.8rem;
				width: 14.6rem;
			}

			@media screen and (max-width: ${TabletScreenWidth}px) {
				height: 8.7rem;
				width: 6rem;
				top: -13%;
				right: 13%;
			}

			@media screen and (max-width: 645px) {
				top: -15%;
				right: 11%;
			}

			@media screen and (max-width: 570px) {
				right: 6%;
			}

			@media screen and (max-width: 500px) {
				right: 2%;
				top: -18%;
			}

			@media screen and (max-width: ${MobileScreenWidth}px) {
				right: -19.5%;
				height: 8rem;
				width: 6.5rem;
			}

			@media screen and (max-width: 390px) {
				right: -14.5%;
			}
			@media screen and (max-width: 360px) {
				right: -12.5%;
			}
			@media screen and (max-width: 350px) {
				right: -8%;
			}
		}
		.icon-baby {
			--size: 16.6rem;
			height: var(--size);
			width: var(--size);
			left: -5%;
			top: -12%;

			@media screen and (max-width: ${TabletScreenWidth}px) {
				height: 8.3rem;
				width: 6.7rem;
				top: 1%;
				left: 10%;
			}

			@media screen and (max-width: 635px) {
				left: 6%;
			}

			@media screen and (max-width: 530px) {
				left: 2%;
			}

			@media screen and (max-width: 480px) {
				left: -2%;
			}

			@media screen and (max-width: ${MobileScreenWidth}px) {
				height: 6.7rem;
				width: 8.3rem;
				left: -19%;
			}

			@media screen and (max-width: 360px) {
				left: -14%;
			}

			@media screen and (max-width: 350px) {
				left: -10%;
			}
		}
	}
`;

export default FirstSection;
