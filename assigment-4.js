// 1st Problem--
  //How to math oparetion in a function and return the value..
function mindGame(number){
   let getMultiply = number * 3;
   let sum = getMultiply + 10;
   let divided = sum / 2;
   const subtraction = divided - 5;
   console.log('This the at last operation value: ',subtraction);
}
let num = 6;
 mindGame(num);



// 2nd Problem--
// How to get length of a string and check this number is even or odd with use remainder... 
function evenOdd(string){
    let howCar = string.length;
    const evenodd = howCar % 2;
  if(evenodd == 0){
    console.log('Even');
  }
   
  else if(evenodd == 1){
    console.log('Odd');
  }
  return evenodd;
}
let nam = 'Mohendra Kishor Das';
 evenOdd(nam);




//3rd Problem--
//How to do comparison and some calculation..
 function isLGSeven(number1){
   let subValue = number1 - 7;
   if(subValue < 7){
    return number1;
   }
   else if(subValue >7){
      const newNum = number1 * 2;
      return newNum;
   }
 }
 let num1 = 20;
 let d = isLGSeven(num1);
 console.log(d);



//4th Problem...
let numbers =[22,17,-12,24,16,-20,-18,14,-19,21];

function findingBadData(age){

}
findingBadData(numbers);


