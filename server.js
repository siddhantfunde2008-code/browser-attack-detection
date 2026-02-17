require("dotenv").config()

const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const rateLimit = require("express-rate-limit")
const connectDB = require("./config/db")

const app = express()

// Connect Database
connectDB()

// Middlewares
app.use(express.json())
app.use(helmet())
app.use(cors())

// Rate Limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
})
app.use(limiter)

// Routes
app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/detect", require("./routes/detectionRoutes"))
app.use("/api/admin", require("./routes/adminRoutes"))

// Root Route (for Render test)
app.get("/", (req, res) => {
    res.send("Browser Attack Detection System API is Running 🚀")
})

// ✅ IMPORTANT FOR DEPLOYMENT
const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
)
