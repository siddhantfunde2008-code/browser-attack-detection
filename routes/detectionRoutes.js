const express = require("express")
const auth = require("../middleware/authMiddleware")
const xss = require("../middleware/xssMiddleware")
const sql = require("../middleware/sqlMiddleware")
const csrf = require("../middleware/csrfMiddleware")

const router = express.Router()

router.post("/submit", auth, csrf, xss, sql, (req, res) => {
    res.json({ message: "Request is Safe" })
})

module.exports = router
