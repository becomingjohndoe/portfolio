import logo from "../assets/images/logo.svg";

const NavBar = () => {
	return (
		<div className="flex flex-row h-auto bg-light-transparent dark:bg-dark-transparent items-center">
			<div className="flex px-2 py-1 items-center">
				<img src={logo} alt="" className="h-6 rounded-full " />
				<div className="text-xs text-slate-700 font-bold pl-1 dark:text-slate-50">
					Karl Swatman
				</div>
				<div className="dropdown hover:cursor-pointer ml-2">
					<div tabindex="0" class=" text-xs p-1 text-slate-50">
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
				<div className="dropdown hover:cursor-pointer ml-2">
					<div tabindex="0" class=" text-xs p-1 text-slate-50">
						Desktop
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
			<div className="flex grow justify-end">
				<img src={logo} alt="" className="h-6" />
			</div>
		</div>
	);
};

export default NavBar;
