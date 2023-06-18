const multer = require('multer');

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Create multer middleware
const upload = multer({ storage: storage }).single('file');

module.exports = upload;