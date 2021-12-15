const data = require("../data/data.json");
const {findProduct , findProducts} = require("./findProduct");
const search = require("./search");
var searchedData;

const homePage = (req, res) => {
  let id = req.query.id;
  if (id === "search") {
    console.log("from search");
    return res.render("pages/home" , {cars : searchedData});
  }
  res.render("pages/home", { cars: data });
  // if (id === 'home' || id === undefined){
  // res.render('pages/home');
  // }
};

const product = (req, res) => {
  if (req.params.id === undefined) {
    res.send("you do not have access");
  }
  let car = findProduct(req.params.id)
  res.render("pages/product", {car})
};

const home = (req, res) => {
  let idArr = search(req.body.keyword);
  searchedData = findProducts(idArr);
  console.log(searchedData);
  if(searchedData.length === 0) return res.status(404).send("no search results")
  res.send("search successful");
}

module.exports = { homePage, product , home};
