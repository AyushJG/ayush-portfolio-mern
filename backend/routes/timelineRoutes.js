import express from "express";
import {
  deleteTimeline,
  getAllTimelines,
  getSingleTimeline,
  postTimeline,
  updateTimeline,
} from "../controller/timelineController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/add", isAuthenticated, postTimeline);
router.delete("/delete/:id", isAuthenticated, deleteTimeline);
router.put("/update/:id", isAuthenticated, updateTimeline);
router.get("/getall", getAllTimelines);
router.get("/get/:id", getSingleTimeline);

export default router;
