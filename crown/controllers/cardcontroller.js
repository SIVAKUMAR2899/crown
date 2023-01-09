const { cardDetails } = require('../models');
const db = require('../models');
const { text } = require('body-parser');
const Card = db.cardDetails;

const addCards = async (req, res) => {
    const body = req.body;
    const cards = await Card.create(body);
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

const updateCard = async (req, res) => {
    let user_id = req.params.user_id
    const cards = await Card.update(req.body, { where: { user_id: user_id } });
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
    updateCard
};