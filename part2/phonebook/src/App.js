import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456", id: 1 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [search, setSearch] = useState("");

	function submitForm(e) {
		e.preventDefault();
		if (!persons.some((person) => person.name === newName)) {
			setPersons((prevState) => {
				return [...prevState, { name: newName, number: newNumber }];
			});
			setNewName("");
			setNewNumber("");
		} else {
			alert(`${newName} is already added to Phonebook`);
		}
	}

	return (
		<div>
			<h2>Phonebook</h2>
			Filter shown with:{" "}
			<input
				type="search"
				onChange={(e) => setSearch(e.target.value)}
				value={search}
			/>
			{search === ""
				? null
				: persons
						.filter((person) =>
							person.name.toLowerCase().includes(search.toLowerCase())
						)
						.map((person) => {
							return (
								<li key={person.name}>
									{person.name} : {person.number}
								</li>
							);
						})}
			<h2>Add new</h2>
			<form>
				<div>
					name:{" "}
					<input onChange={(e) => setNewName(e.target.value)} value={newName} />
				</div>
				<div>
					number:{" "}
					<input
						onChange={(e) => setNewNumber(e.target.value)}
						value={newNumber}
					/>
				</div>
				<div>
					<button type="submit" onClick={(e) => submitForm(e)}>
						add
					</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<ul>
				{persons.map((person) => {
					return (
						<li key={person.name}>
							{person.name} : {person.number}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default App;
