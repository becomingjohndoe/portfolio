import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { WorkCard } from "./components/WorkCard";
import { Home } from "./pages/Home";
import Desktop from "./pages/Desktop";

function App() {
	return (
		<div className="App overflow-hidden h-screen">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/desktop" element={<Desktop />} />
			</Routes>
		</div>
	);
}

export default App;
