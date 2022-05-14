const Header = (props) => {
	return (
		<div className="header">
			<h1>{props.course}</h1>
		</div>
	);
};

const Part = (props) => {
	return (
		<p>
			<strong>{props.part}: </strong>
			{props.exercise} Exercises
		</p>
	);
};

const Content = (props) => {
	return (
		<div>
			<Part part={props.parts[0]} exercise={props.exercises[0]} />
			<Part part={props.parts[1]} exercise={props.exercises[1]} />
			<Part part={props.parts[2]} exercise={props.exercises[2]} />
		</div>
	);
};

const Total = (props) => {
	return (
		<p>
			<strong>Number of Exercises: </strong>
			{props.exercises.reduce(
				(accumulator, current) => accumulator + current,
				0
			)}
		</p>
	);
};

const App = () => {
	const course = "Half Stack application development";
	const part1 = "Fundamentals of React";
	const exercises1 = 10;
	const part2 = "Using props to pass data";
	const exercises2 = 7;
	const part3 = "State of a component";
	const exercises3 = 14;

	return (
		<div>
			<Header course={course} />
			<Content
				parts={[part1, part2, part3]}
				exercises={[exercises1, exercises2, exercises3]}
			/>
			<Total exercises={[exercises1, exercises2, exercises3]} />
		</div>
	);
};

export default App;
