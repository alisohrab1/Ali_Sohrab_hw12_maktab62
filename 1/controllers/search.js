const Data = require("../data/data.json");
var searchData = [];

function createSearchData(obj) {
  let myobj = {
    id: null,
    data: [],
  };
  myobj["id"] = obj.id;
  myobj["data"].push(...obj.name.toLowerCase().split(" "));
  myobj["data"].push(...obj.engine.toLowerCase().split(" "));
  myobj["data"].push(...obj.speed.toLowerCase().split(" "));
  myobj["data"].push(...obj.acceleration.toLowerCase().split(" "));
  myobj["data"].push(...obj.price.toLowerCase().split(" "));
  searchData.push(myobj);
}

Data.forEach((car) => createSearchData(car));

const search = function (keyword) {
  let keywordArr = keyword.toLowerCase().trim().split(" ");
  let searchResult = [];
  let result = null;
  for (key of keywordArr) {
    result = searchData.filter((car) => car.data.includes(key));
    if (result) {
      result.forEach((r) => searchResult.push(r.id))
    }
  }
  searchResult = [...new Set(searchResult)];
  return searchResult;
};

module.exports = search;

// search();
