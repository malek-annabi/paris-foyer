const jwt = require("jsonwebtoken");
exports.verifyToken = (req, res, next) => {
  let token = req.headers.authorization;
  //oif no token get out of here
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  //token verification for routes protection
  jwt.verify(token, process.env.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    next();
  });
};