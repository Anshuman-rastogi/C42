function setup() {
  var num = 10;
  var name = "Anshuman";
  console.log("Hi Ma'am");
  console.log(26);
  console.log(name);
  console.log(name.length);
  console.log(name.toUpperCase());
  console.log(name.toLowerCase());
  console.log(num);
  console.log("8");
  console.log(parseInt("8"));
  console.log(2+3*5);
  console.log(12%5);
  console.log("Anshuman " + "Rastogi");
  console.log("Anshuman " * "Rastogi");
  console.log(12/0);
  console.log(2 === 5);
  if(4 > 5){
    console.log("wrong");
  }
  else {
    console.log("i dont know");
  } 

  var box = 5;
  switch(box){
    
    //break;
    case 5 : console.log("sad");
    case 1 : console.log("happy");
    break;
    default: console.log("no emotion");
    break;
  }

  for(var i = 0; i<=5; i++){
    console.log(i);
  }

  var x = 0;

  while(x <= 5){
    console.log(x);
    x +=1;
  }

  var arr = ["friend1", "friend2", "friend3", "friend4"];
  console.log(arr[2]);

  for(var i in arr){
    console.log(arr[i]);
  }

  arr.push("friend5");
  console.log(arr);
  arr.pop();
  console.log(arr);
  arr[4]=123;
  console.log(arr);
  arr[5]="String";
  console.log(arr);

  function circumference(radius){
    return 2*3.14*radius;
  }

  console.log(circumference(5));

  var paddle = new Object();
  paddle.length = 20;
  paddle.showLengths = function(){
    console.log(paddle.length);
  }
  paddle.showLengths();
  console.log(paddle);
}

function draw() {
 

}