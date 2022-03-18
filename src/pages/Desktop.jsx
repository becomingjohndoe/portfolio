import { useRef, useState } from "react";
import Icon from "../components/Icon";
import MusicPlayer from "../components/MusicPlayer";
import Settings from "../components/Settings";
import Window from "../components/Window";
import About from "./About";

const Desktop = () => {
	const [show, setShow] = useState([false, false, false, false]);
	const desktop = useRef(null);
	return (
		<>
			{/* desktop */}
			<div
				ref={desktop}
				className="bounds justify-center flex flex-row h-full relative"
			>
				<Window name="About Me" show={show} index={0} setShow={setShow}>
					<About />
				</Window>
			</div>
			<div className="h-min flex flex-col">
				{/* icon bar */}
				<div className="h-auto w-auto flex bg-light-transparent dark:bg-dark-transparent z-50 justify-center rounded-lg relative mx-4 mb-2">
					{/* icon set */}
					<Icon
						name="About Me"
						image="https://cdn-icons-png.flaticon.com/512/4825/4825044.png"
						desktop={desktop}
						show={show}
						index={0}
						setShow={setShow}
					></Icon>

					{/* <Icon
						name="Music"
						image="https://cdn-icons-png.flaticon.com/512/4497/4497920.png"
						desktop={desktop}
					>
						<MusicPlayer />
					</Icon>
					<Icon
						name="Settings"
						image="https://cdn-icons-png.flaticon.com/512/5045/5045224.png"
						desktop={desktop}
					>
						<Settings />
					</Icon> */}
				</div>
			</div>
		</>
	);
};

export default Desktop;
