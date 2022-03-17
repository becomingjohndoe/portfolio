import headshot from "../assets/images/headshot.png";

const About = () => {
	return (
		<figure className=" md:flex bg-gradient-to-r from-cyan-500 to-orange-100 pl-6 dark:from-slate-500 dark:to-teal-900 m-0">
			<img className=" w-32 h-32 rounded-full m-auto" src={headshot} alt="" />
			<div className="p-8 text-center md:text-left">
				<blockquote>
					<p className="text-lg text-left font-medium overflow-scroll max-h-48 max-w-sm dark:text-slate-100">
						“Tailwind CSS is the only framework that I've seen scale on large teams.
						It’s easy to customize, adapts to any design, and the build size is tiny.”
						“Tailwind CSS is the only framework that I've seen scale on large teams.
						It’s easy to customize, adapts to any design, and the build size is tiny.”
						“Tailwind CSS is the only framework that I've seen scale on large teams.
						It’s easy to customize, adapts to any design, and the build size is tiny.”
						“Tailwind CSS is the only framework that I've seen scale on large teams.
						It’s easy to customize, adapts to any design, and the build size is tiny.”
						“Tailwind CSS is the only framework that I've seen scale on large teams.
						It’s easy to customize, adapts to any design, and the build size is tiny.”
					</p>
				</blockquote>
				<figcaption className="font-medium text-left">
					<div className="text-sky-500 dark:text-sky-400">Karl Swatman</div>
					<div className="text-slate-700 dark:text-sky-500">Front End Developer</div>
				</figcaption>
			</div>
		</figure>
	);
};

export default About;
