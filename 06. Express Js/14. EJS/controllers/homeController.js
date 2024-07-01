const homeController = (req, res) => {
  const data = {
    name: "Ayush",
    userId: 3,
  };
  res.render("index", data);
};

export { homeController };
