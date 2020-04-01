//Exercise: what is an object
var myComputer = {
  operatingSystem: "mac",
  screenSize: "20 inches",
  purchaseYear: "2011"
};
// how to access in to a specific part of the object
myComputer.operatingSystem;
myComputer.purchaseYear;
myComputer.screenSize;
//Relationship between objects and functions
var elisa = {
  name: "Elisa",
  sayName: function() {
    console.log(this.name);
  }
};
