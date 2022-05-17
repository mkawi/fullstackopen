import { useState } from "react";

function Entry({ state }) {
	const [toggle, setToggle] = useState(false);

	function toggleBtn() {
		setToggle((prevState) => !prevState);
	}

	return (
		<div style={{ padding: "5px 0" }}>
			{state.name.common}
			<button onClick={toggleBtn}>toggle</button>
			{toggle && (
				<div>
					<div>
						<strong>Capital City:</strong> {state.capital}
					</div>
					<div>
						<strong>Area:</strong> {state.area}
					</div>
					<div>
						<strong>Languages:</strong>
						<ul>
							{Object.entries(state.languages).map((arr) => {
								return <li key={arr[0]}>{arr[1]}</li>;
							})}
						</ul>
					</div>
					<img
						src={state.flags.png}
						alt="flag"
						style={{ marginBottom: "25px" }}
					/>
				</div>
			)}
		</div>
	);
}

export default Entry;
