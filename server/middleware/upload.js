var multer = require("multer");

exports.uploadFile = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/files");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });

  var cpUpload = multer({
    storage: storage,
  }).fields([{ name: "file" }]);

  return (req, res, next) => {
    cpUpload(req, res, function (err) {
      return next();
    });
  };
};

exports.uploadImage = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/images");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });

  var cpUpload = multer({
    storage: storage,
  }).fields([{ name: "file" }]);

  return (req, res, next) => {
    cpUpload(req, res, function (err) {
      return next();
    });
  };
};
