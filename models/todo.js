const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/todos-backend", {
	useUnifiedTopology: true, 
	useNewUrlParser: true, 
	useCreateIndex: true 
})
.then(() => console.log("Database connected!"))
.catch(() => console.log("Error! Cannot connect Database"))

mongoose.set("debug", true);
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({
  task: {
		type: String,
		required: "Name cannot be blank!"
	}
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
