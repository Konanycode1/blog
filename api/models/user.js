import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    fullName: {type: String, required:true, unique: true},
    userName: {type: String, required:true, unique: true},
    email: {type: String, required:true, unique: true},
    password:{type: String, required:true,minLength:6},
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
    },
    role: {type: String, requered: true, default: 'user'}
})
export default model("User", userSchema)

// userSchema.pre('save', async function(next){
//     const user = this;
//     user.password = bcrypt.hash(user.password, await bcrypt.genSalt(),10)
//     next()

// })
