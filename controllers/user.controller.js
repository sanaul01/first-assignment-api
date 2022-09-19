const users = require('../JsonFile/users.json')

module.exports.getAllUsers = (req, res)=>{
    const {limit, page} = req.query;
    console.log(limit, page)
    res.json(users.slice(0, limit))
};

module.exports.saveAUser = (req, res)=>{
    console.log(req.body);
    users.push(req.body);
    res.send(users)
};

module.exports.getUserDetail = (req,res) =>{
    const {id} = req.params;
    const foundUser = users.find(user => user.id === Number(id))
    res.json(foundUser)
}