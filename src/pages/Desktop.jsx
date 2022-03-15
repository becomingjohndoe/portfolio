import Icon from "../components/Icon";

const iconStyle = {
	display: "flex",
	height: "100vh",
	width: "200px",
	flexFlow: "column wrap",
};

const Desktop = () => {
	return (
		<div style={iconStyle}>
			<Icon />
			<Icon />
			<Icon />
			<Icon />
			<Icon />
			<Icon />
		</div>
	);
};

export default Desktop;
