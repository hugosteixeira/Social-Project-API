const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

const socialProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    number:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    joinedAt:{
        type: Date,
        default: Date.now,
    }

})

socialProjectSchema.plugin(mongoosePaginate)

mongoose.model('SocialProject', socialProjectSchema);