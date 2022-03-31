import { useState } from "react";

import wordle from "../assets/images/not-wordle.png";
import stonks from "../assets/images/paper-stocks.png";
import toppit from "../assets/images/toppit.png";
import toppitApi from "../assets/images/toppit-api.png";
import gandsum from "../assets/images/gandsum.png";
import giggle from "../assets/images/giggle.png";
const details = [
	{
		title: "Gandsum",
		description:
			"A text placeholder generator, with Gandalf quotes instead of Lorem Ipsum",
		technologies: ["React", "TailwindCSS"],
		image: gandsum,
		link: "https://github.com/becomingjohndoe/gimme-gandalf",
		play: "https://gandsum.netlify.app/",
	},
	{
		title: "Giggle",
		description: "A friend finder for Gigs and Events",
		technologies: ["React Native", "Firebase"],
		image: giggle,
		link: "https://github.com/becomingjohndoe/NC-Giggle",
		play: "https://github.com/becomingjohndoe/NC-Giggle",
	},
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
	{
		title: "Toppit - Reddit Clone",
		description:
			"A clone of the popular social media platform Reddit. Users can create an account, login, post, comment and vote on posts",
		technologies: ["React"],
		image: toppit,
		link: "https://github.com/becomingjohndoe/news-frontend",
		play: "https://toppit.netlify.app/",
	},
	{
		title: "RESTful API for Toppit",
		description:
			"A RESTful API for Toppit. Users can create an account, login, post, comment and vote on posts",
		technologies: ["Express", "PostgreSQL", "Jest"],
		image: toppitApi,
		link: "https://github.com/becomingjohndoe/news-api",
		play: "https://news-nc-api.herokuapp.com/api/",
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
							className="object-cover max-h-96 sm:max-h-fit  w-full sm:w-96 "
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
