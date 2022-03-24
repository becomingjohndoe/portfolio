import { useState, useRef, useEffect } from "react";

import logo from "../assets/images/logo.svg";

const loadingLines = [
	"Mining some bitcoins...",
	"Reticulating splines...",
	"Bending the spoon...",
	"We need a new fuse...",
	"Computing chance of success",
	"I feel like im supposed to be loading something. . .",
	"Adjusting flux capacitor...",
	"I swear it's almost done.",
	"Convincing AI not to turn evil..",
	"Wait, do you smell something burning?",
];

const Loading = () => {
	const progress = useRef(0);
	const line = useRef(0);
	let lineNumber = 0;

	useEffect(() => {
		const interval = setInterval(() => {
			progress.current.value = progress.current.value + 10;
			line.current.innerHTML = loadingLines[lineNumber];
			lineNumber++;
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="h-screen w-screen">
			<div className="flex flex-col items-center h-full justify-center">
				<img src={logo} alt="" className="h-48 w-48 bg-slate-50" />
				<progress
					ref={progress}
					className="progress w-56 mt-4"
					defaultValue="0"
					max="100"
				></progress>
				<span ref={line} className="p-3 text-slate-50"></span>
			</div>
		</div>
	);
};

export default Loading;
