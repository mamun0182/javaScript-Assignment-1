var id = [3, 6, 7, 3, 2, 8, 1, 9, 11, 56];
var updateId = [];

for (var i = 0; i < id.length; i++) {
  var element = id[i];
  var index = updateId.indexOf(element);
  if (index == -1) {
    updateId.push(element);
  }
}
console.log(updateId);
