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
	Entry.findById(req.params.id).then((response) => {
		if (response) {
			res.json(response);
		} else {
			res.status(404).end();
		}
	});
});

app.delete("/api/persons/:id", (req, res) => {
	Entry.deleteOne({ _id: req.params.id }).then((response) => {
		console.log(response);
		res.status(204).end();
	});
});

app.post("/api/persons", (req, res) => {
	if (!req.body.name || !req.body.number) {
		res.status(400).json({
			error: "Name and/or Number is missing",
		});
	} else {
		const newPerson = new Entry({
			name: req.body.name,
			number: req.body.number,
		});

		newPerson.save().then((savedEntry) => {
			res.json(savedEntry);
		});
	}
});

app.get("/info", (req, res) => {
	const date = new Date(Date.now());
	Entry.find({}).then((response) => {
		res.send(
			`Phonebook has info for ${
				response.length
			} people <br/> ${date.toString()}`
		);
	});
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
