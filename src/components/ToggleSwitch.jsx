const ToggleSwitch = () => {
	return (
		<>
			{/* // <!-- Toggle B --> */}
			<div class="flex items-center justify-center w-full mb-12">
				<label for="toggleB" class="flex items-center cursor-pointer">
					{/* <!-- toggle --> */}
					<div class="relative">
						{/* <!-- input --> */}
						<input type="checkbox" id="toggleB" class="sr-only" />
						{/* <!-- line --> */}
						<div class="block bg-slate-400 w-14 h-8 rounded-full"></div>
						{/* <!-- dot --> */}
						<div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
					</div>
					{/* <!-- label --> */}
					<div class="ml-3 text-slate-50 font-medium">Toggle Me!</div>
				</label>
			</div>
		</>
	);
};

export default ToggleSwitch;
