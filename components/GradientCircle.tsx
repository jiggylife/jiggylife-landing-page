import styled from "styled-components";

type GradientCircleProps = {
	className: string;
};

const GradientCircle = ({ className }: GradientCircleProps) => {
	return <Circle className={className} />;
};

const Circle = styled.div`
	--size: 63rem;
	position: absolute;
	height: var(--size);
	width: var(--size);
	background-color: ${({ theme }) => theme.colors.gradientBackground};
	border-radius: 50%;
	opacity: 0.1;
	filter: blur(1000px);
`;

export default GradientCircle;
