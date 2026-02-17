module.exports = function(req, res, next) {
    const csrfToken = req.headers["x-csrf-token"]

    if (!csrfToken || csrfToken !== "securetoken123") {
        return res.status(403).json({ message: "Invalid CSRF Token" })
    }

    next()
}
