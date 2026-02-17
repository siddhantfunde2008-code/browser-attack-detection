const express = require("express")
const AttackLog = require("../models/AttackLog")
const auth = require("../middleware/authMiddleware")

const router = express.Router()

// Get All Logs
router.get("/logs", auth, async (req, res) => {
    const logs = await AttackLog.find().sort({ createdAt: -1 })
    res.json(logs)
})

// Delete Log
router.delete("/logs/:id", auth, async (req, res) => {
    try {
        await AttackLog.findByIdAndDelete(req.params.id)
        res.json({ message: "Log deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: "Delete failed" })
    }
})

module.exports = router
