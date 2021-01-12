import Mongoose from "mongoose"

const reviewSchema = Mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: Mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

  const productOptions = {
    discriminatorKey: 'productType', // our discriminator key, could be anything
    collection: 'products', // the name of our collection
  };


const productSchema = Mongoose.Schema({
  user: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false,
  },
  category:{
    type: String,
    enum: ["Jacket", "Pants", "Gloves", "Sticker", "Patch", "Accessories"],
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0
  },
  SKU: {
    type: String,
    required: true,
  }
}, productOptions,
{
  timestamps: true
})

const Product = Mongoose.model("Product", productSchema)

const Jacket = Product.discriminator('Jacket', new Mongoose.Schema({
  size: { type: Number, required: true },
  color: { type: String, required: true },
}, productOptions),
);

const Pants = Product.discriminator('Pants', new Mongoose.Schema({
  size: { type: Number, required: true },
  color: { type: String, required: true },
}, productOptions),
);

const Gloves = Product.discriminator('Gloves', new Mongoose.Schema({
  size: { type: String, required: true },
  color: { type: String, required: true },
}, productOptions),
);

const Accessories = Product.discriminator("Accessories", new Mongoose.Schema({
  size: { type: String, required: false }
}, productOptions))




export default Product

// do we have to export product options?

// should these be strings - why are we getting mongoose not defined?

export { Jacket }
export { Pants }
export { Gloves }
export { Accessories }
// module.exports = mongoose.model(Jacket);
// module.exports = mongoose.model(Pants);
// module.exports = mongoose.model(Gloves);
// module.exports = mongoose.model(Accessories)

// maybe dont use discriminators - basically every product needs options for size, only gloves and 1 jacket need color options, lara wants different codes anyway

// HOW = want to have both colours of outback outfitter displayed, then still get an option to choose color at product screen. (pictures changing)
// want to have both gloves listed and still option to choose on product screen, pictures changing
// HOW - to list different COLOR VARIATIONS of a product on product page (atm its listing by product id so different products per color is good - since its only 1 jacket and gloves we can refactor later)
// onclick colorHandler would set it to a diff product or redirect??
// lara has listed different SKUs for different colors indicating different colors are different ID's
// want to have option of sizing for stickers available in future (hence not required rn, default them, default colors for stickers too)
// size for jackets pants gloves is required though - make accessories default size?? or make a seperate schema only for accessories?? meed to specify size, sticker or patch (boolean tf, required true)

// advantages of discriminators - futureproofs, more options, code more dry
// disadvantages = lara product codes (set dynamically in model?), time, difficulty
// error handling for stock??

// //this is the queries for a create function with mongoose
// const testproducts = [
//   { name: 'Test' },
//   { productType: 'Jacket', size: 16, color: "red"  },
//   { productType: 'Gloves', size: "Medium", color: "blue" }
// ];

// //this is like a test script to create some instances
// //of the model and discriminators
// Product.create(testproducts, function(error, testproducts) {
//   assert.ifError(error);
//   assert.ok(testproducts[0] instanceof Product);
//   assert.ok(testproducts[1] instanceof Jacket);
//   assert.equal(testproducts[1].size, 16);
//   assert.ok(testproducts[2] instanceof Gloves);
//   assert.equal(testproducts[2].color, "blue");
// });