function index(req, res) {
  res.json({
    message: "Welcome to Happy Hour!",
    documentation_url: "https://github.com/serabakpak/happy-hour",
    base_url: "https://morning-spire-17654.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"},
      {method: "GET", path: "/api/happyHours", description: "Gets all happy hours"},
      {method: "GET", path: "/api/happyHours/:happyHourId", description: "Gets one happy hour"},
      {method: "GET", path: "/api/happyHours/:happyHourId/reviews", description: "Gets reviews for one happy hour"},
      {method: "POST", path: "/api/happyHours/:happyHourId/reviews", description: "Adds new review for one happy hour"},
      {method: "PUT", path: "/api/happyHours/:happyHourId/reviews/:reviewId", description: "Updates a review for one happy hour"},
      {method: "DELETE", path: "/api/happyHours/:happyHourId/reviews/:reviewId", description: "Deletes one review for one happy hour"},
    ]
  });
}

module.exports.index = index;

