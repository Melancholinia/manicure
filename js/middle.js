$('#option-1').on('click', function (inevent) {
    let gender = $(inevent.currentTarget)
    $(gender).toggleClass('active');
    $('#option-2').toggleClass('active');
    if (($('#option-2').hasClass('active'))) {
        $('#option-2').toggleClass('active');
    }
    if (($('#option-2').hasClass('active')) != ($('#option-1').hasClass('active'))) {
        $('#confirm').addClass('active');
    } else {
        $('#confirm').removeClass('active');
    }
})

$('#option-2').on('click', function (inevent) {
    let gender = $(inevent.currentTarget)
    $(gender).toggleClass('active');
    if (($('#option-1').hasClass('active'))) {
        $('#option-1').toggleClass('active');
    }
    if (($('#option-2').hasClass('active')) != ($('#option-1').hasClass('active'))) {
        $('#confirm').addClass('active');
        $('.slider2').removeAttr('disabled');
    } else {
        $('#confirm').removeClass('active');
    }
})

$('#option-1').on('hover', function (inevent) {
    let gender = $(inevent.currentTarget)
    $(gender).toggleClass('active');
    $('#option-2').toggleClass('active');
    if (($('#option-2').hasClass('active'))) {
        $('#option-2').toggleClass('active');
    }
})

$('#option-2').on('hover', function (inevent) {
    let gender = $(inevent.currentTarget)
    $(gender).toggleClass('active');
    if (($('#option-1').hasClass('active'))) {
        $('#option-1').toggleClass('active');
    }
})

$('').on('click', function (inevent) {
    let value;
})

console.log($(--slide));

var w = document.documentElement.clientWidth || document.body.clientWidth;
var h = document.documentElement.clientHeight || document.body.clientHeight;
