import { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [search, setSearch] = useState("");
	const [data, setData] = useState([]);

	function generateResults() {
		if (data.length > 10 && search === "") {
			return;
		} else if (data.length > 10) {
			return <p>Too many matches, specify another filter.</p>;
		} else if (data.length === 1) {
			return (
				<div key={data[0].ccn3}>
					<h2>{data[0].name.common}</h2>
					<div>Capital City: {data[0].capital}</div>
					<div>Area: {data[0].area}</div>
					<div>
						Languages:
						<ul>
							{Object.entries(data[0].languages).map((arr) => {
								return <li key={arr[0]}>{arr[1]}</li>;
							})}
						</ul>
					</div>
					<img src={data[0].flags.png} alt="flag" />
				</div>
			);
		} else if (data.length === 0) {
			return <p>No matches, specify another filter.</p>;
		} else if (data.length <= 10) {
			return (
				<div>
					{data.map((country) => {
						return <div key={country.ccn3}>{country.name.common}</div>;
					})}
				</div>
			);
		}
	}

	useEffect(() => {
		axios.get("https://restcountries.com/v3.1/all").then((response) => {
			const data = response.data;
			console.log("Request Sent");
			setData(
				data.filter((country) =>
					country.name.common.toLowerCase().includes(search.toLowerCase())
				)
			);
		});
	}, [search]);

	console.log("render");

	return (
		<div className="App">
			Find Countries:{" "}
			<input
				type="search"
				onChange={(e) => setSearch(e.target.value)}
				value={search}
			/>
			{generateResults()}
		</div>
	);
}

export default App;
