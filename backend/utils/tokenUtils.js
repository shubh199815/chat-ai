const jwt = require("jsonwebtoken");

const generateAccessToken = (userId) => {
	return jwt.sign({ userId }, process.env.JWT_ACCESS_SECRET, {
		expiresIn: "15m",
	});
};

const generateRefreshToken = (userId) => {
	return jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET, {
		expiresIn: "7d",
	});
};

const verifyAccessToken = (token) => {
	return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
};

const verifyRefreshToken = (token) => {
	return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
};

module.exports = {
	generateAccessToken,
	generateRefreshToken,
	verifyAccessToken,
	verifyRefreshToken,
};
