const Part = (props) => {
	return (
		<p>
			<strong>{props.name}: </strong>
			{props.exercises} Exercises
		</p>
	);
};

export default Part;
