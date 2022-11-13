const Product = require('../models/Product')
const Brand = require('../models/Brand');


exports.getProductService = async (filters, queries) => {

    console.log("filters: ", filters);
    const products = await Product.find(filters)
        .skip(queries.skipProductCount)
        .limit(queries.limit)
        .sort(queries.sortBy)
        .select(queries.fields)
    const totalProducts = await Product.countDocuments(filters);
    const pageCount = Math.ceil(totalProducts / queries.limit);
    return {
        products, totalProducts, pageCount
    };
}
exports.createProductService = async (data) => {

    const result = await Product.create(data);
    console.log("result: ", result);
    const { _id: productId, brand } = result;

    // update brand

    const res = await Brand.updateOne(
        { _id: brand.id },
        { $push: { products: productId } }
    )
    console.log("nModified: ", res.modifiedCount);

    return result;
}

exports.updateProductService = async (_id, data) => {


    // update method 1

    const result = await Product.updateOne({ _id: _id }, { $set: data }, { runValidators: true });


    // update method 2

    // const product = await Product.findById(_id);

    // const result = await product.set(data).save();


    // update method 3

    // const result = await Product.updateOne({ _id: _id }, { $inc: {price:data.price} }, { runValidators: true });

    return result;
}

exports.bulkUpdateProductService = async (data) => {



    // const result = await Product.updateMany({ _id: data.ids }, data.data, { runValidators: true })
    console.log(data);
    const products = [];

    data?.ids?.forEach(product => {

        products.push(
            Product.updateOne({ _id: product._id }, product.data, { runValidators: true })
        )
    })

    const result = Promise.all(products);

    return result;
}


exports.bulkDeleteProductService = async (ids) => {

    console.log(ids);
    const result = await Product.deleteMany({ _id: ids });

    return result;
}



exports.deleteProductByIdService = async (_id) => {

    const result = await Product.deleteOne({ _id: id });

    return result;
}





























