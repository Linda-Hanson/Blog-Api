const { register, login } = require("../controllers/authControl");
const { checkUserData } = require("../middlewares/authenticate");

const authRouter = require("express").Router();

authRouter.post("/check", checkUserData); 
authRouter.post("/register", register);
authRouter.post("/login", login);

module.exports = authRouter;