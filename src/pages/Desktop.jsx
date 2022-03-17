import { Header } from "../components/Header";
import Icon from "../components/Icon";
import MusicPlayer from "../components/MusicPlayer";
import Settings from "../components/Settings";
import About from "./About";

const Desktop = () => {
	return (
		<>
			{/* icon bar */}
			<div className="h-16 w-full bg-slate-700 absolute bottom-2 z-50 opacity-80 px-4"></div>
			{/* desktop */}
			<div className="relative h-full justify-center flex flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
				{/* icon set */}
				<Icon
					name="About Me"
					image="https://cdn-icons-png.flaticon.com/512/4825/4825044.png"
				>
					<About />{" "}
				</Icon>

				<Icon
					name="Music"
					image="https://cdn-icons-png.flaticon.com/512/4497/4497920.png"
				>
					<MusicPlayer />
				</Icon>
				<Icon
					name="Settings"
					image="https://cdn-icons-png.flaticon.com/512/5045/5045224.png"
				>
					<Settings />
				</Icon>
			</div>
		</>
	);
};

export default Desktop;
