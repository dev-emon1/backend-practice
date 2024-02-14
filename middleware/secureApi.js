const secureApi = (req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.send({ error: "Invalid link" });
  }
};

module.exports = secureApi;
