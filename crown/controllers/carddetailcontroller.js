const { cardDetails } = require('../models');
const db = require('../models');
const { text } = require('body-parser');
const CardDetail = db.cardDetails;

const addCarddet = async (req, res) => {
    const body = req.body;
    const cards = await CardDetail.create(body);
    if(cards){
        res.status(200).json({
            code: res.statusCode,
            data: cards,
            message: 'CardDetail saved successfully'
        });
    }else{
        return res.json({
            status:0,
            message:"CardDetail doesn't saved"
        });
    }
}

const updateCarddet= async (req, res) => {
    let user_id = req.body.user_id;
        const cards = await CardDetail.update(req.body, { where: { user_id: user_id } });
        if(cards){
            res.status(200).json({
            data: cards,
            code: res.statusCode,
            message: 'CardDetail update success'
            });
        }else{
            return res.json({
            status:0,
            message:"CardDetail update failed"
            });
        }
}


module.exports = {
    addCarddet,
    updateCarddet
};