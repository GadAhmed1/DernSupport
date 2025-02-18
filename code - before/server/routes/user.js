const express = require('express')
const Router = express.Router();
const Controllers = require('../controllers/user.controllers') 
Router.route('/')
    .get(Controllers.GetAllUsersController)
    .post(Controllers.AddUserController)

Router.route('/:id')
    .get(Controllers.GetSpaUserController)
    .patch(Controllers.UpdateUserController)
    .delete(Controllers.DeleteUserController)
Router.route('/login')
    .post(Controllers.LoginUserController)
module.exports = Router