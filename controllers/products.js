

const {knex} = require('./db');

module.exports = {
    create,
    getAll,
    getOne,
    updateProduct,
    delProduct
}

async function getAll(){
    return knex('Products')
    .join('Categories', 'Products.CategoryId', '=', 'Categories.CategoryId')
    .select('Products.ProductId', 'Products.ProductName','Products.Price',
    'Products.Description', 'Products.Image', 'Categories.Name AS Categorey')
}




async function getOne(id){
    return knex('Products')
    .where({ProductId : id})
    .select('*')
};

async function updateProduct(URecord){
    return knex('Products')
    .where('ProductId', '=', URecord.ProductId)
    .update({
        ProductName : URecord.ProductName,
        Price : URecord.Price,
        Description : URecord.Description,
        CategoryId : URecord.CategoryId
    })
};

async function delProduct(id){
    return knex('Products')
    .where('ProductId', '=', id)
    .del()
};


async function create(data){
    return knex('Products').insert(data); 
}
