import { getAgriTechService } from "../services/agriTechService.js";

export const agriTechController = async (_req, res) => {
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
