const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'dxxdyfeb8', 
    api_key: '763839326746179', 
    api_secret: 'DZIIk4LpBN7mXzirKN3Z_rS8jPY' 
});

module.exports = cloudinary;
