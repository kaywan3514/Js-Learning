// یه عدد که زوج یا فرد  تمرین اول ::

// var a =17;
// if (a % 2 === 0) {
//   console.log('عدد زوج است ');
// } else if ( a % 2 === 1) {
//   console.log('عدد فرد است');
// }
// else{
//     console.log("Not Number")
// }
// var number_1 = 11;
// if (number_1 % 2 === 0) {
//   console.log('Even');
// } else {
//   console.log('Odd');
// }

// تمرین دوم : سبد خرید با 3محصول مجموع قیمت بیش از 100 بود یه تخفیفی بده:
// var cart = [
//   {
//     name: 'iphone17pro',
//     price: 50, // 50
//     color: 'blue',
//   },
//   {
//     name: 'laptop_acer',
//     price: 30, // 30
//     color: 'gray',
//   },
//   {
//     name: 'keybord',
//     price: 19.9, //20
//     color: 'white',
//   },
// ];
// var aveRage=cart[0].price + cart[1].price + cart[2].price ;
// console.log(aveRage);
// console.log(aveRage >= 100 ? "You are eligible for a discount code" : "Not a Discount Code")

// var cart_1 = [
//   { name: 'chips', price: 3 },
//   { name: 'cake', price: 2 },
//   { name: 'ice cream', price: 5 },
// ];
// var sumPrice = cart_1[0].price + cart_1[1].price + cart_1[2].price;
// console.log(sumPrice);
// if (sumPrice >= 10) {
//   console.log('discount');
// } else {
//   console.log('no doscount ');
// }
// تمرین سوم :  با استفاده از سویچ کیس : اگه روز هفته  3 یا 4 هستش
// (عبارت به (زودی آخر هفته) چاپ و 5 یا 6 (آخر هفته) چاپ و در غیر این صورت (در تکاپوی آخر هفته
// var week = 6;
// switch (week) {
//   case 0:
//     console.log('شنبه');
//     break;
//   case 1:
//     console.log('یکشنبه');
//     break;
//   case 2:
//     console.log('دوشنبه');
//     break;
//   case 3:
//   case 4:
//     console.log('!به زودی آخر هفته');
//     break;
//   case 5:
//   case 6:
//     console.log(' آخر هفته ');
//     break;
//     default :
//     console.log("درتکاپوی آخر هفته")
// }


// تمرینات جلسه 16 : به روش کلاس :::
// تمرین اول :
// var max = null;
// var min = null;
// var numbers = [3, 5, 8, 4, 20, -21, 2, 7, 25, 31, 19, 42];
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     if (max === null || numbers[i] > max) {
//       max = numbers[i];
//     }
//   } else {
//     if (min === null || numbers[i] < min) {
//       min = numbers[i];
//     }
//   }
// }
// console.log('MAX : ' + ' ' + max);
// console.log('MIN', min);

// تمرین دوم :: جلسه 16 :
// var count = {
//   5: 2,
//   2: 3,
//   17: 2,
//   20: 1,
// };
// console.log(count[2]);
// count[5] = 10;
// console.log(count)
// var count = 0;
// var count = {};
// var numbers1 = [5, 2, 20, 5, 1, 2, 17, 2, 3, 17 ];
// for (i = 0; i < numbers1.length; i++) {
// if (numbers1[i] === 17) {
//   console.log(numbers1[i]);
//   count++;
// }

// if (count[numbers1[i]]) {
// count[numbers1[i]] += 1;
// count[numbers1[i]] = count[numbers1[i]] +1 ;

// } else {
// count[numbers1[i]] = 1;
// }
// }
// console.log(count);



