import express from "express"
import cors from "cors"
// import { app } from "./firebase-config"
// import swaggerUi from "swagger-ui-express"
// import swaggerDocument from "../docs.json"
import addUser from "./addUser"
import getAllUser from "./allUser";

const server = express();

server.use(cors());
server.use(express.json());
// server.use('/api-docs', swaggerUi.serve);
// server.get('/api-docs', swaggerUi.setup(swaggerDocument));

server.post("/new-user", async(req, res)=>{
    const username = req.body.username;
    const email = req.body.email;
    
    try{
        const id = await addUser(username, email);
        res.status(201).json({
            msg: "user added sussessfully",
            userId: id
        })
    }catch(error){
        console.log("adding user error: ",error);
        res.status(500).json({
            msg: "some error in server side"
        })
    }
})

server.get("/all-users", async(req, res)=>{
    
    try{
        const data = await getAllUser();
        res.status(200).json({
            msg: "users data",
            users: data
        })
    }catch(error){
        console.log("adding user error: ",error);
        res.status(500).json({
            msg: "some error in server side"
        })
    }
})

server.listen(8080, ()=>{
    console.log("running at 8080 port");
})