import { Router } from "express";
// routes/user.js
import { CreateAdmin, loginAdmin } from "../controllers/admin.js";


const router = Router();
router.post("/admin/signUp", CreateAdmin);
router.post("/admin/signIn",loginAdmin);

export default router;
