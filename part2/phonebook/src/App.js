import { useState, useEffect } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

import entryService from "./services/entryService";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [search, setSearch] = useState("");
	const [notification, setNotification] = useState("");
	const [showMsg, setShowMsg] = useState(false);

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
					setNotification({
						status: "success",
						msg: `Success: You added ${newName} to the Phonebook!`,
					});
					setShowMsg(true);
				})
				.catch((err) => {
					console.log(err);
					setNotification({
						status: "error",
						msg: `Error: ${err.response.data.error}`,
					});
					setShowMsg(true);
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
					.updatePerson(personObj._id, changedPerson)
					.then((response) => {
						setPersons((prevState) => {
							return prevState.map((person) =>
								person._id !== personObj._id ? person : response
							);
						});
						setNotification({
							status: "success",
							msg: `Success: You edited ${newName}'s number in the Phonebook!`,
						});
						setShowMsg(true);
					})
					.catch((err) => {
						setNotification({
							status: "error",
							msg: `Error: ${err}`,
						});
						setShowMsg(true);
					});
			}
		}
	}

	function deletePerson(personName) {
		if (window.confirm(`Are you sure you want to delete ${personName}`)) {
			const personObj = persons.find((person) => person.name === personName);
			entryService
				.deletePerson(personObj._id, personObj)
				.then((response) => {
					setPersons((prevState) => {
						setNotification({
							status: "success",
							msg: `Success: You deleted ${personObj.name} in the Phonebook!`,
						});
						setShowMsg(true);
						return prevState.filter((person) => person._id !== personObj._id);
					});
				})
				.catch((err) => {
					setNotification({
						status: "error",
						msg: `Error: ${personObj.name} has already been deleted`,
					});
					setShowMsg(true);
				});
		}
	}

	useEffect(() => {
		entryService.getAll().then((response) => {
			setPersons(response);
		});
	}, []);

	useEffect(() => {
		if (showMsg) {
			const toRef = setTimeout(() => {
				setShowMsg(false);
				clearTimeout(toRef);
			}, 3000);
		}
	}, [showMsg]);

	return (
		<div>
			<h2>Phonebook</h2>
			{showMsg && (
				<Notification status={notification.status} message={notification.msg} />
			)}
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
