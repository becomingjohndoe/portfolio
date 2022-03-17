import { useRef } from "react";
import Icon from "../components/Icon";
import MusicPlayer from "../components/MusicPlayer";
import Settings from "../components/Settings";
import Window from "../components/Window";
import About from "./About";

const Desktop = () => {
	const desktop = useRef(null);
	return (
		<>
			{/* desktop */}
			<div
				ref={desktop}
				className="bounds justify-center flex flex-row h-full relative"
			>
				<Window name="About">
					<About />
				</Window>
			</div>
			<div className="h-min flex flex-col content-center">
				{/* icon bar */}
				<div className="h-auto w-auto flex bg-slate-700 z-50 opacity-70 justify-center rounded-lg relative mx-4">
					{/* icon set */}
					<Icon
						name="About Me"
						image="https://cdn-icons-png.flaticon.com/512/4825/4825044.png"
						desktop={desktop}
					></Icon>

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
