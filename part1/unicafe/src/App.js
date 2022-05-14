import { useState } from "react";

const Button = ({ name, handleClick }) => {
	return (
		<button onClick={() => handleClick((prevState) => prevState + 1)}>
			{name}
		</button>
	);
};

const Statistics = (props) => {
	return (
		<div>
			<h2>Statistics</h2>
			<div>
				<strong>Good:</strong> {props.good}
			</div>
			<div>
				<strong>Neutral:</strong> {props.neutral}
			</div>
			<div>
				<strong>Bad:</strong> {props.bad}
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
