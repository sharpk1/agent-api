const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const customers = require('./public/Customers');
const app = express();

// Initialize middleware
// app.use(logger);

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Agent API routes
app.use('/api/agents', require('./routes/api/agents'));

// Customer API routes
app.use('/api/customers', require('./routes/api/customers'));


const PORT = process.env.PORT || 5000;



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

























//// res.sendFile(path.join(__dirname, 'public', 'agents.txt'))
// app.use(express.static(path.join(__dirname, 'public')));