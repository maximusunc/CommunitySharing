var expect = require("chai").expect;
var Nightmare = require("nightmare");
var nightmare = Nightmare({ show: true });

describe("Routes", function() {
    it("should go to the login page", function(done) {
        nightmare
        .goto("localhost:8080/")
        .evaluate(function() {
            return document.title;
        })
        .then(function(result) {
            expect(result).to.equal("Stuffshare");
            done();
        });
    });
    it("should login to the user page", function(done) {
        nightmare
        .goto("localhost:8080")
        .type("#username", "John Doe")
        .type("#email", "test@123.com")
        .click("#login")
        .evaluate(function() {
            return document.querySelector("h1");
        })
        .then(function(result) {
            expect(result).to.equal("John Doe");
            done();
        });
    });
    it("should view items of a user", function(done) {
        nightmare
        .goto("localhost:8080")
        .type("#username", "John Doe")
        .type("#email", "test@123.com")
        .click("#login")
        .click("#viewItems")
        .evaluate(function() {
            return document.querySelector("h1");
        })
        .then(function(result) {
            expect(result).to.equal("Items");
            done();
        });
    });
    it("should view available items for borrow", function(done) {
        nightmare
        .goto("localhost:8080")
        .type("#username", "John Doe")
        .type("#email", "test@123.com")
        .click("#login")
        .click("#categories")
        .click("#chainsaw")
        .evaluate(function() {
            return document.querySelector("h1");
        })
        .then(function(result) {
            expect(result).to.equal("Chainsaw");
            done();
        });
    });
});