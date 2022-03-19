import Draggable from "react-draggable";

const Window = (props) => {
	return (
		<>
			{props.show[props.index] ? (
				<Draggable
					bounds="parent"
					handle=".handle"
					onStart={Draggable.handleStart}
					onDrag={Draggable.handleDrag}
					onStop={Draggable.handleStop}
					scale={1}
				>
					{/* window wrapper */}
					<div
						className={`z-${
							props.z[props.index]
						} overflow-hidden rounded-lg h-min absolute`}
						onPointerDown={() => {
							props.setZIndex((current) => {
								const newZ = current.map(() => 1);
								newZ[props.index] = 50;
								return newZ;
							});
						}}
					>
						{/* window header */}
						<div className="flex items-center justify-start p-1 bg-slate-50 dark:bg-slate-700 drop-shadow-md">
							{/* close, minimize and maximize buttons */}
							<div className="p-1 flex items-left justify-left">
								<div
									className="bg-red-500 m-1 w-3 h-3 rounded-full hover:cursor-pointer"
									onClick={() => {
										props.setShow((current) => {
											const newShow = [...current];
											newShow[props.index] = false;
											return newShow;
										});
									}}
								></div>
								<div className="bg-yellow-500 m-1 w-3 h-3 rounded-full"></div>
								<div className="bg-green-500 m-1 w-3 h-3 rounded-full"></div>
							</div>
							{/* window name container && drag handle */}
							<div className="active:cursor-grab handle h-8 w-full flex  items-center justify-center left-0">
								{/* window name */}
								<span className="font-sans text-xs text-slate-700 dark:text-slate-50 font-bold">
									{props.name}
								</span>
							</div>
						</div>
						{/* window content */}
						{props.children}
					</div>
				</Draggable>
			) : null}
		</>
	);
};

export default Window;
