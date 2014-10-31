var greeting = function(message){
  var output = document.querySelector("#answer");
  output.value = message;
  //window.alert(message);

  var output = document.querySelector("#answer");
  var output2 = document.querySelector("#copied-answer")

  output.value = message;
  output2.value = message;
};

var helloWorld = function(event){
  var inputA = document.querySelector("#input-a");
  var inputB = document.querySelector("#input-b");

  var a = Number(inputA.value);
  var b = Number(inputB.value);

  var answer = a + b;





  console.log("helloWorld: start");
  greeting(message);
  console.log("helloWorld: end");
};

var boot = function(event){
  console.log("boot: start");
  var button = document.querySelector("button");
  button.addEventListener("click", helloWorld);
  button.addEventListener("dblclick", helloWorld);
  console.log("boot: end");
};

window.addEventListener("load", boot);
