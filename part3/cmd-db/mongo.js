const mongoose = require("mongoose");

const password = process.argv[2];

const url = `mongodb+srv://m001-student:${password}@library.iivwh.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url);

const entrySchema = new mongoose.Schema({
	name: String,
	number: String,
});

const Entry = mongoose.model("Entry", entrySchema);

const entry = new Entry({
	name: process.argv[3],
	number: process.argv[4],
});

if (process.argv.length < 3) {
	console.log(
		"Please provide the password as an argument: node mongo.js <password>"
	);
	process.exit(1);
} else if (process.argv.length === 3) {
	Entry.find({}).then((response) => {
		console.log("Phonebook:");
		response.map((person) => {
			console.log(person.name, person.number);
		});
		process.exit(1);
	});
} else if (process.argv.length === 5) {
	entry.save().then((result) => {
		console.log(
			`added ${process.argv[3]} number ${process.argv[4]} to phonebook`
		);
		mongoose.connection.close();
		process.exit(1);
	});
}
