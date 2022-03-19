import ToggleSwitch from "./ToggleSwitch";

const Settings = ({ bg }) => {
	return (
		// setting container
		<div className="bg-slate-300 dark:bg-slate-600 flex flex-col items-center w-80 p-3">
			<div className="text-slate-700 dark:text-slate-50 font-medium">
				Change Background
			</div>
			{/* background selector */}
			<div className="flex justify-center flex-wrap pt-2">
				{/* button */}
				<button
					onClick={() => {
						bg.current.className =
							"App h-screen grid grid-rows-layout bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-700  focus:border-4";
					}}
					className="h-20 w-20 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-700 focus:border-4 m-1"
				/>
				{/* button */}
				<button
					onClick={() => {
						bg.current.className =
							"App h-screen grid grid-rows-layout bg-gradient-to-r from-red-400 via-red-700 to-orange-600 focus:border-4";
					}}
					className="h-20 w-20 bg-gradient-to-r from-red-400 via-red-700 to-orange-600 focus:border-4 m-1"
				/>
			</div>
			{/* Toggle Switch */}
			<div className="h-50 w-auto p-4">
				<ToggleSwitch />
			</div>
		</div>
	);
};

export default Settings;
