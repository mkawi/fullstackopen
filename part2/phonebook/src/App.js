import { useState, useEffect } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import entryService from "./services/entryService";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [search, setSearch] = useState("");

	function submitForm(e) {
		e.preventDefault();
		if (!persons.some((person) => person.name === newName)) {
			entryService
				.createPerson({
					name: newName,
					number: newNumber,
				})
				.then((response) => {
					setPersons([...persons, response]);
				});
			setNewName("");
			setNewNumber("");
		} else {
			if (
				window.confirm(
					`${newName} is already added, do you want to replace the old number with a new one?`
				)
			) {
				const personObj = persons.find((person) => person.name === newName);
				const changedPerson = { ...personObj, number: newNumber };

				entryService
					.updatePerson(personObj.id, changedPerson)
					.then((response) => {
						setPersons(
							persons.map((person) =>
								person.id !== personObj.id ? person : response
							)
						);
					});
			}
		}
	}

	function deletePerson(personName) {
		if (window.confirm(`Are you sure you want to delete ${personName}`)) {
			const personObj = persons.find((person) => person.name === personName);
			entryService.deletePerson(personObj.id, personObj).then((response) => {
				setPersons((prevState) => {
					return prevState.filter((person) => person.id !== personObj.id);
				});
			});
		}
	}

	useEffect(() => {
		entryService.getAll().then((response) => {
			setPersons(response);
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
			<Persons persons={persons} deletePerson={deletePerson} />
		</div>
	);
};

export default App;
