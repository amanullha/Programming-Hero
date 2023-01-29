const { getStoreService, createStoreService, getByIdCategoryService, updateByIdCategoryService } = require('../services/store.service')

exports.getStore = async (req, res, next) => {
    console.log("get");

    try {

        const data = await getStoreService();

        res.status(200).send({
            status: true,
            message: "get the data",
            data: data
        })

    } catch (error) {

        res.status(400).send({

            status: false,
            error: error.message
        })
    }

}

exports.createStore = async (req, res, next) => {

    console.log("create");

    try {

        const data = req.body;

        const result = await createStoreService(data);

        res.status(200).send({
            status: true,
            message: "Post Successfully",
            data: data
        })

    } catch (error) {

        res.status(400).send({

            status: false,
            error: error.message
        })
    }

}

exports.getStoreById = async (req, res, next) => {
    console.log("get by id ");

    try {
        const id = req.params;
        const data = await getByIdCategoryService(id);


        res.status(200).send({
            status: true,
            message: "get the single data",
            data: data
        })

    } catch (error) {

        res.status(400).send({

            status: false,
            error: error.message
        })
    }

}

exports.updateStore = async (req, res, next) => {

    console.log("update");

    try {
        const data = req.body;
        const id = req.params;

        const result = await updateByIdCategoryService(data, id);

        res.status(200).send({
            status: true,
            message: "updated Successfully",
            data: result
        })

    } catch (error) {

        res.status(400).send({

            status: false,
            error: error.message
        })
    }

}