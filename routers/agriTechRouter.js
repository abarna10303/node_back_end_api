import { Router } from "express";
import {
  agriTechController,
  otpLoginController,
  otpLoginValidationController,
  postUserDataController,
  postJobDetailsController,
  getJobDetailsController,
} from "../controllers/agriTechController.js";

const router = Router();

router.get("/getData", agriTechController);
router.post("/updateData", postUserDataController);

router.put("/otp-login", otpLoginController);
router.put("/otp-login-validation", otpLoginValidationController);
router.post("/create-job", postJobDetailsController);
router.post("/get-job", getJobDetailsController);

// router.get("/authenticate", azureAuthorizeController);

export default router;
