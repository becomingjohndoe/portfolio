import { useState, useEffect } from "react";

const DateTime = () => {
	const locale = "en";
	const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update

	useEffect(() => {
		const timer = setInterval(() => {
			// Creates an interval which will update the current data every minute
			// This will trigger a rerender every component that uses the useDate hook.
			setDate(new Date());
		}, 60 * 1000);
		return () => {
			clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
		};
	}, []);

	const day = today.toLocaleDateString(locale, { weekday: "short" });
	const date = `${today.getDate()} ${today.toLocaleDateString(locale, {
		month: "short",
	})}\n\n`;

	const hour = today.getHours();
	const wish = `Good ${
		(hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
	}, `;

	const time = today.toLocaleTimeString(locale, {
		hour: "numeric",
		hour12: false,
		minute: "numeric",
	});

	return (
		<div className="text-sm text-slate-700 dark:text-slate-50">
			{date}
			{time}
		</div>
	);
};

export default DateTime;
