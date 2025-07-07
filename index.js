const express = require("express");
const sequelize = require('./config/database');
const articleRoutes = require('./routes/articleRoutes');
const chantRoutes = require('./routes/chant.routes');
const categorieRoutes = require('./routes/categorie.routes');
const app = express();

//Middlewares generaux
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

//Routes API
app.use("/api/articles", articleRoutes);
app.use('/api/chants', chantRoutes);
app.use('/api/categories', categorieRoutes);

// Logger (optionnel)
const logger = require('./middlewares/logger.middleware');
app.use(logger);

// Middleware 404
const notFound = require('./middlewares/notfound.middleware');
app.use(notFound);

// Middleware erreurs
const errorHandler = require('./middlewares/error.middleware');
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log("Server is running on http://localhost:${PORT}"));
  }).catch((err) => {
  console.error("Failed to connect to the database :", err);
});

// pp.get("/", (req, res) => {
//   res.send("Hello world !");
// });

