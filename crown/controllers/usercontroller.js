const { users } = require('../models');
const db = require('../models');
const { text } = require('body-parser');
const Player = db.users;
const Crown = db.crownCounts;
const Exp = db.expCounts;
const CardDetail = db.cardDetails;

//1.post method

const addUser = async (req, res) => {
    // const salt = genSaltSync(10);
    const body = req.body;
    // body.password = hashSync(req.body.password,salt);
    //  console.log(body.password);
    const users = await Player.create(body);
    if(users){
        res.status(200).json({
            code: res.statusCode,
            data: users,
            message: 'user saved successfully'
        });
    }else{
        return res.json({
            status:0,
            message:"user doesn't saved"
        });
    }
}

//2.get all users

const getAllUser = async (req, res) => {
    let users = await Player.findAll({
        
    });
    if(users){
        res.status(200).send(users);
    }else{
        return res.json({
            status:0,
            message:"User doesn't return successfully"
        })
    }
}

//3.get by id

const getOneUser = async (req, res) => {
    let user_id = req.params.user_id
    let users = await Player.findOne({ include: [{
        model: Crown,
        as: 'crown'
    },{
        model: Exp,
        as: 'exp'
    },{
        model: CardDetail,
        as: 'carddetail'
    }],
    where: { user_id: user_id } });
    if(users){
        return res.status(200).json({
            data:users
        });
    }else{
        return res.json({
            status:0,
            message:"User is invalid"
        });
    }  
}

//4.edit profile method

const updateUser = async (req, res) => {
    let user_id = req.params.user_id
    const users = await Player.update(req.body, { where: { user_id: user_id } });
    if(users){
        res.status(200).json({
            data: users,
            code: res.statusCode,
            message: 'User update success'
        });
    }else{
        return res.json({
            status:0,
            message:"User update failed"
        });
    }
}

//5.delete method

const deleteUser = async (req, res) => {
    let user_id = req.params.user_id
    await users.destroy({ where: { user_id: user_id } })
    res.status(200).json({
        code: res.statusCode,
        data: users,
        message: 'Deleted successfully'
    })
}

module.exports = {
    addUser,
    getAllUser,
    getOneUser,
    updateUser,
    deleteUser
};