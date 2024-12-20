import {
  getAgriTechService,
  postUserDataService,
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
