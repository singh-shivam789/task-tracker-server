
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://shivamsingh99:GTr7SExnQ3VHOKS3@dev-mongo-cluster-1.fc5mj.mongodb.net/?retryWrites=true&w=majority&appName=dev-mongo-cluster-1";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let db;
try {
    client.connect().then(
        db = client.db("test").collection("test")
    ).catch(err => {
        throw err;
    }).finally(
        await client.close()
    )
} catch (error) {
    console.log(error);
}

export default db;