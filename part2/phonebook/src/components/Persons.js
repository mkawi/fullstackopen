function Persons(props) {
	return (
		<ul>
			{props.persons.map((person) => {
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
