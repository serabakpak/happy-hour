function index(req, res) {
  res.json({
    message: "Welcome to Happy Hour!",
    documentation_url: "https://github.com/serabakpak/happy-hour",
    base_url: "tbd",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;
