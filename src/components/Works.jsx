import { useState } from "react";

import wordle from "../assets/images/not-wordle.png";
import stonks from "../assets/images/paper-stocks.png";

const details = [
	{
		title: "Not Wordle",
		description:
			"A clone of the popular Wordle game. Provides one word every day, the user has to guess the word within 6 attempts",
		image: wordle,
	},
	{
		title: "Paper Stocks",
		description:
			"A clone of the popular Paper Stocks game. The user has to guess the stock price of the company within 6 attempts",
		image: stonks,
	},
];

const Works = () => {
	const [selected, setSelected] = useState(0);
	return (
		<>
			<div className="flex">
				{/* <div className="flex h-96 w-96">
				<div className=""
					<img className="" src={details[selected].image} alt="" />
				</div>
				<div className="p-2">
					<div className="">{details[selected].title}</div>
					<div>{details[selected].description}</div>
				</div>
			</div> */}
				<div class="bg-base-100 rounded-none flex lg:flex-row md:flex-col sm:flex-col">
					<figure>
						<img
							className="object-cover h-96 w-96"
							src={details[selected].image}
							alt="Movie"
						/>
					</figure>
					<div class="w-96 p-4 flex flex-col">
						<h2 class="card-title">{details[selected].title}</h2>
						<p>{details[selected].description}</p>
						<div class="self-end">
							<button class="btn">GitHub</button>
						</div>
					</div>
				</div>
			</div>
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
		</>
	);
};

export default Works;
