
    import mongoose, {AnyExpression, Schema,model } from 'mongoose';
    import {tododb} from './database';

   
    interface Todo {
        title:string,
        task: {
            item: string;
            description: string;
        }[]
    }

    const schema = new Schema<Todo>({
        title:String,
        task: [{
            item:String,
            description:String
        }]

    })

     const todo =tododb.model<Todo>("list", schema);
    
     export default todo;
