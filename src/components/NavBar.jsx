import logo from "../assets/images/logo.png";

export const NavBar = () => {
	return (
		<div className="flex h-auto bg-light-transparent dark:bg-dark-transparent px-2 py-1 items-center relative">
			<img src={logo} alt="" className="h-6 rounded-full " />
			<div className="text-xs text-slate-700 font-bold pl-1 dark:text-slate-50">
				Karl Swatman
			</div>
		</div>
	);
};
