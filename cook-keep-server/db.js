const mongoose = require('mongoose');

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    try {   
            mongoose.connect('mongodb://liten623jp:easymongo%21@cluster0.wl3bixu.mongodb.net/',connectionParams);
            console.log("Connected to DB");
    } catch(error){
            console.log(error);
    }

}