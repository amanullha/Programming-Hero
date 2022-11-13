const multer = require('multer');

const path = require('path');

const storage = multer.diskStorage({
    destination: "images/",

    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + "-" + file.originalname)
    }
})

const uploader = multer({
    storage: storage,
    fileFilter: (req, file, callBack) => {

        const supportedImage = /png|jpg/;
        const extension = path.extname(file.originalname);

        if (supportedImage.test(extension)) {

            callBack(null, true);
        }
        else {

            callBack(new Error("Must be a png/jpg image"));
        }
    },
    limits: {
        fileSize: 5000000,
    }

})


module.exports = uploader
















