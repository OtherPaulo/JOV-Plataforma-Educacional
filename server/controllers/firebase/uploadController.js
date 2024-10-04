const { bucket } = require("../../firebase-config");
const path = require("path");

const uploadFile = async (req, res) => {
  try {
    const { title, description, category, materialType } = req.body;

    if (!req.file) {
      return res.status(400).send({ message: "No file uploaded." });
    }

    if (!title || !description || !category || !materialType) {
      return res.status(400).send({ message: "Missing required fields." });
    }

    const file = req.file;
    const fileName = `${Date.now()}_${file.originalname}`;
    const blob = bucket.file(fileName);
    const blobStream = blob.createWriteStream({
      metadata: {
        contentType: file.mimetype,
        metadata: {
          title: title,                
          description: description,    
          category: category,          
          materialType: materialType, 
        },
      },
    });

    blobStream.on("error", (err) => {
      res.status(500).send({ message: err.message });
    });

    blobStream.on("finish", async () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      res.status(200).send({
        message: "File uploaded successfully",
        url: publicUrl,
        fileInfo: {
          title,
          description,
          category,
          materialType,
        },
      });
    });

    blobStream.end(file.buffer);
  } catch (error) {
    res.status(500).send({ message: "Error uploading file", error: error.message });
  }
};

module.exports = { uploadFile };
