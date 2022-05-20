const express = require("express");
const app = express();

const persons = [
	{
		id: 1,
		name: "Arto Hellas",
		number: "040-123456",
	},
	{
		id: 2,
		name: "Ada Lovelace",
		number: "39-44-5323523",
	},
	{
		id: 3,
		name: "Dan Abramov",
		number: "12-43-234345",
	},
	{
		id: 4,
		name: "Mary Poppendieck",
		number: "39-23-6423122",
	},
];

app.get("/api/persons", (req, res) => {
	res.json(persons);
});

app.get("/info", (req, res) => {
	const date = new Date(Date.now());

	res.send(
		`Phonebook has info for ${persons.length} people <br/> ${date.toString()}`
	);
});

app.listen(3000, () => {
	console.log(`Server running on port 3000`);
});
