const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8001;

// const authRouter = require("./routers/auth");
// const profileRoute = require("./routers/profile");
// const homeRoute = require("./routers/home");
// const groupRoute = require("./routers/group");

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
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
  },
});
async function run() {
  try {
    await client.connect();

    const userCollection = client.db("bondhuDB").collection("users");
    const postCollection = client.db("bondhuDB").collection("posts");
    const groupsCollection = client.db("bondhuDB").collection("groups"); //? Collection of groups
    const groupPostCollection = client.db("bondhuDB").collection("groupposts"); //? Collection for group posts
    const groupMemberCollection = client
      .db("bondhuDB")
      .collection("groupmember"); //? Collection for Group Members

    /*
     ** User verification methods
     * start
     */
    const findUser = async (req, res, next) => {
      const email = req.headers?.email;
      const password = req.headers?.password;
      const query = { email, password };
      const result = await userCollection.findOne(query);
      req.result = result;

      next();
    };

    /*
     ** User verification methods
     * ends here
     */

    app.get("/", async (req, res) => {
      res.send("Sweet Home");
    });

    /**
     * ! Methods for user
     **/
    app.post("/createuser", async (req, res) => {
      const user = req.body;
      const { email } = user;
      const query = { email: email };
      const userData = await userCollection.findOne(query);

      if (userData) {
        res.send({ error: "user already exists" });
        return;
      }
      const result = await userCollection.insertOne(user);
      res.send({ success: "Account created successfully!" });
    });

    // app.post("/userVarify", async (req, res) => {
    //   const { email, password } = req.body;
    //   const userData = await userCollection.findOne({ email, password });
      
    //   return res.send(userData);
    // });

    

    app.get("/getuser", async (req, res) => {
      const { email, password } = req.headers;
      const query = { email, password };
      const userData = await userCollection.findOne(query);

      if (!userData) {
        res.send({ error: "user already exists" });
        return;
      }
      res.send({ success: "user found", ...userData });
    });

    app.put("/updateuser/:id", findUser, async (req, res) => {
      //! user should be veriied

      const id = req.params.id;
      const query = { _id: new Object(id) };
      const userData = await userCollection.findOne(query);

      if (req.result.email !== userData.email) {
        return res.send({ error: "bad request" });
      }

      const options = { upsert: false };
      const updateUser = req.body;

      const setUser = {
        $set: {
          ...updateUser,
        },
      };
      const result = await userCollection.updateOne(query, setUser, options);
      res.send(result);
    });

    /**
     * ! Methods for posts
     **/
    app.post("/createpost", findUser, async (req, res) => {
      //* user should be veriied
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const post = req.body;
      const result = await postCollection.insertOne(post);
      res.send(result);
    });

    app.put("/updatepost/:id", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const options = { upsert: false };
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await postCollection.findOne(query);

      if (req.result.email !== result.email) {
        return res.send({ error: "bad request" });
      }

      const updatePost = req.body;
      console.log(updatePost);
      console.log(result);
      const setPost = {
        $set: {
          ...result,
        },
      };

      const newresult = await postCollection.updateOne(query, setPost, options);
      res.send(newresult);
    });

    app.get("/getposts", async (req, res) => {
      const result = await postCollection
        // .find({ status: "active" })
        // .find({ status: "active" })
        .sort({ _id: -1 })
        .toArray();

      res.send(result);
    });

    /**
     * ! Methods for GroupPost
     * * Check it and update where needed
     **/


    app.post('/creategrouppost', findUser, async(req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const groupName = req.body.groupName;
      const findGroup = await groupsCollection.findOne({groupName: groupName});

      if(findGroup) {
        return res.send({error: "Group already exist"});
      }

      // const email = req.body.email;
      // const query = { email: email };

      const post = req.body;
      const creationResult = await groupPostCollection.insertOne(post);

      const adminResult = await  groupMemberCollection.insertOne({
        groupName: post.groupName,
        email: post.email,
        status: "admin"
      });
      
      res.send({creationResult, adminResult});
      
    });



    /**
     * ! Methods for Groups
     * * Check it and update where needed
     **/

    app.post('/creategroup', findUser, async(req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const groupName = req.body.groupName;
      const findGroup = await groupsCollection.findOne({groupName: groupName});

      if(findGroup) {
        return res.send({error: "Group already exist"});
      }

      // const email = req.body.email;
      // const query = { email: email };

      const post = req.body;
      const creationResult = await groupsCollection.insertOne(post);

      const adminResult = await  groupMemberCollection.insertOne({
        groupName: post.groupName,
        email: post.email,
        status: "admin"
      });
      
      res.send({creationResult, adminResult});
      
    });

    // /group/group_name
    app.put("/updategroup/:groupName", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const options = { upsert: false };
      const groupName = req.params.groupName;
      const query = { groupName };
      const result = await groupsCollection.findOne(query);


      if (req.result.email !== result.authorEmail) {
        return res.send({ error: "bad request" });
      }

      const updateGroup = req.body;
      // console.log(updateGroup);
      // console.log(result);
      const setGroup = {
        $set: {
          ...updateGroup,
        },
      };

      const newresult = await groupsCollection.updateOne(query, setGroup, options);
      res.send(newresult);
    });

    app.get('/getgroup/:groupName', async (req, res) => {
      const result = await groupsCollection.findOne({groupName: req.params.groupName});
      return res.send(result);
    });

    app.get("/getjoinedgroups", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }
      
      const result = await groupMemberCollection
        .find({email: req.result?.email})
        .sort({ _id: -1 })
        .toArray();
      

      res.send(result);
    });


    app.get("/getmygroups", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const result = await groupsCollection
        .find({email: req.result?.email})
        .sort({ _id: -1 })
        .toArray();
      

      res.send(result);
    });

    app.get("/getallgroups", async (req, res) => {
      const result = await groupsCollection
        .sort({ _id: -1 })
        .toArray();

      res.send(result);
    });

    



    /**
     * ! Methods for Group Members
     * * Check it and update where needed
     **/


    app.post("/addgroupmember", findUser, async (req, res) => {
      const result = groupMemberCollection.insertOne({
        groupName: req.headers.groupName,
        email: req.headers.email,
        status: "member"
      });

      return res.send(result);
    });

    app.get("/getgroupmembers/:groupName", async (req, res) => {
      const result = groupMemberCollection
        .find({groupName: req.params.groupName})
        .toArray()
      
      return res.send(result);
    });


    app.get("/verifygroupauthor", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const result = await groupMemberCollection.findOne({
        groupName: req.headers.groupName,
        email: req.headers.email
      });

      if(!result) return res.send({data: false});
      if(result?.status==="admin") return res.send({data: true});
      return res.send({data: false});   
    });

    app.get("/verifygroupmember", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const result = await groupMemberCollection.findOne({
        groupName: req.headers.groupName,
        email: req.headers.email
      });

      if(!result) return res.send({data: false});
      if(result?.status==="member") return res.send({data: true});
      return res.send({data: false});   
    });



































    app.listen(port, () => {
      console.log(`server is running at http://localhost:${port}`);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
