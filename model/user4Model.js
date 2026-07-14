import { MongoClient, ObjectId } from "mongodb";

export async function dbConnection() {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();
  const db = client.db("mydb");
  return await db.collection("students").find().toArray();
}

export async function addDataToDB(data) {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();
  const db = client.db("mydb");
  const result = await db.collection("students").insertOne(data);
  console.log(result);
  return result;
}

export async function UpdateStudentToDB(req, resp) {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();
  const db = client.db("mydb");
  const filter = {
    _id: new ObjectId(req.params.id),
  };
  const update = {
    $set: req.body,
  };
  const result = await db.collection("students").updateOne(filter, update);
  return result;
}

export async function deleteDataToDB(req, res) {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();
  const db = client.db("mydb");
  const result = await db
    .collection("students")
    .deleteOne({ _id: new ObjectId(req) });
  console.log(result);
  return result;
}
