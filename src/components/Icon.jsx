import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import { Header } from "../components/Header";

const style = {
	border: "1px solid #eee",
	height: "250px",
	width: "250px",
	backgroundColor: "white",
	borderRadius: "5px",
	overflow: "hidden",
	position: "absolute",
	zIndex: "1",
};

const xstyle = {
	position: "fixed",
	top: 0,
	left: 0,
};

const buttonStyle = {
	position: "relative",
	borderRadius: "50%",
	width: "50px",
	height: "50px",
	backgroundColor: "#fff",
};

const Icon = () => {
	const [show, setShow] = React.useState(false);
	return (
		<>
			<div
				style={buttonStyle}
				onClick={() => {
					setShow(true);
				}}
			>
				show
			</div>
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
						<div className="handle">
							Drag from here{" "}
							<button
								style={xstyle}
								onClick={() => {
									setShow(false);
								}}
							>
								X
							</button>{" "}
						</div>
						<div>This readme is really dragging on...</div>
						<Header />
					</div>
				</Draggable>
			) : null}
		</>
	);
};

export default Icon;
