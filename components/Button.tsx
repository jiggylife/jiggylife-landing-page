import { MobileScreenWidth, TabletScreenWidth } from "constants/data";
import React from "react";
import styled from "styled-components";
import useWindowSize from "utils/hooks/useWindowSize";
import { AppStoreDownload, PlayStoreDownload } from "./Icons";

type ButtonProps = { label: string; className?: string } & (
	| {
			link?: boolean;
			href?: string;
			onClick?: never;
	  }
	| { onClick?: () => void; link?: never; href?: never }
);

const Button = ({
	link,
	label,
	className,
	onClick,
	href,
	...props
}: ButtonProps) => {
	const Component = !link ? "button" : "a";

	return (
		<StyledButton
			as={Component}
			className={className}
			onClick={onClick}
			href={href}
			{...props}
		>
			{label}
		</StyledButton>
	);
};

type StoreButtonProps = {
	store: "appstore" | "playstore";
	footer?: boolean;
};

export const StoreButton = ({ store, footer, ...props }: StoreButtonProps) => {
	const { width } = useWindowSize();
	const isMobile = width <= MobileScreenWidth;
	const isSmallMobile = width <= 375;
	const link = store === "appstore" ? "#" : "#";

	return (
		<a rel="noreferrer" target="_blank" href={link} {...props}>
			{store === "appstore" ? (
				<AppStoreDownload
					footer={footer}
					width={isSmallMobile ? 142 : isMobile ? 148 : undefined}
				/>
			) : (
				<PlayStoreDownload
					footer={footer}
					width={isSmallMobile ? 148 : isMobile ? 154 : undefined}
				/>
			)}
		</a>
	);
};

const StyledButton = styled.button`
	background: ${({ theme }) => theme.colors.mainBackground};
	border: ${({ theme }) => theme.colors.primary} 1px solid;
	border-radius: 1000px;
	color: ${({ theme }) => theme.colors.primary} !important;
	font-weight: 400;
	font-size: 15px;
	line-height: 150%;
	padding: 1.5rem 3rem;

	@media screen and (max-width: ${TabletScreenWidth}px) {
		padding: 1rem 2rem;
		font-size: 14px;
	}
`;

export default Button;
