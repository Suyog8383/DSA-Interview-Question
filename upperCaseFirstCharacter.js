let str = "hEllo my name is suyog";
function upperCaseFirstLetter(str) {
  let data = str.toLowerCase();
  let spilted = data.split(" ");
  let result = "";
  for (let i = 0; i < spilted.length; i++) {
    result = result + " " + spilted[i][0].toUpperCase() + spilted[i].slice(1);
  }
  return result;
}
console.log(upperCaseFirstLetter(str));
