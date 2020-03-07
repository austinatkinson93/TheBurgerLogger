$(() => {
    $(".devour-button").on("click", function (event) {
        let id = $(this).data("id");
        console.log('id: ', id);

        $.ajax(`api/burgers/${id}`, {
            type: "PUT"
        }).then(() => {
            console.log("devoured burger");
            // Reload the page to get the updated list
            location.reload();
        });
    });

    $(".add-burger-form").on("submit", event => {
        event.preventDefault();

        let newBurger = {
            name: $("#burg").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            () => {
                console.log("added new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });




});