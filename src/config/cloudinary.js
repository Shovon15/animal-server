const { cloudName, cloudApiKey, cloudApiSecret } = require('../secret');

const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your credentials
cloudinary.config({
    cloud_name: cloudName,
    api_key: cloudApiKey,
    api_secret: cloudApiSecret,
});

const uploadOnCloudinary = async (file, folderName, width, height) => {
    try {
        if (!file) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(file, {
            resource_type: "auto",
            folder: folderName,
            width: width,
            height: height,
        })
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        // fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        // fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}


module.exports = uploadOnCloudinary;