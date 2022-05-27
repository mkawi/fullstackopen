const express = require("express");
const app = express();
const cors = require("cors");
const blogRouter = require("./controllers/blogs");
const { PORT } = require("./utils/config");

app.use(cors());
app.use(express.json());

app.use("/api", blogRouter);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
