var hands = ["../assets/images/my-hand.png", "../assets/images/bio-hand.png", "../assets/images/art-hand.png", "../assets/images/medi-hand.png", "../assets/images/robo-hand.png", "../assets/images/icon-hand.png"];
var hand = document.getElementById("hand");
var index = 0;
var timer = null;

window.onload = function () {
    clearInterval(timer);
    timer = setInterval(function () {
        hand.style.backgroundImage = 'url(' + hands[index] + ')';
        index++;
        index %= hands.length;
    }, 500);

    console.log('aaa')
}
