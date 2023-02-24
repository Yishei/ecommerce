const Router = require('express').Router();
const Controller = require('../controllers/categories');
const ProductControllers = require('../controllers/products');

Router.get('/create', (req, res, next) => {
    res.render('cat-form');
});

Router.post('/create', async (req, res, next) => {
    try{
        await Controller.createCategory(req.body);
        res.redirect('./all')
    }catch(e){
        console.error(e);
        res.status(500).render('error', {error : e.toString()});
    }
    
});

Router.get('/all', async (req, res, next) => {
    try{
        let categories = await Controller.getAll();
        let products = await ProductControllers.getAll();
        console.log(categories);
        console.log(products);
        res.render("cat-view", { categories, products });
    }catch(e){
        console.error(e);
        res.status(500).render('error', {error : e.toString()});
    }
});


Router.get("/update", async (req, res, next) => {
    let id = req.query.id;
    try {
      let category = await Controller.getOne(id);
      res.render("cat-form", { category: category[0] });
    } catch (e) {
      console.error(e);
      res.status(500).render("error", { error: e.toString() });
    }
  });


  Router.post("/update", async (req, res, next) => {
    try {
      await Controller.updateCategory(req.body);
      res.redirect("./all");
    } catch (e) {
      console.error(e);
      res.status(500).render("error", { error: e.toString() });
    }
  });


  Router.get("/delete", async (req, res, next) => {
    var id = req.query.id;
    try {
      await Controller.delCategory(id);
      res.redirect("./all");
    } catch (e) {
      res.status(500).render("error", { error: e.toString() });
    };

  });


module.exports = Router;