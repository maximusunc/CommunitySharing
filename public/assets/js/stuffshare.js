// front end js file

var login = function() {
    $.ajax("/api/users/:id", {
        type: "GET"
    }).then(function() {
        console.log("Loaded User Page");
    });
}

$("#newUser").on("click", function(event) {
    event.preventDefault();
    var newUser; //form submitted
    $.ajax("/api/users", {
        type: "POST",
        data: newUser
    }).then(function() {
        console.log("User successfully created");
        login();
    });
});

$("#login").on("click", function(event) {
    login();
});

$("#update").on("click", function(event) {
    //modal pop up
    var updateUser; //form submitted
    $.ajax("/api/users/:id", {
        type: "PUT"
        data: updateUser
    }).then(function() {
        //modal Successfully updated
        console.log("Successfully updated");
    });
});

$("#delete").on("click", function(event) {
    $.ajax("/api/users/:id", {
        type: "DELETE"
    }).then(function() {
        console.log("Successfully deleted");
    });
});

$("#category").on("click", function(event) {
    var category = $(this).val();
    $.ajax("/api/items/category/:" + category, {
        type: "GET"
    }).then(function() {
        console.log("Items successfully requested");
    });
});

$("#createItem").on("click", function(event) {
    var newItem; //form submitted
    $.ajax("/api/items", {
        type: "POST",
        data: newItem
    }).then(function() {
        console.log("Successfully created item");
        //reload page on backend.
    });
});

$("#updateItem").on("click", function(event) {
    //maybe we don't allow update yet.
});

$("#deleteItem").on("click", function(event) {
    var id = $(this).attr("id");
    $.ajax("/api/items/:" + id, {
        type: "DELETE"
    }).then(function() {
        console.log("Successfully deleted");
        //reload page on backend.
    });
});


