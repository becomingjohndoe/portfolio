import { useRef, useState, useEffect, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// COMPONENTS
import NavBar from "./components/NavBar";
import Desktop from "./pages/Desktop";

function App() {
	const loader = document.querySelector(".loader");
	const backgroundRef = useRef(null);

	const hideLoader = () => loader.classList.add("loader--hide");

	useEffect(hideLoader, []);

	return (
		<div
			ref={backgroundRef}
			className="App h-screen grid grid-rows-layout  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
		>
			<NavBar />
			<Desktop bg={backgroundRef} />
		</div>
	);
}

export default App;
