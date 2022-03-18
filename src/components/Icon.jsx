import React from "react";
import ReactDOM from "react-dom";
import { Header } from "../components/Header";

const Icon = ({
	children,
	name,
	image,
	show,
	setShow,
	index,
	z,
	setZIndex,
}) => {
	console.log(show[index]);
	return (
		<>
			{/* icon wrapper */}
			<div className="group z-50 flex-col items-center flex w-14  opacity-100 transition ease-in duration-100 transform hover:-translate-y-2">
				{/* // icon name */}
				<div className="relative h-0 w-[120%] ">
					<div className="absolute text-xs text-slate-50 mb-1  bg-light-transparent dark:bg-dark-transparent rounded-md -top-9 whitespace-nowrap border p-1 left-0 right-0 text-center w-auto invisible group-hover:visible">
						{name}
					</div>
				</div>
				{/* // icon */}
				<div
					className="overflow-hidden h-12 w-12 font-semibold rounded-xl border-2  bg-slate-50 mx-0.5 drop-shadow my-1 "
					onClick={() => {
						if (!show[index]) {
							setShow((current) => {
								const newShow = [...current];
								newShow[index] = true;
								return newShow;
							});
						}
						setZIndex((current) => {
							const newZ = current.map(() => 1);
							newZ[index] = 50;
							return newZ;
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
