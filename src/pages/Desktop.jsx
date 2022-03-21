import { useRef, useState, useEffect, lazy, Suspense } from "react";
// ICONS
import logo from "../assets/images/logo.svg";
import doomIcon from "../assets/images/doom-icon.svg";
import pacmanIcon from "../assets/images/pacman-icon.svg";
import settingsIcon from "../assets/images/settingsIcon.svg";

import Loading from "../components/Loading";
// COMPONENTS
const Doom = lazy(() => import("../components/Doom"));
const Icon = lazy(() => import("../components/Icon"));
const Settings = lazy(() => import("../components/Settings"));
const Window = lazy(() => import("../components/Window"));
const PacMan = lazy(() => import("../components/PacMan"));
const About = lazy(() => import("./About"));

const Desktop = ({ bg }) => {
	const [show, setShow] = useState([false, false, false, false]);
	const [zIndex, setZIndex] = useState([1, 1, 1, 1]);
	const [isLoading, setIsLoading] = useState(true);
	const iconSizeRef = useRef(null);

	useEffect(() => {
		setIsLoading(false);
	}, [isLoading]);

	if (isLoading) {
		return <Loading />;
	} else {
		return (
			<Suspense fallback={<div>Loading...</div>}>
				{/* desktop */}
				<div className="bounds justify-center flex flex-row h-full relative">
					{/* windows */}
					{/* About */}
					<Window
						name="About Me"
						show={show}
						index={0}
						setShow={setShow}
						z={zIndex}
						setZIndex={setZIndex}
					>
						<About />
					</Window>
					{/* Settings */}
					<Window
						name="Settings"
						show={show}
						index={1}
						setShow={setShow}
						z={zIndex}
						setZIndex={setZIndex}
					>
						<Settings bg={bg} />
					</Window>
					{/* Doom */}
					<Window
						name="Doom"
						show={show}
						index={2}
						setShow={setShow}
						z={zIndex}
						setZIndex={setZIndex}
					>
						<Doom />
					</Window>
					{/* PacMan */}
					<Window
						name="Pac Man"
						show={show}
						index={3}
						setShow={setShow}
						z={zIndex}
						setZIndex={setZIndex}
					>
						<PacMan />
					</Window>
				</div>
				{/* icon bar */}
				<div className="h-min flex flex-col">
					<div className="h-auto w-auto flex bg-light-transparent dark:bg-dark-transparent z-50 justify-center rounded-lg relative mx-4 mb-2">
						{/* icon set */}
						<Icon
							name="About Me"
							image={logo}
							show={show}
							index={0}
							setShow={setShow}
							z={zIndex}
							setZIndex={setZIndex}
						></Icon>

						<Icon
							name="Settings"
							image={settingsIcon}
							show={show}
							index={1}
							setShow={setShow}
							z={zIndex}
							setZIndex={setZIndex}
						></Icon>

						<Icon
							name="DOOM"
							image={doomIcon}
							show={show}
							index={2}
							setShow={setShow}
							z={zIndex}
							setZIndex={setZIndex}
						></Icon>

						<Icon
							name="PAC MAN"
							image={pacmanIcon}
							show={show}
							index={3}
							setShow={setShow}
							z={zIndex}
							setZIndex={setZIndex}
						></Icon>
					</div>
				</div>
			</Suspense>
		);
	}
};

export default Desktop;
