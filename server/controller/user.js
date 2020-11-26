const { User } = require("../models");

exports.getUsersData = async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });
    res.send({
      message: "Data has been loaded successfully",
      data: {
        users: userData,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "SERVER ERROR",
      },
    });
  }
};
