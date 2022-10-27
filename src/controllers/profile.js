const data = require("../models/profile");

exports.profile = (req, res) => {
    res.status(200).json(data);
};