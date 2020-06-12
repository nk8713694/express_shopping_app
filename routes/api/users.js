
const User=require('../../db').User

const route=require('express').Router();


route.get('/',(req,res)=>{
    // we wna t to send array of all users

    // from our database

    User.findAll()
    .then((users)=>{
        res.status(200).send(users)
    })
    .catch((err)=>{
        res.status(500).send({
            error:"could not retrve users"
        })
    })
})

route.post('/', (req, res) => {
    // We expect the req to have name in it
    // We will create a new user 

    User.create({
        name: req.body.name
    }).then((user) => {
        res.status(201).send(user)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new user"
        })
    })
})

exports = module.exports = route