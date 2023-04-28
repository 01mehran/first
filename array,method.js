// function concat(arry1, arry2) {
//     result = []
//     for (let i = 0; i < arry1.length; i++) {
//         result.push(arry1[i])
//     }
//     for (let i = 0; i < arry2.length; i++) {
//         result.push(arry2[i])                               //(Concat)  برای چسباند دو تا آرایه ب هم 
//     }
//     return result
// }

// const arry1 = [1, 2, 3, 4, 5]
// const arry2 = [6, 7, 8, 9, 10]
// let natije = concat(arry1, arry2)
// console.log(natije)
_______________________________________________________________________________________________________________

// function indexOf(arr, target) {
//     result = -1
//     for (let i = 0; i < arr.length; i += 1) {
//         if(arr[i]=== target){
//             result = i
//         }                                                    //(indexOf)برای پیدا کردن شمارنده در آرایه

//     } return result
// }
// const arr = [1, 2, 3, 4, 5 , 6]
// console.log(indexOf(arr ,7))

//______________________________________________________________________________________________________________________
// function push(arr , value){                                               //برای پوش کردن عدد جدید ب آرایه
//     arr[arr.length] = value
// }

// const arr = [1,2,3,5,4]
// push(arr , 6 )
// push(arr  ,7)
// console.log(arr)
//_______________________________________________________________________________________________________

// function Lastindexof( arr, num){
//     let result = [];
//      for(let i = 0 ; i < arr.length ; i++){
//          if(arr[i]=== num){
//              result= i 
//              //break                   به همین کد اضافه میکنیم break رو پیدا کنیم یک  indexOF برای اینکه بخواهیم
//          }
//      }
//      return result
//  }
//  console.log(Lastindexof([1,2,3,3,3,2], 2))
 //_______________________________________________________________________________________________________________
//  function reverse(arr){
//     const result = []
//     let baraksesh = []
//     for(let i =arr.length-1; i> -1 ; i-= 1 ){
//       baraksesh.push(arr[i]);
//     }
//     result.push(baraksesh);
//     return baraksesh 
//   }
//   console.log(reverse([1,2,3,4,5,6]))
//   ___________________________________________________________________________________________________

// function reverse(arr){
//     let arr1 = []
//     for( let i = arr.length -1 ; i > -1  ; i--){
//       arr1.push(arr[i])
//     }
//     return arr1
//   }
//   let M = [1,2,3,4,5,6,7,8,9,10]
//   console.log(reverse(M))
//   _______________________________________________________________________________________________________

// function Lastindexof(arr , num){
//     for( let i = arr.length - 1 ; i > 0 ; i--){
//     if(num == arr[i]){
//       return i
//     }
//     }
//     return -1
//   }
  
//   let find = [ 1,2,3,4,3,2,3,4,2,4]
//   console.log(Lastindexof(find ,'3'))
//   _______________________________________________________________________________________________