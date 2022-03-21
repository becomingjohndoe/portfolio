import { useRef } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Desktop from "./pages/Desktop";

function App() {
	const backgroundRef = useRef(null);

	return (
		<div
			ref={backgroundRef}
			className="App h-screen grid grid-rows-layout  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
		>
			<NavBar />
			<Routes>
				<Route path="/desktop" element={<Desktop bg={backgroundRef} />} />
			</Routes>
		</div>
	);
}

export default App;
