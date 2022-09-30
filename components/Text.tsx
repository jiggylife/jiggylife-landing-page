import React from "react";
import styled from "styled-components";

type TextProps = {
	text: string;
	type: "heading" | "subheading" | "body";
	className: string;
	color?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

const Text = ({ text, type, className, color, ...props }: TextProps) => {
	return type === "heading" ? (
		<h1 className={className} {...props}>
			{text}
		</h1>
	) : type === "subheading" ? (
		<h2 className={className} {...props}>
			{text}
		</h2>
	) : type === "body" ? (
		<p className={className} {...props}>
			{text}
		</p>
	) : null;
};

export default styled(Text)`
	color: ${({
		color,
		theme: {
			colors: { textPrimary },
		},
	}) => color || textPrimary};
`;
