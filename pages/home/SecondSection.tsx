import React from "react";
import styled, { useTheme } from "styled-components";

import { SupportIcon, CheckIcon, AuthenticIcon } from "components/Icons";
import Text from "components/Text";
import { ThemeType } from "constants/theme";
import useWindowSize from "utils/hooks/useWindowSize";
import { MobileScreenWidth } from "constants/data";

const content = [
	{
		Icon: SupportIcon,
		heading: "24/7 Support",
		body: "Readily available to help and provide answers to questions as soon as they come up.",
	},
	{
		Icon: CheckIcon,
		heading: "Safe & Secure",
		body: "Using out platform is safe & Secure, your data are safe with us, all data is classified as confidential",
	},
	{
		Icon: AuthenticIcon,
		heading: "100% Authentic",
		body: "Yes, we are 100% authentic, you have nothing to worry about",
	},
];

const ListItem = ({ Icon, heading, body }: typeof content[0]) => {
	const {
		colors: { headingPrimary },
	} = useTheme() as ThemeType;

	const { width } = useWindowSize();

	return (
		<Item>
			<Icon width={(width <= MobileScreenWidth && 42) || undefined} />
			<Text
				type="heading"
				className={`text__heading--${
					width > MobileScreenWidth ? "small" : "xxs"
				}`}
				text={heading}
				color={headingPrimary}
				style={{ fontWeight: 800 }}
			/>
			<Text type="body" text={body} className={`text__body--${
					width > MobileScreenWidth ? "xl" : "small"
				}`} />
		</Item>
	);
};

const Item = styled.div`
	background-color: white;
	max-width: 36.4rem;

	@media screen and (max-width: 926px) {
		text-align: center;
	}

	svg {
		margin-bottom: 3.5rem;

		@media screen and (max-width: ${MobileScreenWidth}px) {
			margin-bottom: 2.9rem;
		}
	}

	h1 {
		margin-bottom: 2rem;

		@media screen and (max-width: ${MobileScreenWidth}px) {
		}
	}
`;

const SecondSection = () => {
	return (
		<Container>
			<div className="content">
				{content.map((item, index) => (
					<ListItem key={index} {...item} />
				))}
			</div>
		</Container>
	);
};

const Container = styled.section`
	width: 100%;
	margin-top: 11.4rem;

	@media screen and (max-width: ${MobileScreenWidth}px) {
		margin-top: 8rem;
	}

	.content {
		width: var(--content-width);
		/* background-color: red; */
		margin: 0 auto;
		padding: 10.5rem 0;
		display: flex;
		flex-wrap: wrap;
		gap: 7rem;
		justify-content: center;

		@media screen and (max-width: ${MobileScreenWidth}px) {
			padding: 0;
      gap: 3.5rem;
		}
	}
`;

export default SecondSection;
