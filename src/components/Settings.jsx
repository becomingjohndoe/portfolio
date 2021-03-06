import ToggleSwitch from "./ToggleSwitch";

const Settings = ({ bg }) => {
	return (
		// setting container
		<div className="bg-slate-50 dark:bg-slate-600 flex flex-col items-center sm:w-80 p-3 h-full w-full">
			<div className="text-slate-700 dark:text-slate-50 font-medium">
				Change Background
			</div>
			{/* background selector */}
			<div className="flex justify-center flex-wrap">
				{/* background orange */}
				<button
					onClick={() => {
						bg.current.className =
							"App h-screen grid grid-rows-layout bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-700  focus:border-4";
					}}
					className="h-20 w-20 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-700 focus:border-4 m-1"
				/>
				{/* background red */}
				<button
					onClick={() => {
						bg.current.className =
							"App h-screen grid grid-rows-layout bg-gradient-to-r from-red-400 via-red-700 to-orange-600 focus:border-4";
					}}
					className="h-20 w-20 bg-gradient-to-r from-red-400 via-red-700 to-orange-600 focus:border-4 m-1"
				/>
			</div>
			{/* Toggle Switch */}
			<div className="w-auto p-4">
				<ToggleSwitch />
			</div>
			{/* icon size slider */}
			<div className="text-slate-700 dark:text-slate-50 font-medium">
				Icon Size
			</div>
			<input
				defaultValue={25}
				type="range"
				min="0"
				max="100"
				className="range range-md"
				step="25"
			/>
		</div>
	);
};

export default Settings;
