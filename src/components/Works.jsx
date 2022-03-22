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
			<div className="flex flex-col grow">
				<div class=" bg-base-100 rounded-none flex flex-col sm:flex-row grow">
					<div className="">
						<img
							className="object-cover max-h-72 w-full"
							src={details[selected].image}
							alt="Movie"
						/>
					</div>

					<div class="w-96 p-4 flex flex-col mx-auto">
						<h2 class="card-title">{details[selected].title}</h2>
						<p>{details[selected].description}</p>
						<div class="self-end">
							<button class="btn">GitHub</button>
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
			</div>
		</>
	);
};

export default Works;
