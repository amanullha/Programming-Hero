const Store = require('../models/store')



exports.getStoreService = async () => {

    const data = await Store.find({});
    return data;
}

exports.createStoreService = async (data) => {

    const result = await Store.create(data);
    return result;
}
exports.getStoreByIdService = async (id) => {

    const data = await Store.findById(id);
    return data;
}
exports.updateByIdCategoryService = async (data, id) => {

    const result = await Store.updateOne({ _id: id }, data, { runValidators: true })
    return result;
}
























