import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { WorkCard } from "./components/WorkCard";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<NavBar />
				<Header />
				<WorkCard />
			</div>
		</BrowserRouter>
	);
}

export default App;
