import { useState } from "react";

const Button = ({ name, handleClick }) => {
	return (
		<button onClick={() => handleClick((prevState) => prevState + 1)}>
			{name}
		</button>
	);
};

const Statistics = (props) => {
	const total = props.good + props.neutral + props.bad;
	const positivePercentage = (100 * props.good) / total;

	if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
		return (
			<div>
				<h2>Statistics</h2>
				No Feedback Given
			</div>
		);
	}

	return (
		<div>
			<h2>Statistics</h2>
			<div>
				<strong>Good: </strong>
				{props.good}
			</div>
			<div>
				<strong>Neutral: </strong>
				{props.neutral}
			</div>
			<div>
				<strong>Bad: </strong>
				{props.bad}
			</div>
			<div>
				<strong>All: </strong>
				{[props.good, props.neutral, props.bad].reduce(
					(accum, prev) => accum + prev
				)}
			</div>
			<div>
				<strong>Average: </strong>
				{[props.good, props.neutral, props.bad].reduce(
					(accum, prev) => accum + prev,
					0
				) / 3}
			</div>
			<div>
				<strong>Positive: </strong>
				{positivePercentage}%
			</div>
		</div>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h2>Give Feedback</h2>
			<Button name="Good" handleClick={setGood} />
			<Button name="Neutral" handleClick={setNeutral} />
			<Button name="Bad" handleClick={setBad} />
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
