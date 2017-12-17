var expect = require("chai").expect;
var Nightmare = require("nightmare");
var nightmare = Nightmare({ show: true });

describe("Routes", function() {
    it("should go to the login page", function() {
        nightmare
        .goto("http://localhost:8080")
        .wait("h1")
        .evaluate(function() {
            return document.querySelector("h1").innerText;
        })
        .end()
        .then(function(result) {
            console.log(result);
            expect(result).to.equal("Welcome To StuffShare!");
        })
        .catch(function(error) {
            console.log("Search 1 failed: " + error);
        });
    });
    it("should login to the user page", function() {
        new Nightmare({show:true})
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
    it("should view available items for borrow", function() {
        new Nightmare({show:true})
        .goto("http://localhost:8080")
        .type("#email", "rumple@rumple.com")
        .type("#password", "test")
        .click("#login")
        .wait(2000)
        .select([value="Tool"])
        .click("borrowItem")
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
            console.log("Search 3 failed: " + error);
        });
    });
});