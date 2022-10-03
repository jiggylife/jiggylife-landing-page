import { TabletScreenWidth } from "constants/data";
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
	z-index: -2;
	border-radius: 50%;
	opacity: 0.1;
	filter: blur(1000px);

	@media screen and (max-width: ${TabletScreenWidth}px) {
		background-color: ${({ theme }) => theme.colors.gradientBackgroundSecondary};
		--size: 30rem;
		opacity: 1;
		filter: blur(500px);
	}
`;

export default GradientCircle;
