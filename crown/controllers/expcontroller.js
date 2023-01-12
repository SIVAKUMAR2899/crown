const { expCounts } = require('../models');
const db = require('../models');
const { text } = require('body-parser');
const Exp = db.expCounts;

const addExp = async (req, res) => {
    // const body = req.body;
    // const Exps = await Exp.create(body);
    let Exps =await Exp.create({id:null,user_id:req.body.user_id,expCount:req.body.expCount});
    if(Exps){
        res.status(200).json({
            code: res.statusCode,
            data: Exps,
            message: 'Exp saved successfully'
        });
    }else{
        return res.json({
            status:0,
            message:"Exp doesn't saved"
        });
    }
}

const updateExp = async (req, res) => {
    let user_id = req.body.user_id;
        const Exps = await Exp.update(req.body, { where: { user_id: user_id } });
        if(Exps){
            res.status(200).json({
            data: Exps,
            code: res.statusCode,
            message: 'Exp update success'
            });
        }else{
            return res.json({
            status:0,
            message:"Exp update failed"
            });
        }
}

module.exports = {
    addExp,
    updateExp
};