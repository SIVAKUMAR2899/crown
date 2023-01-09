const Usercontroller = require('../controllers/usercontroller');
const Cardcontroller = require('../controllers/cardcontroller');

const router = require('express').Router()

router.post('/adduser',Usercontroller.addUser)

router.get('/alluser',Usercontroller.getAllUser)

router.get('/:user_id',Usercontroller.getOneUser)

router.put('/:user_id',Usercontroller.updateUser)

router.delete('/:user_id',Usercontroller.deleteUser)

router.post('/addcard',Cardcontroller.addCards)

router.put('/:user_id',Cardcontroller.updateCard)

module.exports = router;