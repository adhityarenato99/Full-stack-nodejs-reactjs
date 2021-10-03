var dbConn = require('../../config/db.config');

var User = function(user) {
    this.firstname = user.fname;
    this.lastname = user.lname;
    this.email = user.email;
    this.phone = user.phone;
    this.image = user.image;
}

// get all users
User.getAllUsers = (result) =>{
    dbConn.query('SELECT * FROM users', (err, res)=>{
        if(err){
            console.log('Error while fetching users', err);
            result(null,err);
        }else{
            console.log('Users fetched successfully');
            result(null,res);
        }
    })
}

// get User by Name for Search Data by firstname
User.getUserByName = (firstname, result) => {
    dbConn.query('SELECT * FROM users WHERE firstname LIKE ?', firstname+'%', (err, res) => {
        if(err) {
            console.log('Error while fetching user by id', err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

module.exports = User;