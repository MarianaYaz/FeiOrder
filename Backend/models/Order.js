const mongoose = require('mongoose');
const {Schema} = mongoose;
const Order = new Schema ({
    totalCost: Float32Array,
    comment: String,
    estimatedTime: String,
    statusOrder: OrderStatus
})

Order.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.pass;
    return obj;
   }

const OrderStatus = {
    Created: "Created",
    Cooking : "Cooking",
    Delivered: "Delivered",
    Canceled: "Canceled",
}

module.exports = mongoose.model('Order',Order)