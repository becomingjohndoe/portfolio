import { useRef } from "react";
import Icon from "../components/Icon";
import MusicPlayer from "../components/MusicPlayer";
import Settings from "../components/Settings";
import About from "./About";

const Desktop = () => {
	const desktop = useRef(null);
	return (
		<>
			{/* desktop */}
			<div
				ref={desktop}
				className="bounds justify-center flex flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-8 h-screen max-h-screen"
			>
				{/* icon bar */}
				<div className="h-auto w-full flex self-end bg-slate-700 z-50 opacity-80 mb-10 mx-4 px-4 justify-center rounded-lg">
					{/* icon set */}
					<Icon
						name="About Me"
						image="https://cdn-icons-png.flaticon.com/512/4825/4825044.png"
						desktop={desktop}
					>
						<About />
					</Icon>

					<Icon
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
					</Icon>
				</div>
			</div>
		</>
	);
};

export default Desktop;
