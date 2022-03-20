import { useRef, useState, useEffect } from "react";
import Doom from "../components/Doom";
import Icon from "../components/Icon";
import MusicPlayer from "../components/MusicPlayer";
import Settings from "../components/Settings";
import Window from "../components/Window";
import About from "./About";
import doomIcon from "../assets/images/doom-icon.png";
import pacmanIcon from "../assets/images/pacman-icon.png";
import PacMan from "../components/PacMan";
import headshot from "../assets/images/headshot.png";
import logo from "../assets/images/logo.png";
import settingsIcon from "../assets/images/settingsIcon.png";
import Loading from "../components/Loading";
const Desktop = ({ bg }) => {
	const [show, setShow] = useState([false, false, false, false]);
	const [zIndex, setZIndex] = useState([1, 1, 1, 1]);
	const [isLoading, setIsLoading] = useState(true);
	const iconSizeRef = useRef(null);

	const handleLoading = (e) => {
		console.log(e);
		setIsLoading(false);
	};

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, [isLoading]);

	if (isLoading) {
		return <Loading />;
	} else {
		return (
			<>
				{/* desktop */}
				<div className="bounds justify-center flex flex-row h-full relative">
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

					<Window
						name="Space Invaders"
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
			</>
		);
	}
};

export default Desktop;
