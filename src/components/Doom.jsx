import React from "react";
import DosPlayer from "./dos.tsx";

function Doom() {
	return (
		<div className="App" style={{ width: "640px", height: "400px" }}>
			<DosPlayer bundleUrl="doom.jsdos" />
		</div>
	);
}

export default Doom;
