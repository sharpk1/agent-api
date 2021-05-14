# agent-api

1. Clone repo
2. Navigate to the repo via Visual Studio Code
3. use the npm install command to install dependencies
4. import Postman JSON collection into Postman standalone application to get the necessary endpoints
5. In the root of the project's Visual Studio Code terminal, run "npm start"
6. Test out given API endpoints via Postman. The starting endpoints in the JSON collection will provide an example payload along with the URL

# Endpoint information
1. Get All Agents
- Function: GET
- URL: http://localhost:5000/api/agents

2. Get Agent by ID
- Function: GET
- URL: http://localhost:5000/api/agents/{ID}

3. Add an Agent
- Function: POST
- URL: http://localhost:5000/api/agents/
- Header(s): Content-Type: application/json
- Example payload: {
        "name": "Hello Howdy",
        "address": "123 Main Street #200",
        "city": "Houston",
        "state": "TX",
        "zipCode": "77041",
        "tier": 2,
        "phone":{
            "primary": "123-123-1234",
            "mobile": "713-555-3211"
        }
  }
  
4. Update Agent by Property 
- Function: PUT
- URL:http://localhost:5000/api/agents/{ID}
- Example payload: {
  "name": "Howdy Hello",
  "zipCode": "77041"
}

5. Get all Customers 
- Function: GET
- URL: http://localhost:5000/api/customers/

6. Get Customers by Agent ID
- Function: GET
- URL: http://localhost:5000/api/customers/{Agent_ID}

7. Update customer by ID
- Function: PUT
- URL http://localhost:5000/api/customers/{customer_ID}
- Header(s): Content-Type: application/json
- Example payload: {
    "_id": 8203,
    "agent_id": 467,
    "guid": "60e09079-3b7b-434a-9030-5f7f98eda232",
    "isActive": true,
    "balance": "$2,634.30",
    "age": 100,
    "eyeColor": "brown",
    "name": {
        "first": "Pope",
        "last": "Jones"
    },
    "company": "GEEKOLOGY",
    "email": "pope.wheeler@geekology.co.uk",
    "phone": "+1 (910) 453-2823",
    "address": "825 Cropsey Avenue, Homeworth, Puerto Rico, 7683",
    "registered": "Thursday, January 16, 2014 2:49 AM",
    "latitude": "59.528935",
    "longitude": "52.987053",
    "tags": [
        "cillum",
        "voluptate",
        "duis",
        "mollit",
        "ea"
    ]
}

8. Delete a Customer
- Function: Delete
- URL: http://localhost:5000/api/customers/{Customer_ID}

