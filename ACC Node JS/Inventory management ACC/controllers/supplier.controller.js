const { createSupplierService, getSupplierService, getSupplierByIdService, updateSupplierService } = require('../services/supplier.service');



const ObjectId = require('mongoose').Types.ObjectId;



exports.createSupplier = async (req, res, next) => {

    try {
        const data = req.body;


        const result = await createSupplierService(data);

        res.status(200).json({
            status: "success",
            message: "Successfully created the supplier",
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


exports.getSupplier = async (req, res, next) => {

    try {


        const result = await getSupplierService();

        res.status(200).json({
            status: "success",
            message: "Successfully get the supplier",
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




exports.getSupplierById = async (req, res, next) => {

    try {
        const { id } = req.params;

        const result = await getSupplierByIdService(id);

        if (!result) {
            return res.status(400).json({
                status: "fail",
                error: error.message,
                message: "Couldn't find a supplier with this id"
            })
        }

        res.status(200).json({
            status: "success",
            message: "Successfully get the supplier",
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



exports.updateSupplierById = async (req, res, next) => {

    try {
        const { id } = req.params;
        const data = req.body;

        const result = await updateSupplierService(id, data);
        console.log(result);

        if (!result.modifiedCount) {
            return res.status(400).json({
                status: "fail",
                error: error.message,
                message: "Couldn't update the supplier with this id"
            })
        }

        res.status(200).json({
            status: "success",
            message: "Successfully update the supplier",
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








































