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
    $('#option-1').removeClass('active');
    $('#confirm').addClass('active');
    $('#option-1').attr("disabled", true);
    $('#option-2').attr("disabled", true);
    $('.slider').addClass('active');
    var value = $('.slider')[0].value;
})
$('.slider').on('input propertychange', function (inevent) {
    let value = $('.slider')[0].value;
    document.documentElement.style.setProperty('--slider1', value);
    $('.option').style.setProperty('--slider1', value);
    $('#option-2').style.setProperty('--slider1', value);
})
var timer = null;
clearInterval(timer);
timer = setInterval(function () {
    console.log(getComputedStyle(document.documentElement).getPropertyValue('--slider1'));
    // console.log($('.slider').value);
}, 300);