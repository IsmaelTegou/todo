const express = require("express");
const sequelize = require('./config/database');
const articleRoutes = require('./routes/articleRoutes');
const chantRoutes = require('./routes/chant.routes');
const categorieRoutes = require('./routes/categorie.routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/articles", articleRoutes);
app.use('/api/chants', chantRoutes);
app.use('/api/categories', categorieRoutes);

const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log("Server is running on http://localhost:${PORT}"));
  }).catch((err) => {
  console.error("Failed to connect to the database :", err);
});

// pp.get("/", (req, res) => {
//   res.send("Hello world !");
// });

