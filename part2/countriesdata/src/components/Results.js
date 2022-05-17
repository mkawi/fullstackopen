import Entry from "./Entry";

function Results({ filteredData, search }) {
	if (filteredData.length > 10 && search === "") {
		return;
	} else if (filteredData.length > 10) {
		return <p>Too many matches, specify another filter.</p>;
	} else if (filteredData.length === 1) {
		return (
			<>
				<h2>{filteredData[0].name.common}</h2>
				<div>Capital City: {filteredData[0].capital}</div>
				<div>Area: {filteredData[0].area}</div>
				<div>
					Languages:
					<ul>
						{Object.entries(filteredData[0].languages).map((arr) => {
							return <li key={arr[0]}>{arr[1]}</li>;
						})}
					</ul>
				</div>
				<img src={filteredData[0].flags.png} alt="flag" />
			</>
		);
	} else if (filteredData.length <= 10) {
		return (
			<div>
				{filteredData.map((country) => {
					return <Entry key={country.area} state={country} />;
				})}
			</div>
		);
	}
}

export default Results;
