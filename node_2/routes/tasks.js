const express = require('express');
const Router = express.Router();
const {get_all_con,create_con,get_con,up_con,del_con} = require('../controllers/tasks');
const validate_token = require('../middleware/validate_token');


Router.use(validate_token);
Router.route('/').get(get_all_con).post(create_con)
Router.route('/:id').get(get_con).put(up_con).delete(del_con)



module.exports = Router;