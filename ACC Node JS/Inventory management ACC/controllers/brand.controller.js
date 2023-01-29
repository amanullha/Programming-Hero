const { createBrandService, getBrandService, getBrandByIdService, updateBrandService } = require("../services/brand.service")
const ObjectId = require('mongoose').Types.ObjectId;






exports.createBrand = async (req, res, next) => {

    try {
        const data = req.body;


        const result = await createBrandService(data);

        res.status(200).json({
            status: "success",
            message: "Successfully created the Brand",
            data: result
        })

    }

    catch (error) {
        res.status(400).json({
            status: "fail",
            error: error.message,
        })
    }
}


exports.getBrand = async (req, res, next) => {

    try {


        const result = await getBrandService();

        res.status(200).json({
            status: "success",
            message: "Successfully get the Brand",
            data: result
        })

    }

    catch (error) {
        res.status(400).json({
            status: "fail",
            error: error.message,
        })
    }
}




exports.getBrandById = async (req, res, next) => {

    try {
        const { id } = req.params;

        const result = await getBrandByIdService(id);

        if (!result) {
            return res.status(400).json({
                status: "fail",
                error: error.message,
                message: "Couldn't find a brand with this id"
            })
        }

        res.status(200).json({
            status: "success",
            message: "Successfully get the Brand",
            data: result
        })

    }

    catch (error) {
        res.status(400).json({
            status: "fail",
            error: error.message,
        })
    }
}



exports.updateBrand = async (req, res, next) => {

    try {
        const { id } = req.params;
        const data = req.body;

        const result = await updateBrandService(id, data);
        console.log(result);

        if (!result.modifiedCount) {
            return res.status(400).json({
                status: "fail",
                error: error.message,
                message: "Couldn't update the Brand with this id"
            })
        }

        res.status(200).json({
            status: "success",
            message: "Successfully update the Brand",
            data: result
        })

    }

    catch (error) {
        res.status(400).json({
            status: "fail",
            error: error.message,
        })
    }
}








































