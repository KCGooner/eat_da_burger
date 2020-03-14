$(function() {

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newIdea = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newIdea
        }).then(function() {
            console.log("Added new burger");
            location.reload();
        });
    });

    $(".eatburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var foodGone = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: foodGone
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        });
    });

    $(".trashburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });

})