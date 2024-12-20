import { MongoClient } from "mongodb";
import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();
const url =
  "mongodb+srv://prabaharanvasu96:prabaharanvasu96@cluster1.erxhy.mongodb.net/";
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
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

export const otpLoginService = async (mobileNo) => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const database = client.db("agri_tech");
    const collection = database.collection("users");
    const result = await collection
      .find({ mobileNo }, { projection: { _id: 0 } })
      .toArray();
    if (result !== null) {
      const clientMessage = twilio(accountSid, authToken);
      const otp = Math.floor(100000 + Math.random() * 900000);
      clientMessage.messages.create({
        body: `Your OTP is ${otp}`,
        from: "+12184838661",
        to: `+91${mobileNo}`,
      });
      await collection.updateOne({ mobileNo }, { $set: { otp } });
    } else {
      throw new Error("No data found");
    }
    console.log("Data fetch succesful");
    return result;
  } catch (error) {
    console.error("Error  occurred while reading from MongoDB:", error);
    throw error;
  } finally {
    await client.close();
  }
};

export const otpLoginValidationService = async (mobileNo, otp) => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const database = client.db("agri_tech");
    const collection = database.collection("users");
    const numberOtp = Number(otp);
    const result = await collection.findOne(
      { mobileNo, otp: numberOtp },
      { projection: { _id: 0 } }
    );

    if (result !== null) {
      return result;
    } else {
      throw new Error("No data found");
    }
  } catch (error) {
    console.error("Error  occurred while reading from MongoDB:", error);
    throw error;
  } finally {
    await client.close();
  }
};

export const postUserDataService = async (data) => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const database = client.db("agri_tech");
    const collection = database.collection("users");
    const jsonData = {
      fullName: data.fullName,
      lastName: data.lastName,
      mobileNo: data.mobileNo,
      type: data.type,
      homeAddress: data.homeAddress,
      city: data.city,
      state: data.state,
      pincode: data.pincode,
    };
    console.log(data);
    const result = await collection.insertOne(jsonData);
    console.log("Data fetch succesful");
    return result;
  } catch (error) {
    console.error("Error  occurred while reading from MongoDB:", error);
    throw error;
  } finally {
    await client.close();
  }
};

export const postJobDetailsService = async (data) => {
  try {
    await client.connect();

    const database = client.db("agri_tech");
    const collection = database.collection("Job_list");

    // Directly insert the received data
    const result = await collection.insertOne(data);

    console.log("Data inserted successfully:", result);
    return result;
  } catch (error) {
    console.error("Error occurred while inserting into MongoDB:", error);
    throw error;
  } finally {
    await client.close();
  }
};

export const getJobDetailsService = async (createdBy,mobileNo) => {
  try {
    await client.connect();

    const database = client.db("agri_tech");
    const collection = database.collection("Job_list");

    const jsonData = {
      createdBy: createdBy,
      createdByMobile: mobileNo,
      status: "Active",
    };
    const result = await collection.find(jsonData,{_id:0}).toArray();

    return result;
  } catch (error) {
    console.error("Error occurred while inserting into MongoDB:", error);
    throw error;
  } finally {
    await client.close();
  }
};

export const avaialbleWorkersService = async (pincode) => {
  try {
    await client.connect();

    const database = client.db("agri_tech");
    const collection = database.collection("users");

    const jsonData = {
      pincode: pincode,
      type:"worker"
    };
    const result = await collection.find(jsonData, { _id: 0 }).toArray();

    return result;
  } catch (error) {
    console.error("Error occurred while inserting into MongoDB:", error);
    throw error;
  } finally {
    await client.close();
  }
};
