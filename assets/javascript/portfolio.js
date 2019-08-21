$(document).on("click",".'item'-div>img", function() {
    console.log("in trending-div>img click event");
    // console.log("you pressed " + $(this).data("movie-id"));
    // console.log("you pressed " + $(this).data("movie-title"));
    manageSessionStorage.setSessionStorage("movieId",$(this).data("movie-id"));
    manageSessionStorage.setSessionStorage("movieTitle",$(this).data("movie-title"));
    // console.log("saved movie id: ", manageSessionStorage.getSessionStorage("movieId"));
    // console.log("saved movie title: ", manageSessionStorage.getSessionStorage("movieTitle"));
    // redirect to the detail page
    redirectToDetailPage();
  });
