import Draggable from "react-draggable";
const style = {
	border: "1px solid #eee",
	backgroundColor: "white",
	borderRadius: "5px",
	overflow: "hidden",
};
const Window = (props) => {
	return (
		<Draggable
			bounds="parent"
			handle=".handle"
			onStart={Draggable.handleStart}
			onDrag={Draggable.handleDrag}
			onStop={Draggable.handleStop}
			scale={1}
		>
			{/* window wrapper */}
			<div style={style} className="hover:z-40 relative h-min">
				{/* window header */}
				<div class="flex items-center justify-start p-1 border-slate-50 dark:border-slate-700">
					{/* close, minimize and maximize buttons */}
					<div class="p-1 flex items-left justify-left">
						<div
							class="bg-red-500 m-1 w-3 h-3 rounded-full hover:cursor-pointer"
							onClick={() => {}}
						></div>
						<div class="bg-yellow-500 m-1 w-3 h-3 rounded-full"></div>
						<div class="bg-green-500 m-1 w-3 h-3 rounded-full"></div>
					</div>
					{/* window name container && drag handle */}
					<div class="active:cursor-grab handle h-8 w-full flex  items-center justify-center  left-0">
						{/* window name */}
						<span class="font-sans text-xs text-gray-500 dark:text-gray-400">
							{props.name}
						</span>
					</div>
				</div>
				{/* window content */}
				{props.children}
			</div>
		</Draggable>
	);
};

export default Window;
