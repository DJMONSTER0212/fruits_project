const mongoose = require('mongoose')
// Replace the uri string with your connection string.
const uri = "mongodb+srv://DJ0212:devansh%400212@cluster0.djsnamb.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri)
// const client = new MongoClient(uri , {useNewUrlParser: true});
const fruitSchema = new mongoose.Schema({
  name: String,
  rating : Number,
  review: String
});
// mongoose.set('strictQuery', false);
const Fruit = mongoose.model("Fruit",fruitSchema) // by doing this you have created a new collection known as fruit
const fruit = new Fruit({
  name:"apple",
  rating:10,
  review: "Good fruit"
})
fruit.save(); //this saves our document into Fruits collection inside fruitsDB