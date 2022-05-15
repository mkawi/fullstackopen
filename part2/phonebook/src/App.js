import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "555-578347343" },
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");

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
