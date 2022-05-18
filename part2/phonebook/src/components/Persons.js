function Persons(props) {
	return (
		<ul>
			{props.persons.length > 0 &&
				props.persons.map((person) => {
					return (
						<li key={person.name}>
							{person.name} : {person.number}
							<button onClick={() => props.deletePerson(person.name)}>
								Delete
							</button>
						</li>
					);
				})}
		</ul>
	);
}

export default Persons;
