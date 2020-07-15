$(function () {
  $(".devoured").on("click", (event) => {
    event.preventDefault();
    const burgerID = $(this).data("burgerID");
    const newDevState = {
      devoured: burgerID,
    };

    $.ajax("/api/burgers/" + burgerID, {
      type: "PUT",
    }).then(() => {
      console.log("Changed devoured to ", newDevState);

      location.reload();
    });
  });
  $(".create-form").on("submit", (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      burger_name: $("#btn").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
