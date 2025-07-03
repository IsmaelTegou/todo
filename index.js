const express = require("express");
const sequelize = require('./config/database');
const articleRoutes = require('./routes/articleRoutes');

const app = express();
app.use(express.json());
app.use("/articles", articleRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log("Server is running on http://localhost:3000"));
  }).catch((err) => {
  console.error("Failed to connect to the database :", err);
});

// pp.get("/", (req, res) => {
//   res.send("Hello world !");
// });

