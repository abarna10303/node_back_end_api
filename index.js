import express from "express";
import cors from "cors";
// import router from "./route/index";
import routers from "./routers/agriTechRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routers);

const PORT = 9001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
