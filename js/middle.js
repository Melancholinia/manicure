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

$('.slider').on('change', function (inevent) {
    $('.slider2').removeAttr('disabled');
    $('#option-1').removeClass('active');
    $('#option-1').attr("disabled", true);
    $('#option-2').attr("disabled", true);
    $('.slider').attr('active', true);
})