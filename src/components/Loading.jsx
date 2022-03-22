const Loading = () => {
	return (
		<button type="button" class="bg-indigo-500" disabled>
			<div class="radial-progress animate-spin h-5 w-5 mr-3"></div>
			Processing...
		</button>
	);
};

export default Loading;
