const validateParams = require("./validateParams");
const validateBody = require("./validateBody");
const validateUpdateBody = require("./validateUpdateBody");
const checkJwt = require("./checkJwt");
const checkLogin = require("./checkLogin");
const checkRegister = require("./checkRegister");
const upLoad = require("./upLoad");

module.exports = {
  validateParams,
  validateBody,
  validateUpdateBody,
  checkJwt,
  checkLogin,
  checkRegister,
  upLoad,
};
