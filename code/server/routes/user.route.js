const {Router} = require('express');
const router = Router();
const Controllers = require('../controllers/user.controller');

router.route('/api/users')
    .get(Controllers.GetAllUsersController)
    .post(Controllers.AddUserController)
router.route('/api/login')
    .post(Controllers.LoginUserController)
router.route('/api/req')
    .post(Controllers.AddNewRequest)
router.route('/api/contactus')
    .post(Controllers.constContactUsSendMessageController)
router.route('/api/clearreq')
    .post(Controllers.RemoveRequstesFromDb)
router.route('/api/removeuser/:id')
    .delete(Controllers.RemoveUser)
module.exports = router;