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
    let newChat = document.createElement('div');
    newChat.innerHTML = ' <div class="chat d-flex flex-row-reverse justify-content-start align-items-start"><div class="avatar">头像</div ><div class="bubble"><div>' + $('.input')[0].value + '</div></div></div>';
    let aa = document.getElementById("chatroom");
    aa.innerHTML = aa.innerHTML + newChat.innerHTML;
    $('.input').val('');
    $('.input')[0].style.height = '50px';
    $('.add')[0].style.display = 'block';
    $('.send-button').attr("disabled", true);
})