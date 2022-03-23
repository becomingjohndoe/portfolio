import headshot from "../assets/images/headshot.png";

const About = () => {
	return (
		<div className="h-full sm:w-96 flex flex-col">
			<figure className=" flex flex-col h-full p-3 bg-gradient-to-r from-cyan-500 to-orange-100 pl-6 dark:from-slate-500 dark:to-teal-900 m-0">
				<img
					className="bg-slate-100 max-w-32 max-h-32 rounded-full m-auto"
					src={headshot}
					alt=""
				/>
				<div className=" flex flex-col p-8 text-center md:text-left h-full">
					<blockquote className="grow flex flex-col">
						<p className="text-md text-left font-medium  overflow-auto sm:h-48 h-72 marker:dark:text-slate-100 mb-2 pr-2 grow">
							Hi Im Karl a Software Engineer based in Yorskhire
							<br />
							<br />I have been working through the very intense but valuable
							Northcoders full stack developer bootcamp and I am now looking for a role
							within the software industry. I have delivered working applications
							utilizing HTML5, CSS3, JavaScript, Bootstrap, React and React Native. I
							have good knowledge of creating RESTful API’s using Node for the server
							environment, jest for TDD, postgreSQL with axios for querying the backend
							database and I can utilize documentation with ease and clarity with a
							natural talent for learning new and difficult subjects I am more than
							comfortable working in stressful environments, have strong problem
							solving abilities and strive for the highest standards. I am enthusiastic
							about programming and find a real sense of self-gratification in tackling
							difficult problems with a positive attitude. follow my github and connect
							on LinkedIn
						</p>
					</blockquote>
					<figcaption className="font-medium text-left">
						<div className="text-sky-500 dark:text-sky-400">Karl Swatman</div>
						<div className="text-slate-700 dark:text-sky-500">
							Front End Developer
						</div>
					</figcaption>
				</div>
			</figure>
		</div>
	);
};

export default About;
