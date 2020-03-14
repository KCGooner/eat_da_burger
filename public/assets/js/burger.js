$(function() {

    $(".burgerform").on("submit", function(event) {
        event.preventDefault();

        var newIdea = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newIdea
        }).then(function() {
            console.log("New Burger");
            location.reload();
        });
    });

    $(".burgerlist").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var foodGone = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: foodGone
        }).then(function() {
            console.log("Burger Gone!");
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