var arrayOfNums = [2,4,7,44,3,66,3,4,7,3,32,43];

function getBiggest(array){
  var biggest = 0;

  for(var i = 0; i < array.length; i++){
    if (array[i] > biggest ){
      biggest = array[i];
    } // end of if
  } // end of for

  return biggest;

}

var isbiggest = getBiggest(arrayOfNums);

console.log("the biggest value is: " + isbiggest);


Objects:

var fido = {
  name: "fido",
  weight: 12,
  breed: "mutt",
  likesFetching: true

};
var rainbow = {
  name: "rainbow",
  weight: 16,
  breed: "Beagle",
  likesFetching:true,
  bark: function bark(){
    console.log("woof woof");
  }
}

call with rainbow.bark()


rainbow.show function(){
  console.log(this.name + " is a " + this.weight);
}

var todo = {
  task: "finish homework",
  who: "rabbit",
  done: true,
  isDone: function isDone(){
    return isDone;
  }
  setDone: function setdone(value){
    this.isDone = value;
  }
}
