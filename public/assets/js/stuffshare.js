// front end js file
$(function() {

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

    $(".deleteItem").on("click", function(event) {
        var id = $(this).attr("id");
        $.ajax("/api/items/" + id, {
            type: "DELETE"
        }).then(function() {
            console.log("Successfully deleted");
            location.reload();
        });
    });

    $(".returnItem").on("click", function(event) {
        var id = $(this).attr("id");
        var itemId = $(this).data("id");
        $.ajax("/api/items/return/" + id, {
            type: "PUT",
            data: {
                borrowed: false,  
                ItemId: itemId
            }
        }).then(function() {
            console.log("Successfully returned");
            location.reload();
        }); 
    });

    $("#borrowItem").on("click", function(event) {
        var category = $("#borrow").find("option:selected").attr("id");
        if (category !== undefined) {
            $.ajax("/borrow/" + category, {
                type: "GET"
            }).then(function() {
                console.log("Success");
                window.location.replace("/borrow/" + category);
            });
        } else {
            alert("Currently there aren't any items to borrow. Please check back later");
        };
    });

    $(".borrow").on("click", function (event) {
        var id = $(this).attr("id");
        var userId = $(this).data("id");
        var name = $(this).data("name");
        $.ajax("/api/items/" + id, {
            type: "PUT",
            data: {
                borrowed: true,
                UserId: userId,
                name: name
            }
        }).then(function () {
            console.log("Successfully borrowed");
            location.reload();
        });
    });

    $("#goBack").on("click", function(event) {
        window.location.replace("/user");
    });
});

    




