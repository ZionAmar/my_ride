const express = require('express');
const router = express.Router();
module.exports = router;

router.get("/", (req, res) => {
    res.render("login", { pageTitle: "מי בטרמפ" });
});