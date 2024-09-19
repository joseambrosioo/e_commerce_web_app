const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { handleImageUpload } = require('../controllers/admin/products-controller');

cloudinary.config({
    cloud_name: 'dn8b6a5fy',
    api_key: '238593188458937',
    api_secret: 'ggphSqwHBKm6Opqgv6sIEi2XZME',
})

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file, {
        resource_type: 'auto',
    });

    return result;
}


const upload = multer({ storage })
module.exports = { upload, handleImageUpload, imageUploadUtil };