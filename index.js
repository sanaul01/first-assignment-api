const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config()

const app = express();
const port = 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hcshw.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run(){
    try{
        await client.connect()
        const database = client.db("insertDB");
        const producets = database.collection("products");
     
    }
    finally{
        // await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res)=>{
    res.send('running first api')
});

app.listen(port, ()=>{
    console.log('running first api server on port', port)
})