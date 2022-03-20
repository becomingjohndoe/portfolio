import React from "react";
import DosPlayer from "./dos.tsx";

function PacMan() {
	return (
		<div className="App" style={{ width: "640px", height: "400px" }}>
			<DosPlayer bundleUrl="pacman.jsdos" />
		</div>
	);
}

export default PacMan;
