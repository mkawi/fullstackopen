import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

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
			<Filter search={search} persons={persons} setSearch={setSearch} />
			<h3>Add new</h3>
			<PersonForm
				newName={newName}
				newNumber={newNumber}
				submitForm={submitForm}
				setNewName={setNewName}
				setNewNumber={setNewNumber}
			/>
			<h3>Numbers</h3>
			<Persons persons={persons} />
		</div>
	);
};

export default App;
