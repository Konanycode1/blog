import { connect } from "mongoose";
import { InProduction } from "./env.js";

export const connectDB =  async ()=>{

    // eslint-disable-next-line no-undef
    const MONGO_URI = process.env.MONGO_URI
    if(!MONGO_URI) throw new Error("env variable : MONGO_URI is required" );
    await connect(MONGO_URI, {
        dbName: InProduction?'blog':'test_blog'
    })
}

