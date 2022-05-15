import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
	const [persons, setPersons] = useState([]);
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

	useEffect(() => {
		axios.get("http://localhost:3002/persons").then((response) => {
			setPersons(response.data);
		});
	}, []);

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
