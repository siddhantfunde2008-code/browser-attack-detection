const AttackLog = require("../models/AttackLog")

module.exports = async function(req, res, next) {
    const body = JSON.stringify(req.body).toUpperCase()
    const patterns = ["' OR 1=1", "DROP TABLE", "--", "SELECT *"]

    for (let pattern of patterns) {
        if (body.includes(pattern)) {
            await AttackLog.create({
                type: "SQL Injection",
                payload: body,
                ip: req.ip
            })
            return res.status(400).json({ message: "SQL Injection Detected" })
        }
    }
    next()
}
