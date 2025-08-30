import express from "express";
import createShortUrl from "../Controller/createShortUrl.controller.js";
import urlSchema from "../models/shortUrl.model.js";

const route = express.Router();

// ✅ create a short URL
route.post("/", createShortUrl);

// ❌ your GET route is wrong
// You're trying to access req.params.id, but your route is just "/" (no :id in path)
route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const foundUrl = await urlSchema.findOne({ short_url: id });
    console.log("foundUrl",foundUrl );
    if (foundUrl) {
      res.redirect(foundUrl.full_url);
      console.log("foundUrl",foundUrl );
      
    }
    else{
      return res.status(404).send("URL not found");
    }

    // ✅ redirect to original URL
    
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

export default route;
