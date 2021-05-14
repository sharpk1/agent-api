const express = require('express');
const router = express.Router();
const agents = require('../../public/Agents');


// Return List of all Agents
router.get('/', (req, res) => {
    res.json(agents);
});

// Retrieve all Agent Details by agent's INT ID
router.get('/:_id', (req, res) => {
    const found = agents.some(agent => agent._id === parseInt(req.params._id));
    if (found){
        res.json(agents.filter(agent => agent._id === parseInt(req.params._id)));    
    }
    else {
        res.status(400).json({ msg: `No agent with the id of ${req.params._id}`});
    }
});

// Ability to Add New Agent
router.post('/', (req, res) => {

    const newAgent = {
        _id: Math.floor(Math.random()*(999-100+1)+100), 
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        tier: req.body.tier,
        phone:{
            primary: req.body.phone.primary,
            mobile: req.body.phone.mobile
        }
    }

    if (
      !newAgent ||
      !newAgent.address ||
      !newAgent.name ||
      !newAgent.city ||
      !newAgent.phone ||
      !newAgent.zipCode ||
      !newAgent.tier ||
      !newAgent.state
    ) {
      return res
        .status(400)
        .json({
          msg: "Please include all of the necessary fields for a new agent",
        });
    }

    agents.push(newAgent);
    res.json(agents);

})

// Update Any/All Fields by Agent’s INT ID
router.put('/:_id', (req, res) => {
    const found = agents.some(agent => agent._id === parseInt(req.params._id));
    if (found){
        const updateAgent = req.body;

        agents.forEach(agent => {
            
            if (agent._id === parseInt(req.params._id)){
                agent.name = updateAgent.name ? updateAgent.name : agent.name;
                agent.address =  updateAgent.address ? updateAgent.address : agent.address;
                agent.city =  updateAgent.city ? updateAgent.city : agent.city;
                agent.state =  updateAgent.state ? updateAgent.state : agent.state;
                agent.zipCode =  updateAgent.zipCode ? updateAgent.zipCode : agent.zipCode;
                agent.tier =  updateAgent.tier ? updateAgent.tier : agent.tier;
                agent.phone = updateAgent.phone ? updateAgent.phone : agent.phone

                res.json({ msg: "Agent has been updated.", agent})
            }
        })
    }
    else {
        res.status(400).json({ msg: `No agent with the id of ${req.params._id}`});
    }
});

module.exports = router;