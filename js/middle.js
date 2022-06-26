$('#option-1').on('click', function (inevent) {
    let gender = $(inevent.currentTarget)
    $(gender).toggleClass('active');
    $('#option-2').toggleClass('active');
    if (($('#option-2').hasClass('active'))) {
        $('#option-2').toggleClass('active');
        $('#confirm').removeAttr('disabled');
    }
    if (($('#option-2').hasClass('active')) != ($('#option-1').hasClass('active'))) {
        $('#confirm').addClass('active');
        $('#confirm').removeAttr('disabled');
    } else {
        $('#confirm').removeClass('active');
        $('#confirm').attr("disabled", true);
    }
})

$('#option-2').on('click', function (inevent) {
    let gender = $(inevent.currentTarget)
    $(gender).toggleClass('active');
    if (($('#option-1').hasClass('active'))) {
        $('#option-1').toggleClass('active');
        $('#confirm').removeAttr('disabled');
    }
    if (($('#option-2').hasClass('active')) != ($('#option-1').hasClass('active'))) {
        $('#confirm').addClass('active');
        $('#confirm').removeAttr('disabled');
        // $('.slider2').removeAttr('disabled');
    } else {
        $('#confirm').removeClass('active');
        $('#confirm').attr("disabled", true);
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
var stage = 0;
var tryOut = 0;
$('#confirm').on('click', function (inevent) {
    if (stage == 0 && tryOut == 1) {
        $('.modal-body')[0].innerHTML = "Are we born to be DIVIDED by two?";
    } else if (stage == 0 && tryOut > 1) {
        $('.modal-body')[0].innerHTML = "Think something BETWEEN binary opposition.";
    } else if (stage == 1 && tryOut == 1) {
        $('.modal-body')[0].innerHTML = "Percentage is still a form of binary.";
    }
    else if (stage == 1 && tryOut > 1) {
        $('.modal-body')[0].innerHTML = "Think something BENEATH binary opposition.";
    }
    tryOut = tryOut + 1;
})

$('.slider').on('input propertychange', function (inevent) {
    $('#choice').addClass('active');
    $('.slider2').removeAttr('disabled');
    $('#confirm').addClass('active');
    $('#confirm').removeAttr('disabled');
    $('#option-1').attr("disabled", true);
    $('#option-2').attr("disabled", true);
    $('.slider').addClass('active');
    let value = $('.slider')[0].value;
    document.documentElement.style.setProperty('--slider1', value);
    if (tryOut > 0 && stage == 0)
        $('.modal-body')[0].innerHTML = "<p>Congratulations! You just made a great step!</p><p>But... Is it finished?</p>";
    else if (stage == 0)
        $('.modal-body')[0].innerHTML = "<p>Geez! How could you figure it out at the first try</p><p>A friend of mine? Try the next one!</p>";
    if (stage == 0) {
        stage = 1;
        tryOut = 0;
    }
})

$('.slider2').on('input propertychange', function (inevent) {
    $('#choice').attr('active', true);
    $('.slider2').addClass('active');
    $('#confirm').attr("disabled", true);
    $('#love').attr("disabled", false);
    let value = $('.slider2')[0].value;
    document.documentElement.style.setProperty('--slider2', value);
    $('#option-2').style.setProperty('--slider2', value);
    stage = 2;
    tryOut = 0;
})

$('#love').on('click', function (inevent) {
    $('#love').attr("disabled", true);
    $('#choice').addClass('disabled');
    // $('#choice').removeClass('active');
    $('#loveislove').attr("disabled", false);
    $('#slogan').attr("disabled", false);
})
// var timer = null;
// timer = setInterval(function () {
//     $('.slider2').
// }, 1000);
