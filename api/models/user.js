import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    fullName: {type: String, required:true, unique: true},
    userName: {type: String, required:true, unique: true},
    email: {type: String, required:true, unique: true},
    comments: {
        type:[
       { 
        type: Schema.Types.ObjectId,
        ref: 'comment'
        }
    ],
    default: []
    },
    poste:  {
        type:[
       { 
        type: Schema.Types.ObjectId,
        ref: 'comment'
        }
    ],
    default: []
    },
    message: {
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: 'message'
            }
        ],
        default: []
    }
})
export default model("User", userSchema)
