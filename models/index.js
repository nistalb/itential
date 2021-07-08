const mongoose = require("mongoose");

// connections string
const dburl = "mongodb://localhost:27017/itentialdb"

// connect
mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
.then(function(){
    console.log("MongoDB connected");
})
.catch(function(error){
    console.log("MongoDB error");
    console.log(error);
});

mongoose.connection.on("disconnected", function(){
    console.log("MongoDB disconnected");
});

module.exports= {
    Soda: require("./Soda")
};