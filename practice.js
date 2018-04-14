var array1 = [];
var array2 = [4,7];
var array3 = [3,5,7];

function whichWillI() {
  return array1.length || array2.length || array3.length;
}

console.log(whichWillI())
