const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({
    cloud_name: "dtl0aycr8",
    API_key: "258995482963988",
    api_secret: "hyTA5QmiScL4DYNYgU6vT1ZjNyE",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file,{
        resource_type: 'auto'
    });

    return result;
}

const upload = multer({storage});

module.exports= {upload, imageUploadUtil};
