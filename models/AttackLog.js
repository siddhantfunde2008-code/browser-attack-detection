const mongoose = require("mongoose")

const attackLogSchema = new mongoose.Schema({
    type: String,
    payload: String,
    ip: String,
    user: String,
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("AttackLog", attackLogSchema)
