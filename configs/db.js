const mongoose = require("mongoose")

const connectDB = async () => {
    try{
        // rename config/.env.env to .env and add mongo uri
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`DB connected to ${conn.connection.host}`)
    }catch(err){
        console.log(`Cannot connect to database: ${err.message}`)
    }
}

module.exports = connectDB