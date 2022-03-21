import { useRef, useState, useEffect, lazy, Suspense } from "react";
// ICONS
import logo from "../assets/images/logo.svg";
import doomIcon from "../assets/images/doom-icon.svg";
import pacmanIcon from "../assets/images/pacman-icon.svg";
import settingsIcon from "../assets/images/settingsIcon.svg";
import skillsicon from "../assets/images/skills-icon.svg";
import worksIcon from "../assets/images/code.png";
import musicIcon from "../assets/images/musicIcon.png";

// COMPONENTS
const Doom = lazy(() => import("../components/Doom"));
const Icon = lazy(() => import("../components/Icon"));
const Settings = lazy(() => import("../components/Settings"));
const Window = lazy(() => import("../components/Window"));
const PacMan = lazy(() => import("../components/PacMan"));
const About = lazy(() => import("./About"));
const Skills = lazy(() => import("../components/Skills"));
const Works = lazy(() => import("../components/Works"));
const MusicPlayer = lazy(() => import("../components/MusicPlayer"));

const Desktop = ({ bg }) => {
	const [show, setShow] = useState([false, false, false, false, false, false]);
	const [zIndex, setZIndex] = useState([0, 0, 0, 0, 0, 0]);
	const iconSizeRef = useRef(null);

	return (
		<Suspense
			fallback={<div className="h-screen w-screen absolute cursor-wait"></div>}
		>
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
				{/* Skills */}
				<Window
					name="Skills"
					show={show}
					index={4}
					setShow={setShow}
					z={zIndex}
					setZIndex={setZIndex}
				>
					<Skills />
				</Window>
				{/* Works */}
				<Window
					name="Works"
					show={show}
					index={5}
					setShow={setShow}
					z={zIndex}
					setZIndex={setZIndex}
				>
					<Works />
				</Window>
				{/* Music Player */}
				<Window
					name="Music Player"
					show={show}
					index={6}
					setShow={setShow}
					z={zIndex}
					setZIndex={setZIndex}
				>
					<MusicPlayer />
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

					<Icon
						name="Skills"
						image={skillsicon}
						show={show}
						index={4}
						setShow={setShow}
						z={zIndex}
						setZIndex={setZIndex}
					></Icon>

					<Icon
						name="Works"
						image={worksIcon}
						show={show}
						index={5}
						setShow={setShow}
						z={zIndex}
						setZIndex={setZIndex}
					></Icon>

					<Icon
						name="Music"
						image={musicIcon}
						show={show}
						index={6}
						setShow={setShow}
						z={zIndex}
						setZIndex={setZIndex}
					></Icon>
				</div>
			</div>
		</Suspense>
	);
};

export default Desktop;
