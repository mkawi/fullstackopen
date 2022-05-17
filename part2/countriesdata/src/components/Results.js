import Entry from "./Entry";
import SingleCountry from "./SingleCountry";

function Results({ filteredData, search }) {
	if (filteredData.length > 10 && search === "") {
		return;
	} else if (filteredData.length > 10) {
		return <p>Too many matches, specify another filter.</p>;
	} else if (filteredData.length === 1) {
		return <SingleCountry filteredData={filteredData} />;
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
