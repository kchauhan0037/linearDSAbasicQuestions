
console.log("***************************Linnear Data Structure Basic programing Questions************************************")

// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

// var arr = [1, 2, 4, 5, 2, 6, 8, 8, 10, 10, 2];
// var k = 8;
// var rslt = [];
// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr.length; j++) {     
//     if (arr[i] + arr[j] === k) {
//       rslt.push([arr[i], arr[j]]);
//     }
//   }
// }
// console.log(rslt)






/////////////////////////////////////////////////////////////////////////////////////





// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

// var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,30]

// for(var i=2;i<=arr.length;i++){                        

//   arr.push(...arr.splice(arr.length-i,1))
// }

//  console.log(arr)






 /////////////////////////////////////////////////////////////////////////////////////







//  Q3. Write a program to check if two strings are a rotation of each other?

// function areRotations(str1, str2) {
//     if (str1.length !== str2.length) {
//       return false;
//     }
  
//     const concatenatedStr = str1 + str1;
  
//     if (concatenatedStr.includes(str2)) {
//       return true;
//     }
  
//     return false;
//   }
  
//   const str1 = "abcd";
//   const str2 = "bcda";
//   if (areRotations(str1, str2)) {
//     console.log("Strings are rotations of each other");
//   } else {
//     console.log("Strings are not rotations of each other");
//   }
  
//   const str3 = "hello";
//   const str4 = "world";
//   if (areRotations(str3, str4)) {
//     console.log("Strings are rotations of each other");
//   } else {
//     console.log("Strings are not rotations of each other");
//   }
  





/////////////////////////////////////////////////////////////////////////////////






// Q4. Write a program to print the first non-repeated character from a string?

// function firststring(str){
//       for(var i=0;i<str.length;i++){
//         if(str.indexOf(str.charAt(i))===str.lastIndexOf(str.charAt(i))){
//                return (str.charAt(i))
//         }
//            }
    
//            return -1
//     }
      
//     firststring('leetcode')







///////////////////////////////////////////////////////////////////////////////////////







// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

// function towerofhanoi(n, src, aux, dest) {
//       if (n === 1) {
//         console.log(`${src} -> ${dest}`);
//       } else {
//         towerofhanoi(n - 1, src, dest, aux); 
//         console.log(`${src} -> ${dest}`);
//         towerofhanoi(n - 1, aux, src, dest); 
//       }
//     }
    
//     towerofhanoi(5, 'A', 'B', 'C');







///////////////////////////////////////////////////////////////////////////////////////







// Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

// var postfx='35+62*+'

// var stack=[]
// for(var i=0;i<postfx.length;i++){

// if(postfx.charAt(i)!='*' && postfx.charAt(i)!='/'&& postfx.charAt(i)!='+'&& postfx.charAt(i)!='-'&& postfx.charAt(i)!='^' )
// {
// stack.push(postfx.charAt(i))
// console.log(stack)
// }else{
//   var oprnd1=stack.pop()
//   var oprnd2=stack.pop()

//   var comb=postfx.charAt(i)+oprnd2+oprnd1

//   stack.push(comb)
// }

// }

// console.log(stack.pop())







//////////////////////////////////////////////////////////////////////////////////







// Q7. Write a program to convert prefix expression to infix expression.

// var prefix='+26*253' 

// var stack=[]

// for(var i=prefix.length-1;i>=0;i--){
//   // console.log(i)
//   if(prefix.charAt(i)=='-' || prefix.charAt(i)=='+' || prefix.charAt(i)=='/' || prefix.charAt(i)=='*' || prefix.charAt(i)=='^' ){
//     var val1=stack.pop()
//     var val2=stack.pop()

//     var comb=val1+prefix.charAt(i)+val2
//     stack.push(comb)
//     console.log(stack)
//   }else{
//     stack.push(prefix.charAt(i))
//   }

// }
// console.log(stack)







///////////////////////////////////////////////////////////////////////////////////







// Q8. Write a program to check if all the brackets are closed in a given code snippet.

//  var stack=[]
//  var expression="{([([])])}}"
//  for(var i=0;i<expression.length;i++){

//   if(expression.charAt(i)=='{' || expression.charAt(i)=='(' || expression.charAt(i)=='['  ){
//     stack.push(expression.charAt(i))
//   }else{
//     if(stack.length==0){

//       console.log('not balanced')
//       break;
//    }else{
//     var popitem=stack.pop()
//     if(popitem=='{' && expression.charAt(i)=='}' || 
//        popitem=='(' && expression.charAt(i)==')' || 
//        popitem=='[' && expression.charAt(i)==']'){
//       // console.log('balanced')
//     }else{
//       console.log('not balanced')
//       break;
//     }
//    }
//   }
  
//   if(i==(expression.length-1)){
//     if(stack.length==0){
//       console.log('balanced')
//     }else{
//       console.log('not balanced')
//     }
//   }

//  }






///////////////////////////////////////////////////////////////////////






// Q9. Write a program to reverse a stack.

// class Stack{
//   constructor(){
//     this.items=[]
//     this.length=0


//     this.insert=function(item){
//       this.items[this.length]=item
//       this.length++
//     }


//     this.pop=function(){
//       if(this.length===0){
//         return undefined;
//       }
//       this.length-- 
//       return this.items.pop()
//     }



//     this.reverse=function(){

//       var reverse=[]
//       while(this.length>0){
//         reverse.push(this.pop())
//       }
//       return reverse
//     }


//   }

  
// }

// var stack= new Stack()

// stack.insert(2)
// stack.insert(4)
// stack.insert(2)
// stack.insert(5)
// stack.insert(8)

// console.log(stack.items)
// console.log(stack.reverse())






//////////////////////////////////////////////////////////////////////////////







// Q10. Write a program to find the smallest number using a stack.

// smallestNumber([3,2,5,7,1,5,9,3,0])
// function smallestNumber(arr){
//   var stack=[]
//   var smallval=arr[0]
// stack.push(smallval)
// arr.map(function(item){
//   if(item<=smallval){
//     smallval=item
//     stack.pop()
//     stack.push(smallval)
//      }
// })
// return stack
// }


///////////////////////////////////////////////////////////////////////////




