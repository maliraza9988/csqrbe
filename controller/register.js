const User = require('../models/User');

const register = (req, res) => {
    if(
        !req.body.firstName || 
        !req.body.lastName || 
        !req.body.currentOccupation ||
        !req.body.emailAddress ||
        !req.body.phoneNumber ||
        !req.body.location ||
        !req.body.notificationCheck ||
        !req.body.roadmapPathway ||
        !req.body.targetRole
    ){
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
            res.status(200).send({'message' : 'User Already Registered', 'responseCode': 1, 'user' : user})
        } else {
            try {
                User.create({
                    firstName : req.body.firstName,
                    lastName : req.body.lastName,
                    currentOccupation : req.body.currentOccupation,
                    emailAddress : req.body.emailAddress,
                    phoneNumber : req.body.phoneNumber,
                    location : req.body.location,
                    notificationCheck : req.body.notificationCheck,
                    roadmapPathway : req.body.roadmapPathway,
                    targetRole : req.body.targetRole
                }).then(user => {
                    res.status(200).send({'message' : 'New User Created', 'responseCode': 0, 'user' : user});
                }).catch(error => {
                    res.status(200).send({'message': error, 'responseCode': 1});
                });
            } catch (error) {
                res.status(500).send({ 'message' : 'Internal server error', 'responseCode': 1 });
            }       }
        }).catch(error => {
            res.status(500).send({'message' : error, 'responseCode': 1})  
        });
    } catch (error) {
        res.status(500).send({ error: 'Internal server error' });
    }
}

module.exports = register;