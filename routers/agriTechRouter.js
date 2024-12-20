import { Router } from "express";
import {
  agriTechController,
  postUserDataController,
} from "../controllers/agriTechController.js";

const router = Router();

router.get("/getData", agriTechController);
router.post("/updateData", postUserDataController);

// router.get("/authenticate", azureAuthorizeController);

export default router;
