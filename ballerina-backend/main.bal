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
