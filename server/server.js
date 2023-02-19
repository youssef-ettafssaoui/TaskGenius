require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const pool = require("./db");
const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());

// get all todos : GET /api/todos
app.get("/todos/:userEmail", async (req, res) => {
  const { userEmail } = req.params;
  try {
    const todos = await pool.query(
      "SELECT * FROM todos WHERE user_email = $1",
      [userEmail]
    );
    res.json(todos.rows);
  } catch (error) {
    console.error(error);
  }
});

// get a todo : GET /api/todos/:id :

// create a todo : POST /api/todos :
app.post("/todos", async (req, res) => {
  const { user_email, title, progress, date } = req.body;
  console.log(user_email, title, progress, date);
  const id = uuidv4();
  try {
    pool.query(
      `INSERT INTO todos (id, user_email, title, progress, date) VALUES ($1, $2, $3, $4, $5)`,
      [id, user_email, title, progress, date]
    );
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
