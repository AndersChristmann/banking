const express = require('express');
const router = express.Router();
const Account = require('../models/account');

//Endpoint for all users
router.get('/', async (req, res) => {
    try {
        // 1. return accounts from database instead
        Account.find()
            .then(account => res.json(account))
            .catch(err => res.status(400).json('Error ' + err))
    } catch (err) {
        console.log({message: err})
    };
});

//Endpoint for adding user
router.post('/', async (req, res) => {
    const user = new Account({
        //enter correct fields
    });

    res.json(user);
});

// Implement a new endpoint, that will be able to return a specific account by id.
// instead of just printing, return the actual account.
router.route('/:id').get((req, res) => {
    Account.findById(req.params.id)
        .then(account => res.json(account))
        .catch(err => res.status(400).json('Error ' + err))
});


module.exports = router;