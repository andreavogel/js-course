var greeting = "Hello, ";
var name = "Dummy";
var doButton = document.querySelector("#do_button");



function sayHello(){
  console.info(greeting+name);
  alert(greeting+name);
}

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    console.info("Hello from wordBlanks");
  var result = "The "+myAdjective+" "+myNoun+" "+myVerb+" "+myAdverb;
    alert(result);
  return result;

}


doButton.onclick = function() {
  console.info("HELLOOO");
  //sayHello();
  wordBlanks("dog", "big", "farted", "loudly");
}
