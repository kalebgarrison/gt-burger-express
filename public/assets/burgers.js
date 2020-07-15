$(document).ready(function () {
  $(document).on("submit", (event) => {
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

  $(".devoured").on("click", function (event) {
    event.preventDefault();
    const id = $(this).data("id");
    const newDevState = {
      devoured: true,
    };
    console.log(id)

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevState,
    }).then(() => {
      console.log("Changed devoured to ", newDevState);

      location.reload();
    });
  });
});

// $(document).ready(function() {
//   $(document).on("submit", function (event) {
//       event.preventDefault();
//       const newBurger = {
//         burger_name: $("#btn").val().trim(),
//         devoured: 0,
//       };
  
//       $.ajax("/api/burgers", {
//         type: "POST",
//         data: newBurger,
//       }).then(function () {
//         location.reload();
//       });
//     });

//     $(".devoured").on("click", function (event) {
//       event.preventDefault();
//       const id = this.dataset.id;
     
//       $.ajax("/api/burgers/" + id, {
//         type: "PUT",
//         // data: devouredState
//       }).then(
//         function () {
//           location.reload();
//         }
//       );
//     });
// });