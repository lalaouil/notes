var merge = function(xs,ys) {
  var arr = [];
  var i = 0;
  var j = 0;

  while(i < xs.length && j < ys.length) {
    if ( xs[i] <= ys[j] ) {
      arr.push(xs[i]);
      i++;
    } else {
      arr.push(ys[j]);
      j++;
    }
  }

  while(i<xs.length) {
    arr.push(xs[i]);
    i++;
  }

  while(j<ys.length) {
    arr.push(ys[j]);
    j++;
  }

  return arr;
};


var mSort = function(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    var left = arr.slice(0, (arr.length)/2);
    var right = arr.slice((arr.length)/2, arr.length);
    return merge(mSort(left), mSort(right));
  }
};

console.log(mSort([3,4,7,1,2,6]));
