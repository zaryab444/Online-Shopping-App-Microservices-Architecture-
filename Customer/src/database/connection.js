const mongoose = require('mongoose');
const { DB_URL } = require('../config');

module.exports = async() => {

    try {
        // await mongoose.connect(DB_URL, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useCreateIndex: true
        // });
        // console.log('Db Connected');
       await mongoose.connect('mongodb://localhost:27017/shopping_ms_customer')
       console.log('Db Connected');
        
    } catch (error) {
        console.log('Error ============')
        console.log(error);
        process.exit(1);
    }
 
};

 