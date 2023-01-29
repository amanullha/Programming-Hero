const Supplier = require('../models/Supplier')

exports.createSupplierService = async (data) => {


    const result = await Supplier.create(data)

    return result;
}

exports.getSupplierService = async () => {


    const result = await Supplier.find({}).populate('products')

    return result;
}
exports.getSupplierByIdService = async (id) => {


    const result = await Supplier.findById(id);

    return result;
}
exports.updateSupplierService = async (id, data) => {


    const result = await Supplier.updateOne({ _id: id }, data, { runValidators: true })

    return result;
}


