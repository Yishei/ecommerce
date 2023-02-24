const Router = require("express").Router();
const Controller = require("../controllers/products");
const CategoriesController = require("../controllers/categories");

Router.get("/create", async (req, res, next) => {
  let categories = await CategoriesController.getAll();
  res.render("product-form", { categories, product: null });
});

Router.post("/create", async (req, res, next) => {
  try {
    await Controller.create(req.body);
    res.redirect("./all");
  } catch (e) {
    console.error(e);
    res.status(500).render("error", { error: e.toString() });
  }
});

Router.get("/all", async (req, res, next) => {
  try {
    let data = await Controller.getAll();
    console.log(data);
    res.render("product-view", { data });
  } catch (e) {
    console.error(e);
    res.status(500).render("error", { error: e.toString() });
  }
});

Router.get("/update", async (req, res, next) => {
  let id = req.query.id;
  console.log(id);
  try {
    let product = await Controller.getOne(id);
    console.log(product);
    let categories = await CategoriesController.getAll();
    res.render("product-form", { product: product[0], categories });
  } catch (e) {
    console.error(e);
    res.status(500).render("error", { error: e.toString() });
  }
});

Router.post("/update", async (req, res, next) => {
  try {
    await Controller.updateProduct(req.body);
    res.redirect("./all");
  } catch (e) {
    console.error(e);
    res.status(500).render("error", { error: e.toString() });
  }
});

Router.get("/delete", async (req, res, next) => {
  var id = req.query.id;
  try {
    await Controller.delProduct(id);
    res.redirect("./all");
  } catch (e) {
    res.status(500).render("error", { error: e.toString() });
  }
});

module.exports = Router;
