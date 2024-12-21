import { Router } from "express";
import {
  agriTechController,
  otpLoginController,
  otpLoginValidationController,
  postUserDataController,
  postJobDetailsController,
  getJobDetailsController,
  avaialbleWorkersController,
  getAvailableContractorsController,
} from "../controllers/agriTechController.js";

const router = Router();

router.get("/getData", agriTechController);
router.post("/updateData", postUserDataController);

router.put("/otp-login", otpLoginController);
router.put("/otp-login-validation", otpLoginValidationController);
router.post("/create-job", postJobDetailsController);
router.get("/get-active-job", getJobDetailsController);
router.get("/get-available-workers", avaialbleWorkersController);
router.get("/get-available-contractors", getAvailableContractorsController);

// router.get("/authenticate", azureAuthorizeController);

export default router;
