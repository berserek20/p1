import mongoose from 'mongoose';
import {config} from '../config/config';

export const tododb =mongoose.createConnection(config.mongo.url,{retryWrites:true, w:'majority'})
// .then(()=>{
//     console.log("connected");

// }).catch((error)=> console.log(error));