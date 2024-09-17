import ballerina/io;
import ballerinax/mongodb;

// MongoDB Atlas connection URI (replace <cluster_url> with your actual cluster URL)
string uri = "mongodb+srv://lahiruheshan454:pEAFpZLt9VZO86BT@cluster0.2gkm5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoDB connection configuration
mongodb:ConnectionConfig mongoConfig = {
    url: uri
};

public function main() {
    // Create MongoDB client using the connection config
    mongodb:Client mongoClient = check new (mongoConfig);
    
    // Specify the database and collection (replace with your actual database and collection names)
    mongodb:Database db = check mongoClient->getDatabase("myDatabase");
    mongodb:Collection collection = check db->getCollection("myCollection");

    // Example: Inserting a document into the collection
    json document = { "name": "John", "age": 30 };
    var result = collection->insertOne(document);

    if (result is mongodb:Error) {
        io:println("Error occurred while inserting the document: ", result.message());
    } else {
        io:println("Document inserted successfully.");
    }

    // Close the MongoDB client
    mongoClient->close();
}
