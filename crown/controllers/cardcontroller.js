const { userCards } = require('../models');
const db = require('../models');
const { text } = require('body-parser');
const UserCard = db.userCards;

const addCards = async (req, res) => {
    const body = req.body;
    const cards = await UserCard.create(body);
    // let Exps =await Exp.create({id:null,user_id:req.body.user_id,expCount:req.body.expCount});
    if(cards){
        res.status(200).json({
            code: res.statusCode,
            data: cards,
            message: 'card saved successfully'
        });
    }else{
        return res.json({
            status:0,
            message:"card doesn't saved"
        });
    }
}

const updateCards = async (req, res) => {
    let user_id = req.body.user_id;
        const cards = await UserCard.update(req.body, { where: { user_id: user_id } });
        if(cards){
            res.status(200).json({
            data: cards,
            code: res.statusCode,
            message: 'Card update success'
            });
        }else{
            return res.json({
            status:0,
            message:"card update failed"
            });
        }
}

module.exports = {
    addCards,
    updateCards
};