const { createCategoryService, getCategoryService } = require("../services/category.service");




exports.createCategory = async (req, res, next) => {

    console.log("create");

    try {

        const data = req.body;

        const result = await createCategoryService(data);

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

exports.getCategory = async (req, res, next) => {

    console.log("get");

    try {

        const data = await getCategoryService();

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

exports.getByIdCategory = async (req, res, next) => {

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

exports.updateByIdCategory = async (req, res, next) => {

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














