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



// تمرینات جلسه 16 : تمرین اول :::
// ارایه ای از اعداد داریم .بزرگترین عدد زوج و کوچکترین عدد فرد چاپ شود ::
var array1 = [5, 10, 88, 7, 18, 3, 22,1];
var max = array1[0];
var min = array1[0];
for (i = 0; i < array1.length; i++) {
  if (array1[i] % 2 === 0) {
    console.log(array1[i]);
    max = Math.max(max, array1[i]);
  } else {
    if (array1[i] % 2 === 1) {
      console.log(array1[i]);
      min = Math.min(min, array1[i]);
    }
  }
}
console.log(max);
console.log(min);


// تمرین دوم ::
// ارایه ای از اعداد داریم . هرعدد چندبار تکرار شده است ؟
var array2 = [2, 10, 5, 2, 3, 10];
for (var i = 0; i < array2.length; i++) {
  for (var j = i + 1; j < array2.length; j++) {
    if (array2[i] == array2[j]) {
      console.log(array2[i]);
    }
  }
}
