const { User } = require("../models/user.model");
const validateRegisterInput = require("../validation/registerValidation");

module.exports = (function () {
  this.createUser = async (req, res, next) => {
    try {
      const { errors, isValid } = validateRegisterInput(req.body);
      // Check Validation
      if (!isValid) {
        return res.json({ status: false, errors });
      }

      const user = new User(req.body);
      await user.save();
      res.json({
        status: true,
        msg: "Saved!",
      });
    } catch (error) {
      next(error);
    }
  };
  
  this.getUser = async (req, res, next) => {
    try {
      const user_data = await User.find()

      return res.status(200).json({
        status: true,
        message: "SUCCESS",
        data: user_data,
      });
    } catch (err) {
      return res.status(500).json({
        status: false,
        message: "DB_ERROR",
        err: err.message ? err.message : err,
      });
    }
  };
  

  return this;
})();

