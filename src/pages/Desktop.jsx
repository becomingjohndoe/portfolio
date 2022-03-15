import { Header } from "../components/Header";
import Icon from "../components/Icon";
import About from "./About";

const iconStyle = {
	display: "flex",
	height: "100vh",
	width: "200px",
	flexFlow: "column wrap",
	paddingBottom: "100px",
};

const Desktop = () => {
	return (
		<div style={iconStyle}>
			<Icon>
				<About />{" "}
			</Icon>

			<Icon />
			<Icon />
			<Icon />
			<Icon />
			<Icon />
		</div>
	);
};

export default Desktop;
