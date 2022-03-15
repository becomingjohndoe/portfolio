import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import { Header } from "../components/Header";

const style = {
	border: "1px solid #eee",
	backgroundColor: "white",
	borderRadius: "5px",
	overflow: "hidden",
	zIndex: "1",
	maxWidth: "500px",
	position: "absolute",
};

const buttonStyle = {
	borderRadius: "50%",
	width: "70px",
	height: "70px",
	backgroundColor: "#fff",
	border: "1px solid #eee",
	padding: "10px",
};

const buttonDescStyle = {
	width: "70px",
	height: "25px",
	color: "#fff",
	textAlign: "center",
	padding: "5px",
};

const Icon = ({ children }) => {
	const [show, setShow] = React.useState(false);
	return (
		<>
			<div
				style={buttonStyle}
				onClick={() => {
					setShow(true);
				}}
			></div>
			<div style={buttonDescStyle}>show</div>
			{show ? (
				<Draggable
					handle=".handle"
					defaultPosition={{ x: 100, y: 100 }}
					position={null}
					scale={1}
					onStart={Draggable.handleStart}
					onDrag={Draggable.handleDrag}
					onStop={Draggable.handleStop}
				>
					<div style={style}>
						<div className="handle window-header">
							Drag from here{" "}
							<button
								className="window-x"
								onClick={() => {
									setShow(false);
								}}
							>
								X
							</button>{" "}
						</div>
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
