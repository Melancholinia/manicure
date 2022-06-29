$('.input')[0].addEventListener('input', function () {

    this.style.height = this.scrollHeight + 'px';

    if (this.value.length == 0) {
        $('.add')[0].style.display = 'block';
        $('.send-button').attr("disabled", true);
    } else {
        $('.add')[0].style.display = 'none';
        $('.send-button').removeAttr('disabled');
    }
}, false);

$(".send-button").on('click', function (e) {
    send();
})

function send() {
    let newChat = document.createElement('div');
    newChat.innerHTML = ' <div class="chat d-flex flex-row-reverse justify-content-start align-items-start"><div class="avatar">头像</div ><div class="bubble"><div>' + $('.input')[0].value + '</div></div></div>';
    let aa = document.getElementById("chatroom");
    aa.innerHTML = aa.innerHTML + newChat.innerHTML;
    let inputCopy = $('.input')[0].value;
    $('.input').val('');
    $('.input')[0].style.height = '50px';
    $('.add')[0].style.display = 'block';
    $('.send-button').attr("disabled", true);
    if (inputCopy.includes("爱")) {
        inputCopy = "我不爱你";
    } else if (inputCopy.includes("死")) {
        inputCopy = "会有那么一天";
    } else if (inputCopy.includes("孤独")) {
        inputCopy = "我爱你";
    } else if (inputCopy.includes("真的")) {
        inputCopy = "假的";
    } else if (inputCopy.includes("假的")) {
        inputCopy = "真的";
    } else if (inputCopy.includes("玩笑")) {
        inputCopy = "我认真的";
    } else if (inputCopy.includes("金毛")) {
        inputCopy = "我不是金毛";
    }
    setTimeout(function () {
        let newChat = document.createElement('div');
        newChat.innerHTML = ' <div class="chat d-flex flex-row justify-content-start align-items-start"><div class="avatar">头像</div ><div class="bubble"><div>' + inputCopy + '</div></div></div>';
        let aa = document.getElementById("chatroom");
        aa.innerHTML = aa.innerHTML + newChat.innerHTML;
    }, 1000);
}
document.onkeydown = function (e) {
    var eve = e || window.event;
    if (e.keyCode == 13 && e.ctrlKey) {
        // 这里实现换行 
        e.preventDefault();
        $('.input').value += "\n";
    } else if (e.keyCode == 13) {
        e.preventDefault();
        send();
    }
};