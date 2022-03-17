import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import { Header } from "../components/Header";

const style = {
	border: "1px solid #eee",
	backgroundColor: "white",
	borderRadius: "5px",
	overflow: "hidden",
	position: "absolute",
};

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

const Icon = ({ children, name, image, desktop }) => {
	console.log(desktop);
	const [show, setShow] = React.useState(false);
	return (
		<>
			{/* icon wrapper */}
			<div className="z-50 self-end flex-col items-center flex w-14">
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
			{show ? (
				<Draggable
					bounds=".bounds"
					handle=".handle"
					defaultPosition={{ x: 300, y: -500 }}
					onStart={Draggable.handleStart}
					onDrag={Draggable.handleDrag}
					onStop={Draggable.handleStop}
					scale={1}
					position={null}
					offsetParent={desktop.current ? desktop.current : null}
				>
					{/* window wrapper */}
					<div style={style} className=" hover:z-40 ">
						{/* window header */}
						<div class="flex items-center justify-start p-1 border-slate-50 dark:border-slate-700">
							{/* close, minimize and maximize buttons */}
							<div class="p-1 flex items-left justify-left">
								<div
									class="bg-red-500 m-1 w-3 h-3 rounded-full hover:cursor-pointer"
									onClick={() => {
										setShow(false);
									}}
								></div>
								<div class="bg-yellow-500 m-1 w-3 h-3 rounded-full"></div>
								<div class="bg-green-500 m-1 w-3 h-3 rounded-full"></div>
							</div>
							{/* window name container && drag handle */}
							<div class="active:cursor-grab handle h-8 w-full flex  items-center justify-center  left-0">
								{/* window name */}
								<span class="font-sans text-xs text-gray-500 dark:text-gray-400">
									{name}
								</span>
							</div>
						</div>
						{/* window content */}
						{children}
					</div>
				</Draggable>
			) : (
				<></>
			)}
		</>
	);
};

export default Icon;
