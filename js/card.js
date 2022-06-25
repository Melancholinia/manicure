$('.card').on('click', function (inevent) {
    let card = $(inevent.currentTarget)

    if (!($(card).hasClass('active'))) {
        let card_offset_scrollTop = $(card).offset().top - $(window).scrollTop() - 80;
        let card_offset_left = $(card).offset().left - $(window).width() / 2 + $(card).width() / 2;

        $(card).css('--data-offset-top', card_offset_scrollTop * -1 + 'px');
        $(card).css('--data-offset-left', card_offset_left * -1 + 'px');
        $(card).toggleClass('active');

        $('#shadow-layer').css('opacity', '0.3')
        $('#shadow-layer').css('z-index', '100')
    }
    $(document).bind('click', function (outevent) {
        let target = $(outevent.target)
        if ($(target).closest(card).length == 0 && $(card).hasClass('active')) {
            $(card).toggleClass('active');
            $('#shadow-layer').css('opacity', '0')
            $('#shadow-layer').css('z-index', '-1')
        }
    })
})

$('.card-like').on('click', function (inevent) {
    let like_button = $(inevent.currentTarget)
    $(like_button).toggleClass('active');
})

$('.add').on('click', function (e) {
    let number = $(e.currentTarget).prev();
    let temp = number.text();
    temp++;
    number.text(temp);
    let total = $(e.currentTarget).parent();
    total = total.next();
    temp = temp * 2000;
    if (temp >= 0) {
        total.text("总价 ¥" + temp.toLocaleString('en-US'))
    } else {
        temp = -temp;
        total.text("给你打钱 ¥" + temp.toLocaleString('en-US'))
    }
})

$('.reduce').on('click', function (e) {
    let number = $(e.currentTarget).next();
    let temp = number.text();
    temp--;
    number.text(temp);
    let total = $(e.currentTarget).parent();
    total = total.next();
    temp = temp * 2000;
    if (temp >= 0) {
        total.text("总价 ¥" + temp.toLocaleString('en-US'))
    } else {
        temp = -temp;
        total.text("给你打钱 ¥ " + temp.toLocaleString('en-US'))
    }
})

