import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://prabaharanvasu96:prabaharanvasu96@cluster1.erxhy.mongodb.net/";
const client = new MongoClient(url);
export const getAgriTechService = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const database = client.db("agri_tech");
    const collection = database.collection("users");
    const result = await collection.find({}).toArray();
    console.log("Data fetch succesful");
    return result;
  } catch (error) {
    console.error("Error  occurred while reading from MongoDB:", error);
    throw error;
  } finally {
    await client.close();
  }
};
