const Article = require('../models/article');

exports.createArticle = async ({name, brand, size, amount}) => {
  return await Article.create({name, brand, size, amount});
};

exports.getAllArticles = async () => {
  return await Article.findAll();
}

exports.getArticleById = async (id) => {
  return await Article.findByPk(id);
};

exports.updateArticle = async (id, data) => {
  const updatedArticle = await Article.findByPk(id);
  if(!updatedArticle) return null;

  await updatedArticle.update(data);
  return updatedArticle;
};

exports.deleteArticle = async (id) => {
  const deletedArticle = await Article.findByPk(id);
  if(!deletedArticle) return false;

  await deletedArticle.destroy();
  return true;
}