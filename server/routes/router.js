const express = require("express");

const router = express.Router();

// login & register functions
const { register, login, checkAuth } = require("../controller/auth");

// Middleware's functions
const { authenticated } = require("../middleware/authentication");
const { uploadFile } = require("../middleware/upload");

// Admin's function
const {
  getAllLiterature,
  updateStatus,
  getByStatus,
} = require("../controller/admin");

// User's function
const { getUsersData } = require("../controller/user");

// Literature's functions
const {
  getLiteratures,
  getByTitle,
  getOneLiterature,
  addLiterature,
  getByYear,
  getYears,
} = require("../controller/literature");

// Collections' function
const { getMyCollection, addCollection } = require("../controller/collection");

// My Literature's function
const { getMyLiterature } = require("../controller/author");

// routing for register & login
router.post("/register", register);
router.post("/login", login);
router.get("/auth", authenticated, checkAuth);

// routing for admin
router.get("/all-literature", authenticated, getAllLiterature);
router.post("/update/:id/:status", authenticated, updateStatus);
router.get("/sorted/:status", authenticated, getByStatus);

// routing for Users
router.get("/users", authenticated, getUsersData);

// routing for Literature
router.get("/literature", getLiteratures);
router.get("/literature-detail/:id", authenticated, getOneLiterature);
router.get("/literature/:year", getByYear);
router.get("/literature-search/:keyword", getByTitle);
router.post("/add-literature", uploadFile(), authenticated, addLiterature);
router.get("/years", authenticated, getYears);

// routing for Collection
router.get("/my-collection", authenticated, getMyCollection);
router.post("/add-collection/:id_literature", authenticated, addCollection);

// routing for Author
router.get("/my-literature", authenticated, getMyLiterature);

module.exports = router;
