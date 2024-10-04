const express = require("express");
const { uploadFile } = require("../../controllers/firebase/uploadController");
const upload = require("../../middleware/multer");

const router = express.Router();

router.post("/upload", upload.single("file"), uploadFile);

module.exports = router;
