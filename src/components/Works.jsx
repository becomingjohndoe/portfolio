import { useState } from "react";

import wordle from "../assets/images/not-wordle.png";
import stonks from "../assets/images/paper-stocks.png";

const details = [
	{
		title: "Not Wordle",
		description:
			"A clone of the popular Wordle game. Provides one word every day, the user has to guess the word within 6 attempts",
		technologies: ["React", "Typescript"],
		image: wordle,
		link: "https://github.com/becomingjohndoe/wordle-clone",
		play: "https://wordle-is-awesome.netlify.app/",
	},
	{
		title: "Paper Stocks",
		description:
			"A stock simulator, starting with 100$ you have 30 days to make as much money as possible",
		technologies: ["React", "Typescript", "Chart.js"],
		image: stonks,
		link: "https://github.com/becomingjohndoe/paper-stocks",
		play: "https://paper-stocks.netlify.app/",
	},
];

const Works = () => {
	const [selected, setSelected] = useState(0);
	return (
		<>
			{/* Container image and details */}
			<div className="flex flex-col grow">
				<div class=" bg-base-100 rounded-none flex flex-col sm:flex-row grow">
					{/* Image */}
					<div className="">
						<img
							className="object-cover max-h-72 w-full sm:w-96 "
							src={details[selected].image}
							alt="Movie"
						/>
					</div>

					{/* Details */}
					<div class="w-96 p-4 flex flex-col mx-auto h-full">
						{/* Title */}
						<h2 class="card-title">{details[selected].title}</h2>
						{/* Technologies */}
						<div className="flex my-2">
							{details[selected].technologies.map((tech) => {
								return (
									<div className="p-2 bg-indigo-500 mr-2 rounded-full text-slate-50">
										{tech}
									</div>
								);
							})}
						</div>
						{/* Description */}
						<p className="grow">{details[selected].description}</p>
						{/* link */}
						<div class="my-2 self-end">
							<button class="btn bg-indigo-500 mr-2">
								<a href={details[selected].play} target="__blank">
									play
								</a>
							</button>
							<button class="btn">
								<a href={details[selected].link} target="__blank">
									GitHub
								</a>
							</button>
						</div>
					</div>
				</div>
				{/* Previous and Next */}
				<div class="btn-group grid grid-cols-2">
					<button
						onClick={() => {
							if (selected !== 0) {
								setSelected(selected - 1);
							}
						}}
						class="btn rounded-none"
					>
						Previous
					</button>
					<button
						onClick={() => {
							if (selected !== details.length - 1) {
								setSelected(selected + 1);
							}
						}}
						class="btn rounded-none"
					>
						Next
					</button>
				</div>
			</div>
		</>
	);
};

export default Works;
