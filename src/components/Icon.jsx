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

const Icon = ({ children, name, image, show, setShow, index }) => {
	console.log(show[index]);
	return (
		<>
			{/* icon wrapper */}
			<div className="group z-50 flex-col items-center flex w-14  opacity-100 transition ease-in duration-100 transform hover:-translate-y-2">
				{/* // icon name */}
				<div className="relative h-0 w-[120%] ">
					<div className="absolute text-xs text-slate-50 mb-1  bg-slate-600 rounded-md -top-9 whitespace-nowrap border p-1 left-0 right-0 text-center w-auto invisible group-hover:visible">
						{name}
					</div>
				</div>
				{/* // icon */}
				<div
					className="overflow-hidden h-12 w-12 font-semibold rounded-xl border-2  bg-slate-50 mx-0.5 drop-shadow my-1 "
					onClick={() => {
						setShow((current) => {
							const newShow = [...current];
							newShow[index] = !newShow[index];
							return newShow;
						});
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
						r={show[index] ? "2" : "0"}
						stroke="black"
						strokeWidth="0"
						fill="white"
					/>
				</svg>
			</div>
		</>
	);
};

export default Icon;
