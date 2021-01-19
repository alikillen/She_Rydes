import Mongoose from "mongoose";

const reviewSchema = Mongoose.Schema(
  {
    name: { type: String },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: Mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const productOptions = {
  discriminatorKey: "productType", // our discriminator key, could be anything
  collection: "products", // the name of our collection
};

// enum all names to validate? when adding new product will need to edit db for size and color stuff

// note i am setting specific enum values for additional validation. a lot of this needs to be refined after submission though

const productSchema = Mongoose.Schema(
  {
    user: {
      type: Mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      enum: ["Jacket", "Pants", "Gloves", "Accessories"],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    SKU: {
      type: String,
      enum: [
        "OBOF",
        "NRLJ",
        "BBLJ",
        "ITHD",
        "FDD",
        "FTLOG",
        "PANTS",
        "SRPS",
        "BWPS",
        "SSPS",
        "IHPS",
        "RDPS",
        "CCPS",
      ],
      required: true,
    },
  },
  productOptions,
  {
    timestamps: true,
  }
);

// these mongoose discriminators are meant to add extra attributes like size and color to the base products. but we are yet to integrate this with database - even on frontend when an admin user edits a product,
// the size color attributes are not yet added into db which will need some debugging. so the discriminators are here but not really functioning yet as they wont go into db.

const Product = Mongoose.model("Product", productSchema);

const Jacket = Product.discriminator(
  "Jacket",
  new Mongoose.Schema(
    {
      size: {
        type: String,
        enum: ["8", "10", "12", "14", "16"],
        required: true,
      },
      color: {
        type: String,
        enum: ["Pink Sunset", "Camel Back Brown", "Default"],
        required: true,
      },
    },
    productOptions
  )
);

const Pants = Product.discriminator(
  "Pants",
  new Mongoose.Schema(
    {
      size: {
        type: String,
        enum: ["8", "10", "12", "14", "16"],
        required: true,
      },
      color: { type: String, enum: ["Default"], required: true },
    },
    productOptions
  )
);

const Gloves = Product.discriminator(
  "Gloves",
  new Mongoose.Schema(
    {
      size: {
        type: String,
        enum: ["Small", "Medium", "Large"],
        required: true,
      },
      color: { type: String, enum: ["Black", "Brown"], required: true },
    },
    productOptions
  )
);

// need to be either sticker or patch
const Accessories = Product.discriminator(
  "Accessories",
  new Mongoose.Schema(
    {
      size: { type: String, enum: ["Default"], required: false },
      accessorytype: {
        type: String,
        enum: ["Sticker", "Patch"],
        required: true,
      },
    },
    productOptions
  )
);

export default Product;

// do we have to export product options?

// should these be strings - why are we getting mongoose not defined?

export { Jacket };
export { Pants };
export { Gloves };
export { Accessories };


// IGNORE NOTES BELOW - just from testing etc

// const accessoryProduct = productType.discriminator(
//   'accessoryProduct',
//   new mongoose.Schema({
//     availableSizes: {
//       os: { type: Number, required: true, default: 0 },
//     },
//   })
// )

// const sampleJacket = Jacket.discriminator("Jacket", new Mongoose.Schema({ name: 'sample jacket', image: 'jacket', category: 'Jacket', description: 'good jacket', rating: 5, numReviews: 1, price: 100, countInStock: 5, SKU: "sample", size: 12, color:"brown"}));
// // sampleJacket.save();
// console.log(sampleJacket)

// const sampleAcc = new Accessories({ name: 'sample sticker', image: 'sticker', category: 'Accessories', description: 'good sticker', rating: 5, numReviews: 1, price: 10, countInStock: 5, SKU: "sticker00", accessoryType:"Sticker"});
// // sampleJacket.save();
// console.log(sampleAcc)

// module.exports = mongoose.model(Jacket);
// module.exports = mongoose.model(Pants);
// module.exports = mongoose.model(Gloves);
// module.exports = -+-+-+-+-+-+mongoose.model(Accessories)

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
