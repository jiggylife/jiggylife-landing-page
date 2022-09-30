import useWindowSize from "./useWindowSize";
import { MobileScreenWidth } from "constants/data";

type Props = {
	desktopClassName: string;
	mobileClassName: string;
};

const useTextClassName = ({ desktopClassName, mobileClassName }: Props) => {
	const { width } = useWindowSize();

	return width < MobileScreenWidth ? mobileClassName : desktopClassName;
};

export default useTextClassName;
