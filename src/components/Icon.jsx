import React from "react";
import ReactDOM from "react-dom";
import { Header } from "../components/Header";

const buttonStyle = {
	borderRadius: "50%",
	width: "70px",
	height: "70px",
	backgroundColor: "#fff",
	border: "1px solid #eee",
	marginRight: "10px",
};

const iconContainerStyle = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
};

const Icon = ({ children, name, image }) => {
	const [show, setShow] = React.useState(false);
	return (
		<>
			{/* icon wrapper */}
			<div className="z-50 flex-col items-center flex w-14 relative opacity-100">
				{/* // icon name */}
				<div className="text-xs text-slate-50">{name}</div>
				{/* // icon */}
				<div
					className="overflow-hidden h-12 w-12 font-semibold rounded-xl border-2 transition ease-in duration-100 transform hover:-translate-y-2 active:translate-y-0 bg-slate-50 mx-0.5 drop-shadow-md mb-1"
					onClick={() => {
						setShow(true);
					}}
				>
					{/* // icon image */}
					<img src={image} alt="" />
				</div>
				{/* // open indicator */}
				<svg height="4" width="4">
					<circle
						cx="2"
						cy="2"
						r={show ? "2" : "0"}
						stroke="black"
						stroke-width="0"
						fill="white"
					/>
				</svg>
			</div>
		</>
	);
};

export default Icon;
