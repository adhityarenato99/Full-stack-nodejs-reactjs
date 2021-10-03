const UserModel = require('../models/user.model');

// get all users list
exports.getUserList = (req, res)=> {
    //console.log('here all employees list');
    UserModel.getAllUsers((err, users) =>{
        console.log('Get all user');
        if(err)
        res.send(err);
        console.log('Users', users);
        res.send(users)
    })
}

// get user by firstname search
exports.getUserByName = (req, res) => {
    UserModel.getUserByName(req.params.firstname, (err, user) => {
        if(err)
        res.send(err);
        console.log('Single user data', user);
        res.send(user);
    })
}