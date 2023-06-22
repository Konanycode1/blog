/* eslint-disable no-undef */
import  express  from "express";
import cors from "cors";
import {config} from 'dotenv'
import {InProduction } from "./config/env.js";
import path from 'path'
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url))
config({
    path: path.join(process.cwd(),".env.local")
})

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(express.static(path.join(__dirname,'../dist')));

if(InProduction){
    app.get('/*',(_,res)=> res.sendFile(path.join(__dirname,'../dist/index.html')))
}
connectDB()
.then(()=>{
    app.listen(3000, ()=>{
        console.log("Server lancé au port 3000")
    })
})
.catch((e) =>{
    console.log(e)
    console.log('An error has occured while connecting to mongodb: ', e.message)
})
