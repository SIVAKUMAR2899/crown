const Usercontroller = require('../controllers/usercontroller');
const Crowncontroller = require('../controllers/crowncontroller');
const Expcontroller = require('../controllers/expcontroller');
const Cardcontroller = require('../controllers/cardcontroller');
const Carddetcontroller = require('../controllers/carddetailcontroller');

const router = require('express').Router()

router.post('/adduser',Usercontroller.addUser)

router.get('/alluser',Usercontroller.getAllUser)

router.get('/:user_id',Usercontroller.getOneUser)

router.put('/:user_id',Usercontroller.updateUser)

router.delete('/:user_id',Usercontroller.deleteUser)

router.post('/addcrown',Crowncontroller.addCrown)

router.put('/crown/:user_id',Crowncontroller.updateCrown)

router.post('/addexp',Expcontroller.addExp)

router.put('/exp/:user_id',Expcontroller.updateExp)

router.post('/addcard',Cardcontroller.addCards)

router.post('/card/:updatecard',Cardcontroller.updateCards)

router.post('/addcdet',Carddetcontroller.addCarddet)

router.put('/carddet/:user_id',Carddetcontroller.updateCarddet)

module.exports = router;