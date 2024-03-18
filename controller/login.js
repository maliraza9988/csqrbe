const User = require('../models/User');

const login = async (req, res) => {
    
    if(!req.body.emailAddress){
        res.status(200).send({'message': 'Invlid parameters', 'responseCode' : 1});
    }

    try{
        const userEmail = req.body.emailAddress;
        
        User.findOne({
        where: {
            emailAddress: userEmail
        }
        }).then(user => {
        if (user) {
            res.status(200).send({'message' : 'User Already Registered', 'responseCode': 0, 'user' : user})
        } else {
            res.status(200).send({'message' : 'No user found with the email', 'responseCode': 1})        }
        }).catch(error => {
            res.status(500).send({'message' : error, 'responseCode': 1})  
        });
    } catch (error) {
        res.status(500).send({ error: 'Internal server error' });
    }
}

module.exports = login;