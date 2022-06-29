const rows = document.querySelectorAll('ul li');
var scrolled = 0.0;
var timer = null;
var body = document.getElementsByTagName("body")[0];

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