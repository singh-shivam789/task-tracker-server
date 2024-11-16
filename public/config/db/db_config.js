
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv'
dotenv.config();
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@dev-mongo-cluster-1.fc5mj.mongodb.net/?retryWrites=true&w=majority&appName=dev-mongo-cluster-1`;

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
        db = client.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME)
    ).catch(err => {
        throw err;
    }).finally(
        await client.close()
    )
} catch (error) {
    console.log(error);
}

export default db;