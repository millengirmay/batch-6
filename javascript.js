  var x=10
  var y=20
  var z=30
  sum=x+y+z
  console.log(sum);
  var x=3
  x++
  console.log(x);
  var y=5
  y--
  console.log(y);

  var x=10;
  var y=5;
  z -= y;
  console.log(z);
  let first_name= "million";
  let last_name= "girmay";
  full_name= first_name+ " " + last_name
  console.log(full_name);

  var a= "hi";
  var b= "  bye";
  var c= a+b;
  console.log(c);

  console.log(typeof ("hi"));
  console.log(typeof (52));
  console.log(typeof (4==4));
  console.log(4==5);
  console.log(4==4);
  console.log(4=="4");
  console.log(4==="4");
  console.log(4!==4);
  console.log(4!=="4")

  var myFirstArray=[90, "Abebe", "Adugna", 180000];
  console.log(myFirstArray);
  console.log(myFirstArray[2]);

  var students= ["abebe", "kebede", "almaz", 45, 87, true,];
  console.log(students)
  console.log(students[2]);

  var fruits= ["apple","banana","mango","orange","banana"];
  console.log(fruits);
  console.log(fruits[2]);
  console.log(fruits[4])
  fruits[2]="grapes";
  console.log(fruits);
  fruits[3]="kuwi";
  console.log(fruits);
  fruits[1]="peach";
  console.log(fruits);
  console.log(fruits[0]/fruits[2]);

  //Functions and conditional statements

  function add(){
    console.log(13+32);
  }
  add()

  function add(){
    console.log("i'm mili");
  }
  add();

  let addition=function(){
    console.log("hi from addition function");
    console.log(10+7);
  }
  addition();

  function kebede(x){
    console.log(x);
    console.log("hi there");
  }
  kebede(9);
function addtwonumbers(a, b){
  console.log(a+b);
}
 addtwonumbers(12,8);

 function laptopPriceCalculator(laptopName, price, discount){
  let tax= (price*6)/100;
  let total= price-discount+tax;
  console.log(laptopName+" laptop price is $"+total);
 }

laptopPriceCalculator("HP", 1000, 50)
laptopPriceCalculator()

function adder(x,y){
  return x+y;

}

function average(w, t){
  let result=adder(w,t)/2
  return result;
}
console.log(average(100,20));

//function scope

function myCar (){
  var x= "toyota";
  var y= "honda";
  var z= "tesla";

  console.log(x);
  console.log(y);
  console.log(z);
}
myCar();

//Algorithm

function footballPoints(a,b,c){
  if(isNaN(a) || isNaN(b) || isNaN(c)){
    return "please provide numerical values!"
  } else if (a<0 || b<0 || c<0){
    return "please provide positive numbers only!";
  }else {
    let winPoints = a*3;
    let drawPOints = b*1;
    let lossPoints = c*0;

    let total=winPoints + drawPOints + lossPoints;
    return total;
  }
}
console.log(footballPoints(4, 2, 3));

//decission loop
//practice exercise(introduction to programing basics)
//question1:






















































