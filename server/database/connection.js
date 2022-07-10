const mongoose = require('mongoose');
/*
const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}*/
    const connectDB = async () => { 
            const con =  mongoose.connect(process.env.MONGO_URI,   err => {
            if(err) throw err;
            console.log('connected to MongoDB')
        });
    }
        




module.exports = connectDB