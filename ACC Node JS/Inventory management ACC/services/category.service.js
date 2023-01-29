
const Category = require('../models/category');


exports.createCategoryService = async (data) => {

    const result = await Category.create(data);

    return result;

}
exports.getCategoryService = async () => {

    const data = await Category.find({});
    console.log(data);

    return data;

}
exports.getByIdCategoryService = async (id) => {

    const data = await Category.findById(id);
    console.log(data);

    return data;

}
exports.updateByIdCategoryService = async (data,id) => {

    const result = await Category.updateOne({_id:id},data,{runValidators:true})
    console.log(result);

    return result;

}