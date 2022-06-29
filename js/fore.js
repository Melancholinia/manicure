const rows = document.querySelectorAll('ul li');
var scrolled = 4.0;
var startY = 0.0, moveEndY = 0.0;
var timer = null;
var body = document.getElementsByTagName("body")[0];
var windowHeight = $(window).height();
body.style.height = windowHeight;

document.addEventListener('mousewheel', function (e) {
    scrolled += e.wheelDelta / 1000;
    console.log(scrolled);
    for (let [index, row] of rows.entries()) {
        let start = index * 5.0 + 4.0;
        let end = (index + 2) * 5.0;
        let progress = (scrolled - start) / (end - start);
        if (progress >= 1) progress = 1;
        if (progress <= 0) progress = 0;
        row.style.setProperty('--progress', progress);
        row.setAttribute('data-depth', progress);
    }
})

body.onload = function () {
    clearInterval(timer);
    timer = setInterval(function () {
        console.log(scrolled);
    }, 1000);
};

body.on("touchstart", function (e) {
    e.preventDefault();
    startY = e.originalEvent.touches[0].pageY;
    console.log(startY);
})

body.on("touchmove", function (e) {
    e.preventDefault();
    moveEndY = e.originalEvent.touches[0].pageY;
    scrolled += (moveEndY - startY) / 1000;
    console.log(scrolled);
    for (let [index, row] of rows.entries()) {
        let start = index * 5.0;
        let end = (index + 2) * 5.0;
        let progress = (scrolled - start) / (end - start);
        if (progress >= 1) progress = 1;
        if (progress <= 0) progress = 0;
        row.style.setProperty('--progress', progress);
        row.setAttribute('data-depth', progress);
    }
})