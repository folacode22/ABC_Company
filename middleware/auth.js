const jwt = require('jsonwebtoken');

// Middleware to authenticate user
exports.Auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token,process.env.SECRET_KEY);
    req.user = { userId: decodedToken.userId };
    next();
  } catch (error) {
   return res.status(401).json({ error: 'Authentication failed' });
  }
};
