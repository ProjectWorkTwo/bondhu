const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8001;

// const authRouter = require("./routers/auth");
// const profileRoute = require("./routers/profile");
// const homeRoute = require("./routers/home");
// const groupRoute = require("./routers/group");


app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(authRouter);
// app.use(homeRoute);
// app.use(profileRoute);
// app.use(groupRoute);


const uri = process.env.DB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    await client.connect();
    const userCollection = client.db("bondhuDB").collection("users");

    app.get('/', async(req, res) => {
      res.send("Sweet Home");
    });

    /**
     * ! Methods for user 
    **/
    app.post('/createuser', async(req, res) => {
      const user = req.body;
      const {email} = user;
      const query = {email: email};
      const userData = await userCollection.findOne(query);

      if(userData) {
        res.send({error: "user already exists"});
        return;
      }
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    app.post('/getuser', async(req, res) => {
      const user = req.body;
      const {email} = user;
      const query = {email: email};
      const userData = await userCollection.findOne(query);

      if(!userData) {
        res.send({error: "user already exists"});
        return;
      }
      res.send({success: "user found"});
    });
    



    app.listen(port, () => {
      console.log(`server is running at http://localhost:${port}`);
    });


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


