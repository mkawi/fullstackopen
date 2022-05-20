const e = require("express");
const express = require("express");
const app = express();

let persons = [
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

app.use(express.json());

app.get("/api/persons", (req, res) => {
	res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
	const person = persons.find((per) => per.id == req.params.id);

	if (person) {
		res.json(person);
	} else {
		res.status(404).end();
	}
});

app.delete("/api/persons/:id", (req, res) => {
	persons = persons.filter((person) => person.id != req.params.id);
	res.status(204).end();
});

app.post("/api/persons", (req, res) => {
	const randomId = Math.floor(Math.random() * (9999999999 - 1 + 1)) + 1;

	const newPerson = {
		id: randomId,
		name: req.body.name,
		number: req.body.number,
	};

	if (!req.body.name || !req.body.name) {
		res.status(400).json({
			error: "Name and/or Number is missing",
		});
	}

	if (persons.some((person) => person.name === req.body.name)) {
		res.status(400).json({
			error: `Phonebook already contains name: ${req.body.name}`,
		});
	} else {
		persons.push(newPerson);
		res.json(persons);
	}
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
