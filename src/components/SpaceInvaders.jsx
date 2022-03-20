import React from "react";
import DosPlayer from "./dos.tsx";

function SpaceInvaders() {
	return (
		<div className="App" style={{ width: "640px", height: "400px" }}>
			<DosPlayer bundleUrl="space.jsdos" />
		</div>
	);
}

export default SpaceInvaders;
