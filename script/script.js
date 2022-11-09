$(document).ready(function () {
    

    $('.openform').click(function (e) { 
        e.preventDefault();
        $('.shadow-form').addClass('active');
    });

    $('.opacity').click(function (e) {
        e.preventDefault();
        $('.shadow-form').removeClass('active');
    });

    $(window).scroll(function () { 
        const top = $('header').offset().top;
        if (top >= 100) {
            $('header').addClass('shadows');
        } else {
            $('header').removeClass('shadows');
        }
    });

    $('#sendform').click(function (e) { 
        e.preventDefault();
        
        const name = $('#form-name').val();
        const phone = $('#form-phone').val();

        if (name === "") {
            $('.form-error').empty().html("<p class='mb-0'>Заполните поле Имя</p>");
            $('#form-name').addClass('error');
        } else if (phone === "") {
            $('.form-error').empty().html("<p class='mb-0'>Заполните поле Телефон</p>");
            $('#form-phone').addClass('error');
        } else {
            $('.form-error').empty();
            $('#form-name').removeClass('error');
            $('#form-phone').removeClass('error');
            setTimeout(() => {
                $('.form-error').removeClass("text-danger").addClass('text-success').empty().html("<p class='mb-0'>Ваш запрос отправлен.</p> <p>Я скоро с вами свяжусь!</p>");
                setTimeout(() => {
                    $('.form-error').addClass("text-danger").removeClass('text-success').empty();
                    $('#form-name').val("");
                    $('#form-phone').val("");
                    setTimeout(() => {
                    $('.shadow-form').removeClass('active');
                }, 150)
                }, 1500)
            }, 1500)
        }
    });

    $('#sendform-b').click(function (e) { 
        e.preventDefault();
        
        const name = $('#form-name-b').val();
        const phone = $('#form-phone-b').val();

        if (name === "") {
            $('.form-error-b').empty().html("<p class='mb-0'>Заполните поле Имя</p>");
            $('#form-name-b').addClass('error');
        } else if (phone === "") {
            $('.form-error-b').empty().html("<p class='mb-0'>Заполните поле Телефон</p>");
            $('#form-phone-b').addClass('error');
        } else {
            $('.form-error-b').empty();
            $('#form-name-b').removeClass('error');
            $('#form-phone-b').removeClass('error');
            setTimeout(() => {
                $('.form-error-b').empty().html("<p class='mb-0'>Ваш запрос отправлен.</p> <p>Я скоро с вами свяжусь!</p>");
                setTimeout(() => {
                    $('.form-error-b').removeClass('text-success').empty();
                    $('#form-name-b').val("");
                    $('#form-phone-b').val("");
                }, 1500)
            }, 1500)
        }
    });
});