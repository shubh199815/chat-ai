const jwt = require('jsonwebtoken');

// Create tokens
const createAccessToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_ACCESS_SECRET, {
        expiresIn: '15m',
    });
};

const createRefreshToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET, {
        expiresIn: '7d',
    });
};

const sendTokens = (res, userId) => {
    const accessToken = createAccessToken(userId);
    const refreshToken = createRefreshToken(userId);

    // Send refresh token as HTTPOnly cookie
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true, // set to false in localhost
        sameSite: 'Strict', // or 'Lax'
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.json({ accessToken });
};

module.exports = { sendTokens };
