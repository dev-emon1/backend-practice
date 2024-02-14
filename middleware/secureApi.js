const secureApi = (req, res, next) => {
  if (req.headers.authorization === "abcabcdef") {
    next();
  } else {
    res.send({ error: "Invalid link" });
  }
};

module.exports = secureApi;
