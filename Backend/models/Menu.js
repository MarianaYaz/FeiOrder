const mongoose = require('mongoose');
const Dish = require('./Dish');
const Restaurant = require('./Restaurant');
const {Schema} = mongoose;
const Menu = new Schema ({
    menuType: MenuType,
    description: String,
    dishes: Dish[20],
    restaurant: Restaurant
})

Menu.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.pass;
    return obj;
   }

const MenuType = {
    Breakfast: "Breakfast",
    Lunch : "Lunch",
    Dinner: "Dinner"
}

module.exports = mongoose.model('Menu',Menu)