const { CustomAPIError } = require("../error/custom-error");

const errorHandlerMiddleware = (err, res, req, next) => {
  if (err instanceof Error) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res.status(500).json({ msg: "Something went wrong!" });
};

module.exports = errorHandlerMiddleware;
