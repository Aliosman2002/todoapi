import  mongoose from "mongoose";

const {Schema,model}=mongoose;

const todoSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true,
        default:false
    },
    date_time:{
        type:String,
        required:true
    }
});


const Todo=model('Todo',todoSchema);

export{Todo};