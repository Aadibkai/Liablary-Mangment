import { Router } from "express";
// routes/user.js
import { CreateUser, loginUser } from "../controllers/user.js";


const router = Router();
router.post("/user/signUp", CreateUser);
router.post("/user/signIn", loginUser);

export default router;
