const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const questions = {
	technology: [
		{
			id: 1,
			question: "What is your favorite IDE?",
			type: "text",
		},
		{
			id: 2,
			question: "How often do you contribute to open source?",
			type: "dropdown",
			options: ["Daily", "Weekly", "Monthly", "Rarely"],
		},
	],
	health: [
		{
			id: 1,
			question: "How many hours do you sleep daily?",
			type: "number",
		},
		{
			id: 2,
			question: "Do you follow any specific diet plan?",
			type: "text",
		},
	],
	education: [
		{
			id: 1,
			question: "What is your major?",
			type: "text",
		},
		{
			id: 2,
			question: "Are you planning to pursue further studies?",
			type: "dropdown",
			options: ["Yes", "No", "Maybe"],
		},
	],
};

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/api/questions/:topic", (req, res) => {
	console.log("Hit!");
	const topic = req.params.topic;
	const topicQuestions = questions[topic];

	if (topicQuestions) {
		res.json(topicQuestions);
	} else {
		res.status(404).send("Topic not found");
	}
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
