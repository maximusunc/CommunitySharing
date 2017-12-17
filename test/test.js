var expect = require("chai").expect;
var Nightmare = require("nightmare");
var nightmare = Nightmare({ show: true });

describe("Home Page", function() {
    // it("should go to the login page", function() {
    //     nightmare
    //     .goto("http://localhost:8080")
    //     .wait("h1")
    //     .evaluate(function() {
    //         return document.querySelector("h1").innerText;
    //     })
    //     .end()
    //     .then(function(result) {
    //         console.log(result);
    //         expect(result).to.equal("Welcome To StuffShare!");
    //     })
    //     .catch(function(error) {
    //         console.log("Search 1 failed: " + error);
    //     });
    // });
    
    // it("should view items of a user", function() {
    //     nightmare
    //     .goto("localhost:8080")
    //     .type("#username", "John Doe")
    //     .type("#email", "test@123.com")
    //     .click("#login")
    //     .click("#viewItems")
    //     .evaluate(function() {
    //         return document.querySelector("h1");
    //     })
    //     .then(function(result) {
    //         expect(result).to.equal("Items");
    //         done();
    //     });
    // });
    // it("should view available items for borrow", function() {
    //     nightmare
    //     .goto("localhost:8080")
    //     .type("#username", "John Doe")
    //     .type("#email", "test@123.com")
    //     .click("#login")
    //     .click("#categories")
    //     .click("#chainsaw")
    //     .evaluate(function() {
    //         return document.querySelector("h1");
    //     })
    //     .then(function(result) {
    //         expect(result).to.equal("Chainsaw");
    //         done();
    //     });
    // });
});
describe("Login", function() {
    it("should login to the user page", function() {
        nightmare
        .goto("http://localhost:8080")
        .type("#email", "rumple@rumple.com")
        .type("#password", "test")
        .click("#login")
        .wait(2000)
        .evaluate(function() {
            return document.querySelector("h1").innerText;
        })
        .end()
        .then(function(result) {
            console.log(result);
            expect(result).to.equal("Rumple");
        })
        .catch(function(error) {
            console.log("Search 2 failed: " + error);
        });
    });
});