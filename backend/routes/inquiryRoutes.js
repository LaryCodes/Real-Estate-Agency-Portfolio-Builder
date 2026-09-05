const express = require("express");
const { createInquiry, getInquiries } = require("../controllers/inquiryController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", createInquiry);
router.get("/", protect, adminOnly, getInquiries);

module.exports = router;
