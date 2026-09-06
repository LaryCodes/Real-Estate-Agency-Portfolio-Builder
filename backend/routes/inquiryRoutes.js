import express from "express";
import { createInquiry, getInquiries } from "../controllers/inquiryController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", createInquiry);
router.get("/", protect, adminOnly, getInquiries);

export default router;