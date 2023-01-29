const { getProductService, createProductService, updateProductService, bulkUpdateProductService, deleteProductByIdService, bulkDeleteProductService } = require("../services/product.services");


exports.getProduct = async (req, res, next) => {


    try {

        let filters = { ...req.query };

        console.log("filters : ", req.query);

        const excludeFields = ['sort', 'page', 'limit'];

        excludeFields.forEach(field => delete filters[field]);

        let filtersString = JSON.stringify(filters);

        filtersString = filtersString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);

        filters = JSON.parse(filtersString);

        console.log('filtersString filters: ', filters);




        const queries = {};

        if (req.query.sort) {

            const sortBy = req.query.sort.split(',').join(' ');
            queries.sortBy = sortBy;

        }
        if (req.query.fields) {

            const fields = req.query.fields.split(',').join(' ');
            queries.fields = fields;

        }
        if (req.query.page) {

            const { page = 1, limit = 10 } = req.query;
            const skipProductCount = (1 * limit) * ((1 * page) - 1);
            queries.skipProductCount = Number(skipProductCount);
            queries.limit = Number(limit);

        }

        const products = await getProductService(filters, queries);


        res.status(200).send({
            success: true,
            data: products,
        })



    } catch (error) {

        res.status(400).send({
            success: false,
            message: "Can't get the data",
            error: error.message,

        })

    }


}


exports.createProduct = async (req, res, next) => {

    try {

        const result = await createProductService(req.body);


        result.logger();

        res.status(200).send({
            success: true,
            message: "Data inserted successful",
            data: result,
        })

    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        })
    }



}

exports.updateProduct = async (req, res, next) => {

    try {
        const { _id } = req.params;

        const result = await updateProductService(_id, req.body);

        res.status(200).json({
            success: true,
            message: "Data Updated successfully",
            data: result,
        })



    } catch (error) {
        res.status(400).send({
            success: false,
            message: "Couldn't update the product",
            error: error.message,
        })
    }
}


exports.bulkUpdateProduct = async (req, res, next) => {

    try {
        console.log(req.body);
        const result = await bulkUpdateProductService(req.body);

        res.status(200).json({
            success: true,
            message: "Data Updated successfully",
            data: result,
        })


    } catch (error) {
        res.status(400).send({
            success: false,
            message: "Couldn't update the product",
            error: error.message,
        })
    }

}
exports.bulkDeleteProduct = async (req, res, next) => {

    try {
        const result = await bulkDeleteProductService(req.body.ids);

        res.status(200).json({
            success: true,
            message: "Data Bulk-Updated successfully",
            data: result,
        })


    } catch (error) {
        res.status(400).send({
            success: false,
            message: "Couldn't bulk-update the product",
            error: error.message,
        })
    }

}
exports.deleteProductById = async (req, res, next) => {

    try {
        const _id = req.params;


        const result = await deleteProductByIdService(_id);

        console.log('res: ', result);

        if (!result.deletedCount) {

            return res.status(400).json({
                status: "fail",
                error: "Couldn't delete the product"
            })
        }

        res.status(200).json({
            success: true,
            message: "Data deleted successfully",
            data: result,
        })


    } catch (error) {
        res.status(400).send({
            success: false,
            message: "Couldn't delete the product",
            error: error.message,
        })
    }

}



exports.fileUpload = async (req, res, next) => {

    try {

        // for one more images use 'files' instants of 'file'

        res.status(200).json({
            success: true,
            message: "File upload successfully",
            data: req.files,
        })


    } catch (error) {
        res.status(400).send({
            success: false,
            message: "Couldn't upload the file",
            error: error.message,
        })
    }

}













































