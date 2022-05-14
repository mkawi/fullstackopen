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
			<strong>{props.part.name}: </strong>
			{props.part.exercises} Exercises
		</p>
	);
};

const Content = (props) => {
	return (
		<div>
			<Part part={props.parts[0]} />
			<Part part={props.parts[1]} />
			<Part part={props.parts[2]} />
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
	const part1 = {
		name: "Fundamentals of React",
		exercises: 10,
	};
	const part2 = {
		name: "Using props to pass data",
		exercises: 7,
	};
	const part3 = {
		name: "State of a component",
		exercises: 14,
	};

	return (
		<div>
			<Header course={course} />
			<Content parts={[part1, part2, part3]} />
			<Total exercises={[part1.exercises, part2.exercises, part3.exercises]} />
		</div>
	);
};

export default App;
