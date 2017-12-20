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

    $("#borrowItem").on("click", function(event) {
        var category = $("#borrow").find("option:selected").attr("id");
        $.ajax("/borrow/" + category, {
            type: "GET"
        }).then(function() {
            console.log("Success");
            window.location.replace("/borrow/" + category);
        });
    });

    $(".borrow").on("click", function (event) {
        var id = $(this).attr("id");
        var userId = $(this).data("id");
        $.ajax("/api/items/" + id, {
            type: "PUT",
            data: {
                borrowed: true,
                UserId: userId
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

    




