
const {knex} = require('./db');

module.exports = {
    createCategory,
    getAll,
    getOne,
    updateCategory,
    delCategory
}

async function getAll(){
    return knex.select("*").from('Categories');
};

async function getOne(id){
    return knex('Categories')
    .where({CategoryId : id})
    .select('*')
};


async function createCategory(category){
    return knex('Categories').insert(category); 
};


async function updateCategory(URecord){
    console.log(URecord)
    return knex('Categories')
    .where('CategoryId', '=', URecord.CategoryId)
    .update({
        Name : URecord.Name,
        Description : URecord.Description
    });
};

async function delCategory(id){
    return knex('Categories')
    .where('CategoryId', '=', id)
    .del()
};