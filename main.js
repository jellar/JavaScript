function makePassword(str) {
  let pass = [];
  str
    .split(" ")
    .forEach(el => (pass += el.slice(0, 1)));
  return pass
    .replace(/i|I/g, 1)
    .replace(/o|O/g, 0)
    .replace(/s|S/g, 5);
}

console.log(makePassword("Hello Rajesh Jella welcome"));

const MY_OBJECT = {
  key: "value"
};
MY_OBJECT.key = "other value";
console.log(MY_OBJECT.key);

var myArray = new Array("1", "2");
myArray.unshift("1", "3");
myArray.shift();

var foo = 1;
var bar = (function () {
  delete foo;
  return foo;
})();

console.log(false && "Cat");
