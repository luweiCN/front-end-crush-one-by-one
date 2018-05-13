function celebrityIDCreator(theCelebrities) {
  var i;
  var uniqueID = 100;
  for (i = 0; i < theCelebrities.length; i++) {
    theCelebrities[i]['id'] = function (j) {
      return function() {
        return uniqueID + j;
      } ();
    } (i);
  }

  return theCelebrities;
}

var actionCelebs = [
  {name:"Stallone", id:0},
  {name:"Cruise", id:0},
  {name:"Willis", id:0}
];

var createIdForActionsCelebs = celebrityIDCreator(actionCelebs);
var stalloneID = createIdForActionsCelebs[0];

console.log(stalloneID.id);

var getNum;//------------------------1
function getCounter() { // ----------2
    var n = 1; 
    var inner = function () { return n++; }
    return inner;
}
getNum = getCounter();//------------3
console.log(getNum()); //1 ---------4
console.log(getNum()); //2


function fun(n,o) {
  console.log(o)
  return {
    fun:function(m){
      return fun(m,n);
    }
  };
}
var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);//undefined,?,?,?
var b = fun(0).fun(1).fun(2).fun(3);//undefined,?,?,?
var c = fun(0).fun(1);  c.fun(2);  c.fun(3);//undefined,?,?,?
