const express = require('express');
const {get_reg,get_log,get_all} = require('../controllers/usercontrol');
const validate_token = require('../middleware/validate_token');
const router = express.Router();

router.route('/register').post(get_reg);
router.route('/login').post(get_log);
router.route('/current').get(validate_token,get_all);

module.exports = router;