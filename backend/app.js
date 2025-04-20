// backend/app.js
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const authRoutes = require("./routes/auth");
const cookieParser = require("cookie-parser");

require("./config/passport");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(passport.initialize());

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
	res.send("Welcome to the backend API!");
});

app.post("/api/refresh-token", (req, res) => {
	const token = req.cookies.refreshToken;
	if (!token) return res.sendStatus(401);

	const jwt = require("jsonwebtoken");
	jwt.verify(token, process.env.JWT_REFRESH_SECRET, (err, decoded) => {
		if (err) return res.sendStatus(403);

		const newAccessToken = jwt.sign(
			{ userId: decoded.userId },
			process.env.JWT_ACCESS_SECRET,
			{ expiresIn: "15m" }
		);
		res.json({ accessToken: newAccessToken });
	});
});

module.exports = app;
