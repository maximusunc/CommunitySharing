// front end js file
$(function() {
    // var login = function() {
    //     $.ajax("/api/users/:email", {
    //         type: "GET"
    //     }).then(function() {
    //         console.log("Loaded User Page");
    //     });
    // }
    
    // $("#newUser").on("click", function(event) {
    //     console.log("test");
    //     event.preventDefault();
    //     var newUser = {
    //         name: $("#newName").val().trim(),
    //         email: $("#newEmail").val().trim(),
    //         address1: $("#address1").val().trim(),
    //         address2: $("#address2").val().trim(),
    //         city: $("#city").val().trim(),
    //         state: $("#state").val().trim(),
    //         zip: $("#zip").val().trim(),
    //         password: $("#newPassword").val().trim()
    //     };
    //     console.log(newUser);
    //     $.ajax("/api/users", {
    //         type: "POST",
    //         data: newUser
    //     }).then(function() {
    //         console.log("User successfully created");
    //         $.ajax("/api/users/:" + email, {
    //             type: "GET"
    //         }).then(function() {
    //             console.log("Loaded User Page");
    //         });
    //     });
    // });
    
    // Passport.js handles login
    // $("#login").on("click", function(event) {
    //     var email = $("#email").val().trim();
    //     var pswd = $("#password").val().trim();
    //     // validate(email, password);
    //     $.ajax("/api/users/:" + email, {
    //         type: "GET"
    //     }).then(function() {
    //         console.log("Loaded User Page");
    //     });
    // });
    
    // V2 Option
    // $("#updateUser").on("click", function(event) {
    //     //modal pop up
    //     var updateUser; //form submitted
    //     $.ajax("/api/users/:id", {
    //         type: "PUT",
    //         data: updateUser
    //     }).then(function() {
    //         //modal Successfully updated
    //         console.log("Successfully updated");
    //     });
    // });
    
    // $("#deleteUser").on("click", function(event) {
    //     $.ajax("/api/users/:id", {
    //         type: "DELETE"
    //     }).then(function() {
    //         console.log("Successfully deleted");
    //     });
    // });
    
    $("#itemCategory").on("click", function(event) {
        var category = $(this).val();
        $.ajax("/api/items/category/:" + category, {
            type: "GET"
        }).then(function() {
            console.log("Items successfully requested");
        });
    });

    $("#newItem").on("click", function(event) {
        var newItem = {
            name: $("#itemName").val().trim(),
            description: $("#itemDesc").val().trim(),
            category: $("#itemCat").val().trim()
        };
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
    
    $(".deleteItem").on("click", function(event) {
        var id = $(this).attr("id");
        $.ajax("/api/items/" + id, {
            type: "DELETE"
        }).then(function() {
            console.log("Successfully deleted");
            location.reload();
        });
    });

    $(".borrowItem").on("click", function (event) {
        console.log("USER ID: ", User.Id)
        var id = $(this).attr("id");
        $.ajax("/api/items/" + id, {
            type: "PUT"
            data: {
                
            }
        }).then(function () {
            console.log("Successfully borrowed");
            location.reload();
        });
    });
});



