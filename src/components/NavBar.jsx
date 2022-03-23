import logo from "../assets/images/logo.svg";
import linkedin from "../assets/images/linkedin.svg";
import github from "../assets/images/github.svg";

const NavBar = () => {
	return (
		<div className="flex flex-row h-auto bg-light-transparent dark:bg-dark-transparent items-center">
			<div className="flex px-2 py-1 items-center">
				<img src={logo} alt="" className="h-6 rounded-full " />
				<div className="text-xs text-slate-700 font-bold pl-1 dark:text-slate-50">
					Karl Swatman
				</div>
				<div className="dropdown hover:cursor-pointer ml-2">
					<div tabindex="0" class=" text-xs p-1 text-slate-700 dark:text-slate-50">
						Details
					</div>
					<ul
						tabindex="0"
						class="dropdown-content menu  mt-1 w-52 bg-dark-transparent text-xs z-50"
					>
						<li>
							<a>Item 1</a>
						</li>
						<li>
							<a>Item 2</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex grow justify-end gap-2 mr-2">
				<a
					href="https://www.linkedin.com/in/karl-swatman-43b2a0ab/"
					target="__blank"
				>
					<img src={linkedin} alt="" className="h-6 rounded-md dark:bg-slate-50" />
				</a>
				<a href="https://github.com/becomingjohndoe" target="__blank">
					{" "}
					<img src={github} alt="" className="h-6 rounded-md dark:bg-slate-50" />
				</a>
			</div>
		</div>
	);
};

export default NavBar;
