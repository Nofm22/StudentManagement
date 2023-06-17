const express = require("express");
const {
    Register,
    Login,
    getAllUsers,
    auth,
    deleteUser,
    updateUser,
    uploadImage,
} = require("../controllers/userControllers");
const userRouter = express.Router();
const { verifyToken } = require("../middlewares/authenticate");
const { isEmpty } = require("../middlewares/userHandlers");
const upload = require("../config/multer");
userRouter.post("/register", Register);
userRouter.get("/getAllUsers", getAllUsers);
userRouter.post("/login", isEmpty, Login);
userRouter.get("/verify-token", verifyToken, auth);
userRouter.delete("/deleteUser", deleteUser);
userRouter.put("/updateUser", updateUser);
userRouter.post("/uploadImage", upload.single('image'), uploadImage);
module.exports = {
    userRouter,
};
