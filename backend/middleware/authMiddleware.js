const jwt = require('jsonwebtoken');

const verifyAccessToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403);
        req.userId = decoded.userId;
        next();
    });
};

module.exports = { verifyAccessToken };
