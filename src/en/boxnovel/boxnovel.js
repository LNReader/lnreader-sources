const express = require("express");
const boxNovelScraper = require("./boxnovelScraper");

const router = express.Router();

// Top novels

router.get("/novels/:pageNo/", boxNovelScraper.novelsScraper);

// Novel

router.get("/novel/:novelUrl", boxNovelScraper.novelScraper);

// Chapter

router.get("/novel/:novelUrl/:chapterUrl", boxNovelScraper.chapterScraper);

// Search

router.get("/search/", boxNovelScraper.searchScraper);

module.exports = router;
