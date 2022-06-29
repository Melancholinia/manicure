const rows = document.querySelectorAll('ul li');
var scrolled = 10.0;
var startY = 0.0, moveEndY = 0.0;
var timer = null;
var body = document.getElementsByTagName("body")[0];
var windowHeight = $(window).height();
body.style.height = windowHeight;

body.onload = function () {
    scrolled = 1.0;
    for (let [index, row] of rows.entries()) {
        let start = index * 5.0;
        let end = (index + 2) * 5.0;
        let progress = (scrolled - start) / (end - start);
        if (progress >= 1) progress = 1;
        if (progress <= 0) progress = 0;
        row.style.setProperty('--progress', progress);
        row.setAttribute('data-depth', progress);
    }
}
document.addEventListener('mousewheel', function (e) {
    scrolled = scrolled - e.wheelDelta / 1000;
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