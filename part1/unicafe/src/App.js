import { useState } from "react";

const Button = ({ name, handleClick }) => {
	return (
		<button onClick={() => handleClick((prevState) => prevState + 1)}>
			{name}
		</button>
	);
};

const StatisticLine = (props) => {
	return (
		<tr>
			<td>
				<strong>{props.name}: </strong>
			</td>
			<td>{props.value}</td>
		</tr>
	);
};

const Statistics = (props) => {
	const total = props.values.reduce((accum, prev) => accum + prev, 0);
	const positivePercentage = (100 * props.values[0]) / total;

	if (props.values[0] === 0 && props.values[1] === 0 && props.values[2] === 0) {
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
			<table>
				<tbody>
					<StatisticLine name="Good" value={props.values[0]} />
					<StatisticLine name="Neutral" value={props.values[1]} />
					<StatisticLine name="Bad" value={props.values[2]} />
					<StatisticLine name="All" value={total} />
					<StatisticLine name="Average" value={total / 3} />
					<StatisticLine name="Positive" value={`${positivePercentage}%`} />
				</tbody>
			</table>
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
			<Statistics values={[good, neutral, bad]} />
		</div>
	);
};

export default App;
