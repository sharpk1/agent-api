const express = require('express');
const router = express.Router();
const customers = require('../../public/Customers');
const uuid = require('uuid');

// Return List of all customers
router.get('/', (_req, res) => {
    res.json(customers);
});

// Ability to Add New Customer
router.post('/', (req, res) => {

    const newCustomer = {
        _id: Math.floor(1000 + Math.random() * 9000),
        agent_id: req.body.agent_id,
        guid: uuid.v4(),
        isActive: req.body.isActive,
        balance: req.body.balance,
        age: req.body.age,
        eyeColor: req.body.eyeColor,
        name: {
            first: req.body.first,
            last: req.body.last
        },
        company : req.body.company,
        email : req.body.email,
        phone : req.body.phone,
        address : req.body.address,
        registered : req.body.registered,
        latitude : req.body.latitude,
        longitude : req.body.longitude,
        tags : [
            req.body.tags
        ]
    }

    if (!newCustomer) {
      return res
        .status(400)
        .json({
          msg: "Please include all of the necessary fields for a new customer",
        });
    }

    customers.push(newCustomer);
    res.json(customers);

})

// Delete a customer
router.delete('/:_id', (req, res) => {
    const found = customers.some(customer => customer._id === parseInt(req.params._id));
    if (found){
        res.json({msg: "Customer deleted", 
        customers: customers.filter(customer => customer._id !== parseInt(req.params._id))});    
    }
    else {
        res.status(400).json({ msg: `No customer with the id of ${req.params._id}`});
    }
});

// List all customers associated with a given Agent's INT ID (UI will list Name – last, first – and city, state in List View)
router.get('/:_id', (req, res) => {
    const found = customers.some(customer => customer.agent_id === parseInt(req.params._id));
    if (found){
        res.json({msg: "Customer(s) found", 
        customers: customers.filter(customer => customer.agent_id === parseInt(req.params._id))});    
    }
    else {
        res.status(400).json({ msg: `No customer with the agent id of ${req.params._id}`});
    }
});

//•	Provide ability to Update Customer Information
router.put('/:_id', (req, res) => {
    const found = customers.some(customer => customer._id === parseInt(req.params._id));
    if (found){
        const updateCustomer = req.body;

        customers.forEach(customer => {
            
            if (customer._id === parseInt(req.params._id)){
                customer.agent_id = updateCustomer.agent_id ? updateCustomer.agent_id : customer.agent_id;
                customer.guid =  updateCustomer.guid ? updateCustomer.guid : customer.guid;
                customer.isActive =  updateCustomer.isActive ? updateCustomer.isActive : customer.isActive;
                customer.balance =  updateCustomer.balance ? updateCustomer.balance : customer.balance;
                customer.age =  updateCustomer.age ? updateCustomer.age : customer.age;
                customer.eyeColor =  updateCustomer.eyeColor ? updateCustomer.eyeColor : customer.eyeColor;
                customer.name = updateCustomer.name ? updateCustomer.name : customer.name
                customer.company = updateCustomer.company ? updateCustomer.company : customer.company
                customer.email = updateCustomer.email ? updateCustomer.email : customer.email
                customer.phone = updateCustomer.phone ? updateCustomer.phone : customer.phone
                customer.address = updateCustomer.address ? updateCustomer.address : customer.address
                customer.registered = updateCustomer.registered ? updateCustomer.registered : customer.registered
                customer.latitude = updateCustomer.latitude ? updateCustomer.latitude : customer.latitude
                customer.longitude = updateCustomer.longitude ? updateCustomer.longitude : customer.longitude
                customer.tags = updateCustomer.tags ? updateCustomer.tags : customer.tags

                res.json({ msg: "Customer has been updated.", customer})
            }
        })
    }
    else {
        res.status(400).json({ msg: `No customer with the id of ${req.params._id}`});
    }
});


module.exports = router;