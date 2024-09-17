import ballerinax/mongodb;
import ballerina/io;

public function main() returns error? {
    // MongoDB connection configuration
    mongodb:ConnectionConfig mongoConfig = {
        connection: {
            host: "cluster0.mongodb.net",
            port: 27017,
            auth: {
                username: "lahiruheshan454",
                password: "pEAFpZLt9VZO86BT"
            },
            options: {
                sslEnabled: true,
                retryWrites: true
            }
        },
        databaseName: "ballerina"  // Replace with your actual database name if needed
    };

    // Create MongoDB client
    mongodb:Client mongoClient = check new (mongoConfig);

    // Get the database names
    var dbNames = mongoClient->getDatabasesNames();
    match dbNames {
        string[] names => io:println("Databases: ", names);
        error e => io:println("Failed to get databases: " + e.message);
    }

    // Get collection names in the specified database
    var collections = mongoClient->getCollectionNames("ballerina");
    match collections {
        string[] names => io:println("Collections: ", names);
        error e => io:println("Failed to get collections: " + e.message);
    }

    // Close the MongoDB client
    mongoClient->close();
}
