const { crownCounts } = require('../models');
const db = require('../models');
const { text } = require('body-parser');
const Crown = db.crownCounts;

const addCrown = async (req, res) => {
    // const body = req.body;
    // const crowns = await Crown.create(body);
    let crowns =await Crown.create({id:null,user_id:req.body.user_id,crownCount:req.body.crownCount});
    // console.log(crowns);
    if(crowns){
        res.status(200).json({
            code: res.statusCode,
            data: crowns,
            message: 'Crown saved successfully'
        });
    }else{
        return res.json({
            status:0,
            message:"Crown doesn't saved"
        });
    }
}

const updateCrown = async (req, res) => {
    let user_id = req.body.user_id;
        const Crowns = await Crown.update(req.body, { where: { user_id: user_id } });
        if(Crowns){
            res.status(200).json({
            data: Crowns,
            code: res.statusCode,
            message: 'Crown update success'
            });
        }else{
            return res.json({
            status:0,
            message:"Crown update failed"
            });
        }
}

module.exports = {
    addCrown,
    updateCrown
};