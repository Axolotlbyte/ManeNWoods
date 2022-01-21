import mongoose from "mongoose";

export default function initDB() {
    if(mongoose.connections[0].readyState){
        console.log("Connected");
        return
    }
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection.on('connected',() => {
        console.log("Successfully Connected to mongodb")
    })
    mongoose.connection.on('error',(err) => {
        console.log(err)
    })
}