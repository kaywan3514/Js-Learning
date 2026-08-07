// تمرین اول :
var mylist = document.getElementById('mylist');
var items = document.getElementsByTagName('li');
mylist.setAttribute('class', 'lst');
for (var i = 0; i < items.length; i++) {
  var number = i + 1;
  items[i].innerText = `${'name' + ' ' + i + "0"}`;
  items[i].textContent = number + '.' + items[i].textContent;
  if (number % 2 === 0) {
    items[i].style.color = 'red';
  } else {
    items[i].style.color = 'green';
  }
}

// تمرین دوم ::
var image=document.getElementsByTagName("img");
image[0].src = "./img (1).jpg";
image[0].setAttribute("alt" , "IMAGE1");
image[0].setAttribute("width" , "180px");
image[0].setAttribute("heigth" , "180px");
image[0].style = "border : 1px solid yellow";
image[0].style = "border-radius : 50%";
// تمرین سوم ::
var div1 = document.getElementById('mydiv');
div1.innerHTML =
  "<p> User : erfan </p> <img src = './img (1).jpg ' width = '80px' heigth = '80px'><br><span> age : 25 </span>";
