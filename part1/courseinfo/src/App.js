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
			{props.parts.reduce(
				(accumulator, current) => accumulator + current.exercises,
				0
			)}
		</p>
	);
};

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

export default App;
