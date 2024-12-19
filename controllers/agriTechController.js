import { getAgriTechService } from "../services/agriTechService.js";

export const agriTechController = (_req, res) => {
  try {
    const data = getAgriTechService();
    res.json({
      flag: "success",
      data,
    });
  } catch (error) {
    throw new Error(error);
  }
};
