import app from "../backend/server.js";
import chai from "chai";
import chaiHttp from "chai-http";

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
        expect(res.body.status).to.equals("API is running...");
        expect(res.body.message).to.equals("Welcome To Testing API");
        done();
      });
  });

  it("adds 2 numbers", (done) => {
    chai
      .request(app)
      .post("/add")
      .send({ num1: 5, num2: 5 })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.result).to.equals(10);
        done();
      });
  });
});
