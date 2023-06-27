<<<<<<< HEAD
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


=======
/* eslint-disable no-undef */
import { connect } from 'mongoose';
import { inProduction } from './env.js';

export const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  if (!MONGO_URI) throw new Error('env variables : MONGO_URI is required');
  await connect(MONGO_URI, {
    dbName: inProduction ? 'blog' : 'test_blog',
  });
};
>>>>>>> 30328a8c3fe039ada5ba02ca46ed8cc11a01c387
