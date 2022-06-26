var hands = ["../assets/images/my-hand.png", "../assets/images/bio-hand.png", "../assets/images/art-hand.png", "../assets/images/medi-hand.png", "../assets/images/robo-hand.png", "../assets/images/icon-hand.png"];
var hand = document.getElementById("hand");
var body = document.getElementsByTagName("body")[0];
var index = 0;
var timer = null;

body.onload = function () {
    clearInterval(timer);
    timer = setInterval(function () {
        hand.children[(index - 1 + hands.length) % hands.length].classList.add('d-none');
        hand.children[index].classList.remove('d-none');
        index++;
        index %= hands.length;
    }, 1000);
};