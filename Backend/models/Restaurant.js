const mongoose = require('mongoose');
const {Schema} = mongoose;
const Restaurant = new Schema ({
    name: String,
    address: Float32Array,
    schedule: String,
    state: Boolean
})

Restaurant.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.pass;
    return obj;
   }

module.exports = mongoose.model('Restaurant',Restaurant)