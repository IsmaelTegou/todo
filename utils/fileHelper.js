const fs = require('fs');

const articlesFile = './data/articles.json';

const readArticles = () => {
  const data = fs.readFileSync(articlesFile);
  return JSON.parse(data);
};

const writeArticles = (articles) => {
  fs.writeFileSync(articlesFile, JSON.stringify(articles, null, 2));
};

module.exports = {
  readArticles,
  writeArticles
};