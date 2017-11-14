module.exports = throttlePromises;

function throttlePromises(limit, arr) {
  var i = 0;
  var resultArray = new Array(arr.length);

  function doNext() {
    if (i < arr.length) {
      var fnIndex = i++;
      var next = arr[fnIndex];
      return Promise.resolve(next())
          .then(result => {  
             resultArray[fnIndex] = result;
             return;
          }).then(doNext);
    }
  }
  var listOfPromises = [];
  while (i < limit && i < arr.length) {
    listOfPromises.push(doNext());
  }
  return Promise.all(listOfPromises).then(() => resultArray);
};