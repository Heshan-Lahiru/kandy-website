 01.Install Ballerina: Ballerina website

 02.Create a new project: bal new my-ballerina-backend

03.This will create a folder called my-ballerina-backend with the following structure:
my-ballerina-backend
├── Ballerina.toml
├── main.bal
└── modules/


04.Navigate to your project folder:cd my-ballerina-backend

05.Add a Service to the Project:

06.import ballerina/http;
Edit the default main.bal file or create a new one in the modules directory.
service /api on new http:Listener(8080) {
    resource function get data(http:Caller caller, http:Request req) returns error? {
        json response = { "message": "Hello from Ballerina!" };
        check caller->respond(response);
    }
}

07. Run the Ballerina Project:
bal run


//////////////////////////////////////////////////////////////////////////////////////////////////
---------------------------------------------HELP------------------------------------------------
/////////////////////////////////////////////////////////////////////////////////////////////////

Default Ballerina Project Structure
my-ballerina-backend/
├── Ballerina.toml        # Project configuration file
├── main.bal              # Main file where services or code are defined
└── modules/              # Optional directory to organize code into modules
    ├── <module-name>/    # Custom modules (if any)
    │   └── <code-files>  # Files related to the module


 Edit the main.bal File
 import ballerina/http;

service /api on new http:Listener(8080) {

    // GET method for '/api/data'
    resource function get data(http:Caller caller, http:Request req) returns error? {
        json response = { "message": "Hello from Ballerina!" };
        check caller->respond(response);
    }

    // POST method for '/api/submit'
    resource function post submit(http:Caller caller, http:Request req) returns error? {
        json payload = check req.getJsonPayload();
        json response = { "status": "Received", "data": payload };
        check caller->respond(response);
    }
}


Folder Structure After Adding More Files
my-ballerina-backend/
├── Ballerina.toml
├── main.bal                   # Main service definition
├── modules/                   # Additional modules
│   ├── db/
│   │   └── db_connection.bal   # A module to handle database connections
│   └── utils/
│       └── helper.bal          # Utility functions and helpers
└── resources/                 # Static resources (optional)

Example of a Database Module (db_connection.bal)
mkdir -p modules/db
touch modules/db/db_connection.bal

Then, inside db_connection.bal, you can manage database logic:
import ballerina/sql;
import ballerina/mysql;

public function getDbConnection() returns sql:Client|error {
    mysql:Client dbClient = check new (user = "root", password = "password", database = "testdb", host = "localhost", port = 3306);
    return dbClient;
}

Example of a Utility Module (helper.bal)
mkdir -p modules/utils
touch modules/utils/helper.bal

Inside helper.bal, you can define utility functions:
public function formatMessage(string message) returns json {
    return { "message": message };
}


Update the main.bal to Use the Modules
import ballerina/http;
import my_ballerina_backend.db;
import my_ballerina_backend.utils;

service /api on new http:Listener(8080) {

    resource function get data(http:Caller caller, http:Request req) returns error? {
        // Use utility function from the utils module
        json response = utils:formatMessage("Hello from Ballerina using a helper!");
        check caller->respond(response);
    }

    resource function post submit(http:Caller caller, http:Request req) returns error? {
        json payload = check req.getJsonPayload();
        json response = { "status": "Received", "data": payload };
        check caller->respond(response);
    }
}

Final Folder Structure
my-ballerina-backend/
├── Ballerina.toml
├── main.bal                    # Main file where HTTP
