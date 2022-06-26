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
        // $('.slider2').removeAttr('disabled');
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

$('.slider').on('input propertychange', function (inevent) {
    $('#choice').addClass('active');
    $('.slider2').removeAttr('disabled');
    $('#confirm').addClass('active');
    $('#option-1').attr("disabled", true);
    $('#option-2').attr("disabled", true);
    $('.slider').addClass('active');
    let value = $('.slider')[0].value;
    document.documentElement.style.setProperty('--slider1', value);
})

$('.slider2').on('input propertychange', function (inevent) {
    $('#choice').attr('active', true);
    $('.slider2').addClass('active');
    $('#confirm').attr("disabled", true);
    $('#love').attr("disabled", false);
    let value = $('.slider2')[0].value;
    document.documentElement.style.setProperty('--slider2', value);
    $('#option-2').style.setProperty('--slider2', value);
})

$('#love').on('click', function (inevent) {
    $('#love').attr("disabled", true);
    $('#choice').addClass('disabled');
    // $('#choice').removeClass('active');
    $('#loveislove').attr("disabled", false);
})
// var timer = null;
// timer = setInterval(function () {
//     $('.slider2').
// }, 1000);
