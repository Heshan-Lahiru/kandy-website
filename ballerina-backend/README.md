<h1 align="center">Ballerina Backend Project 🚀</h1>
<p align="center">
  <strong>🛠️ Ballerina 2201.3.1 | 📜 MIT License | 🏗️ In Development</strong>
</p>
<p align="center">
  This project demonstrates how to create a simple backend service using Ballerina.
</p>
Table of Contents

Prerequisites
Getting Started
Project Structure
Running the Project
API Endpoints
Modules
Contributing
License

Prerequisites

🌐 Ballerina installed on your system

Getting Started

Install Ballerina from the official website.
Create a new project:
Copybal new my-ballerina-backend

Navigate to your project folder:
Copycd my-ballerina-backend


<p align="left">
Project Structure
<pre>
my-ballerina-backend/
├── Ballerina.toml        # Project configuration file
├── main.bal              # Main file where services are defined
├── modules/              # Additional modules
│   ├── db/
│   │   └── db_connection.bal   # Database connection module
│   └── utils/
│       └── helper.bal          # Utility functions and helpers
└── resources/            # Static resources (optional)
</pre>
</p>


Running the Project
To run the Ballerina project, use the following command in the project root:
Copybal run
API Endpoints
The project includes the following API endpoints:

GET /api/data: Returns a simple JSON response
POST /api/submit: Accepts JSON payload and returns a response

Example of the main service in main.bal:
ballerinaCopyimport ballerina/http;
import my_ballerina_backend.utils;

service /api on new http:Listener(8080) {

    resource function get data(http:Caller caller, http:Request req) returns error? {
        json response = utils:formatMessage("Hello from Ballerina using a helper!");
        check caller->respond(response);
    }

    resource function post submit(http:Caller caller, http:Request req) returns error? {
        json payload = check req.getJsonPayload();
        json response = { "status": "Received", "data": payload };
        check caller->respond(response);
    }
}
Modules
💾 Database Module (db_connection.bal)
Located in modules/db/db_connection.bal, this module manages database connections:
ballerinaCopyimport ballerina/sql;
import ballerina/mysql;

public function getDbConnection() returns sql:Client|error {
    mysql:Client dbClient = check new (user = "root", password = "password", database = "testdb", host = "localhost", port = 3306);
    return dbClient;
}
🔧 Utility Module (helper.bal)
Located in modules/utils/helper.bal, this module contains utility functions:
ballerinaCopypublic function formatMessage(string message) returns json {
    return { "message": message };
}
Contributing
🤝 Contributions are welcome! Please feel free to submit a Pull Request.
License
📄 This project is open source and available under the MIT License.