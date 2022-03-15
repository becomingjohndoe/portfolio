import Icon from "../components/Icon";

const iconStyle = {
	display: "flex",
	flexdirection: "column",
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
