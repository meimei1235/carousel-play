var images = document.querySelector(".images");
var lines = document.querySelector(".lines").querySelectorAll("a");
var lists = images.querySelectorAll("li");
var listsClass = [];

lists.forEach(item => {
    listsClass.push(item.className);
    console.log(item.className);
});

var len = listsClass.length;
var index = 0;
lines[index].style.backgroundColor = "red";

function changeColor() {
    for (var i = 0, num = lines.length; i < num; i++) {
        lines[i].style.backgroundColor = "#fff";
    }
    lines[index].style.backgroundColor = "red";
}

//        向后轮播
function next() {
    listsClass.unshift(listsClass[len-1]);
    listsClass.pop();
    for(var i =0; i<len; i++) {
        lists[i].className = listsClass[i];
    }
    index++;
    if (index > len-1) {
        index = 0;
    }
    changeColor();

}

//        向前轮播
function prev() {
    listsClass.push(listsClass[0]);
    listsClass.shift();
    for (var i = 0; i < len; i++) {
        lists[i].className = listsClass[i];
    }
    index--;
    if(index < 0) {
        index = len-1;
    }
    changeColor();

}

setInterval(next, 1000);

