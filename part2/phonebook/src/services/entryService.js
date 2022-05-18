import axios from "axios";
const baseUrl = "http://localhost:3002/persons";

const getAll = () => {
	const data = axios.get(baseUrl);
	return data.then((response) => response.data);
};

const create = (newObject) => {
	const data = axios.post(baseUrl, newObject);
	return data.then((response) => response.data);
};

const update = (id, newObject) => {
	const data = axios.put(`${baseUrl}/${id}`, newObject);
	return data.then((response) => response.data);
};

const entryService = {
	getAll,
	create,
	update,
};

export default entryService;
