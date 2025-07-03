const ArticleService = require("../services/articleService");

exports.createArticle = async (req, res) => {
  const {name, brand, size, amount} = req.body;
  if(name==="" || brand==="" || size==="" || !amount) {
    return res.status(400).json({
      message: "Fiels are required"
    });
  }

  const createdArticle = await ArticleService.createArticle({name, brand, size, amount});
  res.status(201).json(createdArticle);
};

exports.getAllArticles = async (req, res) => {
  const articles = await ArticleService.getAllArticles();
  res.json(articles);
};

exports.getArticleById = async (req, res) => {
  const id = req.params.id;
  const article = await ArticleService.getArticleById(id);

  if (!article) {
    return res.status(404).json({ message: 'Article not found' });
  }

  res.json(article);
};

exports.updateArticle = async (req, res) => {
  const id = req.params.id;
  const { name, brand, size, amount } = req.body;

  const updateArticle = await ArticleService.updateArticle(id, { name, brand, size, amount });

  if (!updateArticle) {
    return res.status(404).json({ message: 'Article not found' });
  }

  res.json(updateArticle);
};

exports.deleteArticle = async (req, res) => {
  const id = req.params.id;
  const deletedArticle = await ArticleService.deleteArticle(id);

  if (!deletedArticle) {
    return res.status(404).json({ message: 'Article not found' });
  }

  res.json({ message: 'Article was deleted' });
};