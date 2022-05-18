function Persons(props) {
	return (
		<ul>
			{props.persons.length > 0 &&
				props.persons.map((person) => {
					return (
						<li key={person.name}>
							{person.name} : {person.number}
						</li>
					);
				})}
		</ul>
	);
}

export default Persons;
