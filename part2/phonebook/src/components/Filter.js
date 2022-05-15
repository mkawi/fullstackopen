function Filter(props) {
	return (
		<>
			Filter shown with:{" "}
			<input
				type="search"
				onChange={(e) => props.setSearch(e.target.value)}
				value={props.search}
			/>
			<ul>
				{props.search === ""
					? null
					: props.persons
							.filter((person) =>
								person.name.toLowerCase().includes(props.search.toLowerCase())
							)
							.map((person) => {
								return (
									<li key={person.name}>
										{person.name} : {person.number}
									</li>
								);
							})}
			</ul>
		</>
	);
}

export default Filter;
