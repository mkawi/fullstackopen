require("dotenv").config();
const PORT = process.env.PORT || 3001;

const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

const Entry = require("./models/Entry");

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(
	morgan((tokens, req, res) => {
		return [
			tokens.method(req, res),
			tokens.url(req, res),
			tokens.status(req, res),
			tokens.res(req, res, "content-length"),
			"-",
			tokens["response-time"](req, res),
			"ms",
			JSON.stringify(req.body),
		].join(" ");
	})
);

app.get("/api/persons", (req, res) => {
	Entry.find({}).then((response) => {
		res.json(response);
	});
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

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
