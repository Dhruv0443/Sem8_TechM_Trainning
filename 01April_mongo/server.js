require('dotenv').config();
const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";//use env variable
const client = new MongoClient(url);
async function run(params) {
    try{
        await client.connect();
        console.log("Connected to MongoDB! ");

        const db = client.db("myDatabase");zaQ
        global.users = db.collection("users");
        await createUser("radhe",25); //Create
        await createUser("radhe",25); //Create
        await getUsers(); //Read
        await updateUser("radhe",30)  //Update
        await getUsers();   //Read after Update
        // await deleteUser("radhe");    //Delete
        // await getUsers()             // Read after Delete
    }catch (error){
        console.error("Error: ",error);
    }finally{
        await client.close();
        console.log("connection closed");
    }
}
    //Create - Insert a User
    async function createUser(name,age) {
        const existingUser = await users.findOne({name});
        if(!existingUser){
            await users.insertOne({name,age});
            console.log("User inserted successfully!");
        }else{
            console.log("User already exists!");
        }
    }
    //Read - Get all Users
    async function getUsers(params) {
        const allUsers = await users.find().toArray();
        console.log("All Users: ",allUsers);
    }
    //Update - Modify User Data
    async function updateUser(name, newAge) {
        const result = await users.updateOne(
            {name},
            {$set:{age:newAge}}
        );
        if(result.modifiedCount>0){
            console.log("User updated successfully!");
        }else{
            console.log("No user found to update!");
        }
    }
    //Delete - Remove a User
    async function deleteUser(name) {
        const result = await users.deleteOne({name});
        if(result.deletedCount>0){
            console.log("User deleted successfully!");
        }else{
            console.log("No user found to delete");
        }
    }

run().catch(console.error);


