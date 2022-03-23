import logo from "../assets/images/logo.svg";
import linkedin from "../assets/images/linkedin.svg";
import github from "../assets/images/github.svg";
import mail from "../assets/images/mail.png";
import DateTime from "./DateTime";

const NavBar = () => {
	return (
		<div className="flex flex-row h-auto bg-light-transparent dark:bg-dark-transparent items-center">
			{/* left navbar */}
			<div className="flex px-2 py-1 items-center">
				<img src={logo} alt="" className="h-6 rounded-full " />
				<div className="text-xs text-slate-700 font-bold pl-1 dark:text-slate-50">
					Karl Swatman
				</div>
				{/* dropdowns */}
				<div className="dropdown hover:cursor-pointer ml-2 hidden sm:hi">
					<div tabindex="0" class="text-xs p-1 text-slate-700 dark:text-slate-50">
						Details
					</div>
					<div
						tabindex="0"
						class="dropdown-content card mt-1  bg-slate-50 rounded-none text-xs z-50"
					>
						<div>
							<p className="p-4">
								This site was made using React, Javascript, Tailwind.css and a few
								styled components from DaisyUI
							</p>
						</div>
					</div>
				</div>
				{/* contact button */}

				<a href="mailto:karl.swatman@gmail.com">
					<img src={mail} alt="" className="h-6 ml-2" />
				</a>
			</div>
			{/* right navbar */}
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
				<DateTime />
			</div>
		</div>
	);
};

export default NavBar;
