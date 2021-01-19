// welcome to the testing graveyard - nothing in here works cause we ran out of time and had a lot of bugs trying to setup jest, then moved to mocha. 
// could have got them working if we had more time/less bugs
// sorry!



import app from "../backend/server.js";
import chai from "chai";
import chaiHttp from "chai-http";

const agent = chai.request.agent(app);

const productRoute = "/api/products";

// chai modules in {}

// const app = require("../backend/server");
// const chai = require("chai");
// const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);

describe("Server works!", () => {
  it("confirms api is running", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        // expect(res.body.status).to.equals("API is running....");
        // expect(res.body.message).to.equals("API is running....");
        expect(res.send).to.be.a(string);
        done();
      });
  });
  //   it("adds 2 numbers", (done) => {
  //     chai
  //       .request(app)
  //       .post("/add")
  //       .send({ num1: 5, num2: 5 })
  //       .end((err, res) => {
  //         expect(res).to.have.status(200);
  //         expect(res.body.status).to.equals("success");
  //         expect(res.body.result).to.equals(10);
  //         done();
  //       });
  //   });
});

// describe("Server works!", () => {
//   it("confirms api is running", (done) => {
//     chai
//       .request(app)
//       .get("/")
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         // expect(res.body.status).to.equals("API is running....");
//         // expect(res.body.message).to.equals("API is running....");
//         expect(res.send).to.be.a("API is running....");
//         done();
//       });
//   });
//
// });

describe('Product routes', () => {

  // GET all products
  it('should get all products from db', (done) => {
    agent.get(`${productRoute}/`)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.be.an('array');
        expect(res).to.have.status(200);
        done();
      });
  });


// describe("Products", () => {
//   describe("GET /api/products", () => {


//   it("should get all products from db", (done) => {
//     chai
//     .get(`${productRoute}/`)
//     .end((err, res) => {
//       expect(err).to.be.null;
//       expect(res.body).to.be.an("array");
//       expect(res).to.have.status(200);
//       done();
//     });
//   });


    // // Test to get all products
    // it("should get all products in DB", (done) => {
    //   chai
    //     .request(app)
    //     .get("/")
    //     .end((err, res) => {
    //       res.should.have.status(200);
    //       res.body.should.be.a("object");
    //       done();
    //     });
    // });


    // Test to get a single product
    it("should get a single product", (done) => {
      const id = "600274be7739d904cfedda8a";
      chai
        .request(app)
        .get(`/api/products/${id}`)
        .end((err, res) => {
          // res.should.have.status(200);
          res.body.should.be.a({
            rating: 0,
            numReviews: 0,
            price: 189.95,
            countInStock: 10,
            _id: "600274be7739d904cfedda8a",
            name: "Outback Outfitter",
            image: "/images/Jackets/outback-outfitter-tan-front.jpg",
            description:
              "The genuine leather Outback Outfitter collection comes in pink sunset and camel back brown offering a shapely fit to show off your silhouette while you ride the streets, or the outback. Chest and waist pockets have good width for storing keys and small wallets. Ventilation pockets allow for a cooler ride but can be zipped up for protection in wind and rain. All jackets come with CE level 1 armour in the shoulders, elbows and back. This armour is removable too so you can look stylish on and off the bike! The outback outfitter is true to size, however, if you wish to layer underneath and use this as your winter choice, we suggest going a size up.",
            category: "Jacket",
            SKU: "OBOF",
            user: "600274be7739d904cfedda87",
            reviews: [],
            __v: 0,
          });
          done();
        });
    });

    // Test to get products by category
    it("should get products by category", (done) => {
      const cat = "Accessories";
      chai
        .request(app)
        .get(`/api/products/category/${cat}`)
        .end((err, res) => {
          // res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
