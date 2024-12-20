import {
  getAgriTechService,
  otpLoginService,
  otpLoginValidationService,
  postUserDataService,
  postJobDetailsService,
  getJobDetailsService,
  avaialbleWorkersService
} from "../services/agriTechService.js";

export const agriTechController = async (req, res) => {
  try {
    const data = await getAgriTechService();
    res.json({
      flag: "success",
      data,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const otpLoginController = async (req, res) => {
  try {
    const { mobileNo } = req.body;
    const data = await otpLoginService(mobileNo);
    res.json({
      flag: "success",
      data,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const otpLoginValidationController = async (req, res) => {
  try {
    const { mobileNo, otpNo } = req.body;
    const data = await otpLoginValidationService(mobileNo, otpNo);

    res.json({
      flag: "success",
      data,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const postUserDataController = async (req, res) => {
  try {
    const data = await postUserDataService(req.body);
    res.json({
      flag: "success",
      data,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const postJobDetailsController = async (req, res) => {
  try {
    const data = await postJobDetailsService(req.body.data);
    res.json({
      flag: "success",
      data,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const getJobDetailsController = async (req, res) => {
  try {
    const {createdBy,mobileNo} = req.query
    const data = await getJobDetailsService(createdBy,mobileNo);
    res.json({
      flag: "success",
      data,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const avaialbleWorkersController = async (req, res) => {
  try {
    const { pincode } = req.query;
    const data = await avaialbleWorkersService(pincode);
    res.json({
      flag: "success",
      data,
    });
  } catch (error) {
    throw new Error(error);
  }
};
