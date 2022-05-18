import axios from "axios";
const baseUrl = "http://localhost:3002/persons";

const getAll = () => {
	const data = axios.get(baseUrl);
	return data.then((response) => response.data);
};

const createPerson = (newObject) => {
	const data = axios.post(baseUrl, newObject);
	return data.then((response) => response.data);
};

const updatePerson = (id, newObject) => {
	const data = axios.put(`${baseUrl}/${id}`, newObject);
	return data.then((response) => response.data);
};

const deletePerson = (id, obj) => {
	const data = axios.delete(`${baseUrl}/${id}`, { data: obj });
	return data.then((response) => response.data);
};

const entryService = {
	getAll,
	createPerson,
	updatePerson,
	deletePerson,
};

export default entryService;
