// تمرینات جلسه 17 ::::::: 
// تمرین اول ::: 3 ورودی فانکشن کلکیولیت  :
function calculate(num1 , num2 , operation){
switch (operation) {
    case "+":
        return num1 + num2
        break;
    case "-":
        return num1 - num2
        break;
        case "*":
        return num1 * num2
        break;
        case "/":
            if(num2 === 0){
              console.log("!تقسیم بر صفر مجاز نیست")
            }
        return num1 / num2
        break;
    default:
        console.log("عملگر معتبر نیست")
        break;
}
}
console.log(calculate(4,2,"+"))
console.log(calculate(2,4,"-"))
console.log(calculate(4,2,"*"))
console.log(calculate(8,0,"/"))
console.log(calculate(7,8,"$"))

// تمرین 2 : آبجکت استودنت  ::
var students = [
  { name: 'ali', score: [2, 18, 14, 15] },
  { name: 'reza', score: [17, 19, 7, 13] },
  { name: 'farzane', score: [20, 9, 16, 12] },
];
// به دست اوردن میانگین دانش آموزان با فانکشن
function averageStudent(students) {
  var sumAve = 0;
  for (var i = 0; i < students.score.length; i++) {
    sumAve = sumAve + students.score[i];
  }
  return sumAve / students.score.length;
}
console.log(averageStudent(students[0]));
console.log(averageStudent(students[2]));

// فانکشن بهترین دانش آموز
function getBestStudent(stud) {
  var best = 0;
  var topAverage = averageStudent(stud[0]);

  for (var i = 1; i < stud.length; i++) {
    var cuurentAve=averageStudent(stud[i]);
    if (cuurentAve > topAverage) {
      topAverage = cuurentAve;
      best = i;
    }
  }
  return {
    name: students[best].name,
    averageStudent: topAverage.toFixed(2),
  };
}

// نمایش میانگین هر کاربر
for (var i = 0; i < students.length; i++) {
  console.log(
    `${students[i].name} : میانگین =  ${averageStudent(students[i]).toFixed(2)}`,
  );
}

// پیدا کردن و نمایش بهترین دانش آموز 

var bestStu = getBestStudent(students);
console.log(`بهترین دانش آموز : ${bestStu.name}  با میانگین  ${bestStu.averageStudent} `)
