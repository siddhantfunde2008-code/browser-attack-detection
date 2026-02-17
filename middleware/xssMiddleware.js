const AttackLog = require("../models/AttackLog")

module.exports = async function(req, res, next) {
    const body = JSON.stringify(req.body)

    if (body.includes("<script>") || body.includes("</script>")) {
        await AttackLog.create({
            type: "XSS",
            payload: body,
            ip: req.ip
        })
        return res.status(400).json({ message: "XSS Attack Detected" })
    }
    next()
}
