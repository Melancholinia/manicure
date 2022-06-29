var body = document.getElementsByTagName("body")[0];
body.onload = setTimeout(function () {
    let newChat = document.createElement('div');
    newChat.innerHTML = ' <div class="chat d-flex flex-row justify-content-start align-items-start"><div class="avatar"></div ><div class="bubble"><div>' + "你好" + '</div></div></div>';
    let aa = document.getElementById("chatroom");
    aa.innerHTML = aa.innerHTML + newChat.innerHTML;
}, 1000);
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
    newChat.innerHTML = ' <div class="chat d-flex flex-row-reverse justify-content-start align-items-start"><div class="avatar"></div ><div class="bubble"><div>' + $('.input')[0].value + '</div></div></div>';
    let aa = document.getElementById("chatroom");
    aa.innerHTML = aa.innerHTML + newChat.innerHTML;
    let inputCopy = $('.input')[0].value;
    $('.input').val('');
    $('.input')[0].style.height = '50px';
    $('.add')[0].style.display = 'block';
    $('.send-button').attr("disabled", true);
    if (inputCopy.includes("爱")) {
        inputCopy = "不，你不爱";
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
    } else if (inputCopy.includes("他妈")) {
        inputCopy = "去你妈";
    } else if (inputCopy.includes("你好")) {
        inputCopy = "好久不见";
    } else if (inputCopy.includes("？")) {
        inputCopy = "嗷呜";
    } else if (inputCopy.includes("是的")) {
        inputCopy = "不是的";
    } else if (inputCopy.includes("不是的")) {
        inputCopy = "是的";
    } else if (inputCopy.includes("模仿")) {
        inputCopy = "是你在模仿我！";
    } else if (inputCopy.includes("没有")) {
        inputCopy = "有";
    } else if (inputCopy.includes("再骂")) {
        inputCopy = "不想骂";
    } else if (inputCopy.includes("嗯嗯")) {
        inputCopy = "是什么事情呢？";
    } else if (inputCopy.includes("确实")) {
        inputCopy = "然而？";
    } else if (inputCopy.includes("为什么")) {
        inputCopy = "我也不知道";
    } else if (inputCopy.includes("但是")) {
        inputCopy = "...所以?";
    } else if (inputCopy.includes("高兴")) {
        inputCopy = "是的";
    }

    setTimeout(function () {
        let newChat = document.createElement('div');
        newChat.innerHTML = ' <div class="chat d-flex flex-row justify-content-start align-items-start"><div class="avatar"></div ><div class="bubble"><div>' + inputCopy + '</div></div></div>';
        let aa = document.getElementById("chatroom");
        if (Math.random() > 0.4)
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