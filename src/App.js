import { useRef, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { WorkCard } from "./components/WorkCard";
import { Home } from "./pages/Home";
import Desktop from "./pages/Desktop";

function App() {
	const backgroundRef = useRef(null);
	const [isLoading, setIsLoading] = useState(true);

	const handleLoading = (e) => {
		console.log(e);
		setIsLoading(false);
	};

	useEffect(() => {
		window.addEventListener("load", handleLoading);

		return () => {
			window.removeEventListener("load", handleLoading);
		};
	}, [isLoading]);

	return !isLoading ? (
		<div
			ref={backgroundRef}
			className="App h-screen grid grid-rows-layout  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
		>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/desktop" element={<Desktop bg={backgroundRef} />} />
			</Routes>
		</div>
	) : (
		<div>loading</div>
	);
}

export default App;
