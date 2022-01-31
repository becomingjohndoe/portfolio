import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { WorkCard } from "./components/WorkCard";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route exact path="/" component={Header} />
			</Routes>
		</div>
	);
}

export default App;
