
// const express = require("express");
// const cors = require("cors");
// const configDatabase = require("./dbConfig/database.js");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();

// const PORT = process.env.PORT || 6000;

// //connecting to the mongodb database
// configDatabase();

// app.use(cors({ origin: true, credentials: true }));

//  //add the middlewares
// app.use(express.json({ extended: false }));
// app.get("/", (req, res) =>
//   res.send("Hello there!! Cheers !! The server is up and running")
// );

// //listen
// app.listen(PORT, () =>
//   console.log(`Server is running on http://localhost:${6000}`)
// );

const express = require("express");
const cors = require("cors");
const configDatabase = require("./dbConfig/database.js");
const todo = require("./routes/todo.route.js");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 6000;

//connecting to the mongodb database
configDatabase();

app.use(cors({ origin: true, credentials: true }));

// add the middlewares
app.use(express.json({ extended: false }));
app.get("/", (_req, res) =>
  res.send("Hello there!! Cheers !! The server is up and running")
);

// using our routes
app.use("/api/todo", todo);

// listen
app.listen(PORT, () =>
  console.log('Server is running on http://localhost:${6000}')
);
