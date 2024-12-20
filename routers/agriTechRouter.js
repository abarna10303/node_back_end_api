import { Router } from "express";
import { agriTechController } from "../controllers/agriTechController.js";

const router = Router();

router.get("/getData", agriTechController);

// router.get("/authenticate", azureAuthorizeController);

export default router;
