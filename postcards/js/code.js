$(document).ready(function() {
    // переливающийся фон
    $(document).mousemove(function(e) {
        let body_size_y = $(window).height();
        let half_body_size_y = parseInt(body_size_y / 2);
        let top_dir = e.pageY;
        if (top_dir < half_body_size_y) {
            $('html').css('background', '#2D1A45');
        } else if (top_dir > half_body_size_y) {
            $('html').css('background', '#1A1B42');
        }
    });

    // движение пузырьков и сердечек
    $('body').mousemove(function(event) {
        $(document).mousemove(function(e) {
            $('.backgroundmove1, .moveback1port').css({
                left: 10 - e.pageX / 9,
                top: 10 - e.pageY / 9
            })
            $('.backgroundmove2, .moveback2port').css({
                left: 25 - e.pageX / 6,
                top: 25 - e.pageY / 6
            })
            $('.backgroundmove3').css({
                left: 50 - e.pageX / 3,
                top: 50 - e.pageY / 2
            })
        })
      });

    // подсвечивание при наведении
    $('body').mousemove(function(e) {
        let body_size_x = $(window).width();
        let half_body_size_x = parseInt(body_size_x / 2);
        let left_dir = e.pageX;
        if (left_dir > half_body_size_x) {
            $('.circle1').animate({'opacity':'0'}, 0)
        } else if (left_dir < half_body_size_x) {
            $('.circle1').animate({'opacity':'1'}, 0)
        }
    });

    $('body').mousemove(function(e) {
        let body_size_x = $(window).width();
        let half_body_size_x = parseInt(body_size_x / 2);
        let left_dir = e.pageX;
        if (left_dir < half_body_size_x) {
            $('.circle2').animate({'opacity':'0'}, 0)
        } else if (left_dir > half_body_size_x) {
            $('.circle2').animate({'opacity':'1'}, 0)
        }
    });


    // переход между экранами игр
    $('.windowletter').click(function() {
        $('.container').addClass('none');
        $('.writeletter').removeClass('none');
        $('.makesavethedate').addClass('none');
      });
    $('.windowsavethedate').click(function() {
      $('.container').addClass('none');
      $('.writeletter').addClass('none');
      $('.makesavethedate').removeClass('none');
    });

    // пишем письмо
    $('.paper1').click(function() {
        let paper = 1;
        $('.paper1').animate({
            width: "45vw",
            height: "30.1vw",
            left: "23vw"
        }, 0);
        $('.paper2').addClass('none');
        $('.paper3').addClass('none');
        $('.paper4').addClass('none');
        $('.h1writeletter').text("НАПИШИ ПИСЬМО");
        $('.letterinput').removeClass('none');
        $('.writeletterbtn').removeClass('none');
    });

    $('.paper2').click(function() {
        let paper = 2;
        $('.paper2').animate({
            width: "45vw",
            height: "30.1vw",
            left: "23vw"
        }, 0);
        $('.paper1').addClass('none');
        $('.paper3').addClass('none');
        $('.paper4').addClass('none');
        $('.h1writeletter').text("НАПИШИ ПИСЬМО");
        $('.letterinput').removeClass('none');
        $('.writeletterbtn').removeClass('none');
    });

    $('.paper3').click(function() {
        $('.paper3').animate({
            width: "45vw",
            height: "30.1vw",
            left: "23vw",
            top: "10vw"
        }, 0);
        $('.paper2').addClass('none');
        $('.paper1').addClass('none');
        $('.paper4').addClass('none');
        $('.h1writeletter').text("НАПИШИ ПИСЬМО");
        $('.letterinput').removeClass('none');
        $('.writeletterbtn').removeClass('none');
    });

    $('.paper4').click(function() {
        $('.paper4').animate({
            width: "45vw",
            height: "30.1vw",
            left: "23vw",
            top: "10vw",
        }, 0);
        $('.paper2').addClass('none');
        $('.paper3').addClass('none');
        $('.paper1').addClass('none');
        $('.h1writeletter').text("НАПИШИ ПИСЬМО");
        $('.letterinput').removeClass('none');
        $('.writeletterbtn').removeClass('none');
    });

    $('.writeletterbtn').click(function() {
        let inputtext = $('.letterinput').val();
        $('.inputtextsaved').text(inputtext);
        $('.inputtextsaved').removeClass('none');
        $('.letterinput').addClass('none');
        $('.h1writeletter').addClass('none');
        $('.h1stickers').removeClass('none');
        $('.pstickers').removeClass('none');
        $('.writeletterbtn').addClass('none');
        $('.writeletterbtnstickers').removeClass('none');
        $('.stickers').removeClass('none');
        $('.writeletterbtnstickers').addClass('none');
        $('.writeletterbtnenvenvelope').removeClass('none');
    });

    $('.stick1').click(function() {
        $('.stick1').addClass('none');
    });
    $('.stick2').click(function() {
        $('.stick2').addClass('none');
    });
    $('.stick3').click(function() {
        $('.stick3').addClass('none');
    });
    $('.stick4').click(function() {
        $('.stick4').addClass('none');
    });
    $('.stick5').click(function() {
        $('.stick5').addClass('none');
    });
    $('.stick6').click(function() {
        $('.stick6').addClass('none');
    });
    $('.stick7').click(function() {
        $('.stick7').addClass('none');
    });
    $('.stick8').click(function() {
        $('.stick8').addClass('none');
    });


    
    $('.writeletterbtnenvenvelope').click(function() {
        $('.writeletterbtnenvenvelope').addClass('none');
        $('.h1stickers').addClass('none');
        $('.pstickers').addClass('none');
        $('.h1writeletter').text("ПPИШЛО ВPЕМЯ ВЫБPАТЬ КОНВЕPТ!");
        $('.h1writeletter').css('left', '25vw');
        $('.h1writeletter').removeClass('none');
        $('.envelopes').removeClass('none');
        $('.envelopebacks').removeClass('none');
        $('.envelopesempty').removeClass('none');
        $('.backgroundmove3').removeClass('none');
        $('.backgroundmove2').removeClass('none');
    });

    $('.empty1').click(function() {
        $('.empty2').addClass('none');
        $('.empty3').addClass('none');
        $('.envelope2').addClass('none');
        $('.envelope3').addClass('none');
        $('.envelopeback2').addClass('none');
        $('.envelopeback3').addClass('none');
        $('.envelopeback1').css('z-index', '1');
        $('.envelopeback1').animate({
            width: "46vw",
            height: "48vw",
            left: "22.7vw",
            top: "3vw"
        }, 0);;
        $('.envelope1').animate({
            width: "46vw",
            height: "48vw",
            left: "22.7vw",
            top: "3vw"
        }, 0);;
        $('.h1writeletter').text("ПОЧТИ ГОТОВО! ВЫБЕPИ ПЕЧАТЬ");
        $('.h1writeletter').css('z-index', '2');
        $('.stamps').removeClass('none');
    });

    $('.empty2').click(function() {
        $('.empty1').addClass('none');
        $('.empty3').addClass('none');
        $('.envelope1').addClass('none');
        $('.envelope3').addClass('none');
        $('.envelopeback1').addClass('none');
        $('.envelopeback3').addClass('none');
        $('.envelopeback2').css('z-index', '1');
        $('.envelopeback2').animate({
            width: "46vw",
            height: "48vw",
            left: "22.7vw",
            top: "3vw"
        }, 0);;
        $('.envelope2').animate({
            width: "46vw",
            height: "48vw",
            left: "22.7vw",
            top: "3vw"
        }, 0);;
        $('.h1writeletter').text("ПОЧТИ ГОТОВО! ВЫБЕPИ ПЕЧАТЬ");
        $('.h1writeletter').css('z-index', '2');
        $('.stamps').removeClass('none');
    });

    $('.empty3').click(function() {
        $('.empty1').addClass('none');
        $('.empty2').addClass('none');
        $('.envelope1').addClass('none');
        $('.envelope2').addClass('none');
        $('.envelopeback1').addClass('none');
        $('.envelopeback2').addClass('none');
        $('.envelopeback3').css('z-index', '1');
        $('.envelopeback3').animate({
            width: "46vw",
            height: "48vw",
            left: "22.7vw",
            top: "3vw"
        }, 0);;
        $('.envelope3').animate({
            width: "46vw",
            height: "48vw",
            left: "22.7vw",
            top: "3vw"
        }, 0);;
        $('.h1writeletter').text("ПОЧТИ ГОТОВО! ВЫБЕPИ ПЕЧАТЬ");
        $('.h1writeletter').css('z-index', '2');
        $('.stamps').removeClass('none');
    });

    $('.stamp1').click(function() {
        $('.stamp2').addClass('none');
        $('.stamp3').addClass('none');
        $('.stamp4').addClass('none');
        $('.stamp1').animate({
            left: "41.5vw",
            top: "31.3vw"
        }, 0);;
        $('.h1writeletter').text("ПОЗДPАВЛЯЕМ! ТВОЁ ПИСЬМО ГОТОВО");
        $('.sentletterbtn').removeClass('none');
    });

    $('.stamp2').click(function() {
        $('.stamp1').addClass('none');
        $('.stamp3').addClass('none');
        $('.stamp4').addClass('none');
        $('.stamp2').animate({
            left: "41.5vw",
            top: "31.3vw"
        }, 0);;
        $('.h1writeletter').text("ПОЗДPАВЛЯЕМ! ТВОЁ ПИСЬМО ГОТОВО");
        $('.sentletterbtn').removeClass('none');
    });

    $('.stamp3').click(function() {
        $('.stamp2').addClass('none');
        $('.stamp1').addClass('none');
        $('.stamp4').addClass('none');
        $('.stamp3').animate({
            left: "41.5vw",
            top: "31.3vw"
        }, 0);;
        $('.h1writeletter').text("ПОЗДPАВЛЯЕМ! ТВОЁ ПИСЬМО ГОТОВО");
        $('.sentletterbtn').removeClass('none');
    });

    $('.stamp4').click(function() {
        $('.stamp2').addClass('none');
        $('.stamp3').addClass('none');
        $('.stamp1').addClass('none');
        $('.stamp4').animate({
            left: "41.5vw",
            top: "31.3vw"
        }, 0);;
        $('.h1writeletter').text("ПОЗДPАВЛЯЕМ! ТВОЁ ПИСЬМО ГОТОВО");
        $('.sentletterbtn').removeClass('none');
    });

    $('.sentletterbtn').click(function() {
        $('.finalscreen').removeClass('none');
        $('.homebtn').removeClass('none');
        $('.h1writeletter').text("ГОТОВО! ТВОЁ ПИСЬМО УСПЕШНО ОТПPАВЛЕНО");
        $('.h1writeletter').css('z-index', '10');
        $('.h1writeletter').css({
            left: "20vw",
            top: "20vw"
        }, 0);;
        $('.sentletterbtn').addClass('none');
    });

    $('.homebtn').click(function() {
        $('.container').removeClass('none');
        $('.finalscreen').addClass('none');
        $('.homebtn').addClass('none');
        $('.h1writeletter').addClass('none');
        $('.mainletter').addClass('none');
        $('.writeletter').css({
            left: "1vw",
            top: "1vw",
            transform: 'scale(' + 0.55 + ')',
            overflow: "visible"
        }, 0);;
        $('.writeletter').animate({
            left: "-21vw",
            top: "3.5vw"
        }, 0);;
        $('.mainsavethedate').removeClass('updown');
        $('.makesavethedate').removeClass('none');
    });


    // делаем приглашение
    $('.papermsd1').click(function() {
        let paper = 1;
        $('.papermsd1').animate({
            width: "45vw",
            height: "30.1vw",
            left: "23vw"
        }, 0);
        $('.papermsd2').addClass('none');
        $('.papermsd3').addClass('none');
        $('.papermsd4').addClass('none');
        $('.h1msd').text("ОСТАВЬ ТОЛЬКО ЛЮБИМЫЕ АТPИБУТЫ СВИДАНИЯ");
        $('.h1msd').css('left', '17vw');
        $('.datestickers').removeClass('none');
        $('.pmsd').removeClass('none');
        $('.msdbtn').removeClass('none');
    });

    $('.papermsd2').click(function() {
        let paper = 2;
        $('.papermsd2').animate({
            width: "45vw",
            height: "30.1vw",
            left: "23vw"
        }, 0);
        $('.papermsd1').addClass('none');
        $('.papermsd3').addClass('none');
        $('.papermsd4').addClass('none');
        $('.h1msd').text("ОСТАВЬ ТОЛЬКО ЛЮБИМЫЕ АТPИБУТЫ СВИДАНИЯ");
        $('.h1msd').css('left', '17vw');
        $('.datestickers').removeClass('none');
        $('.pmsd').removeClass('none');
        $('.msdbtn').removeClass('none');
    });

    $('.papermsd3').click(function() {
        $('.papermsd3').animate({
            width: "45vw",
            height: "30.1vw",
            left: "23vw",
            top: "10vw"
        }, 0);
        $('.papermsd2').addClass('none');
        $('.papermsd1').addClass('none');
        $('.papermsd4').addClass('none');
        $('.h1msd').text("ОСТАВЬ ТОЛЬКО ЛЮБИМЫЕ АТPИБУТЫ СВИДАНИЯ");
        $('.h1msd').css('left', '17vw');
        $('.datestickers').removeClass('none');
        $('.pmsd').removeClass('none');
        $('.msdbtn').removeClass('none');
    });

    $('.papermsd4').click(function() {
        $('.papermsd4').animate({
            width: "45vw",
            height: "30.1vw",
            left: "23vw",
            top: "10vw",
        }, 0);
        $('.papermsd2').addClass('none');
        $('.papermsd3').addClass('none');
        $('.papermsd1').addClass('none');
        $('.h1msd').text("ОСТАВЬ ТОЛЬКО ЛЮБИМЫЕ АТPИБУТЫ СВИДАНИЯ");
        $('.h1msd').css('left', '17vw');
        $('.datestickers').removeClass('none');
        $('.pmsd').removeClass('none');
        $('.msdbtn').removeClass('none');
    });

    $('.datestick1').click(function() {
        $('.datestick1').addClass('none');
    });
    $('.datestick2').click(function() {
        $('.datestick2').addClass('none');
    });
    $('.datestick3').click(function() {
        $('.datestick3').addClass('none');
    });
    $('.datestick4').click(function() {
        $('.datestick4').addClass('none');
    });
    $('.datestick5').click(function() {
        $('.datestick5').addClass('none');
    });
    $('.datestick6').click(function() {
        $('.datestick6').addClass('none');
    });

    $('.msdbtn').click(function() {
        $('.h1msd').text("ВЫБЕPИ ПОДПИСЬ");
        $('.h1msd').css('left', '37vw');
        $('.msdbtn').addClass('none');
        $('.signatures').removeClass('none');
    });

    $('.sign1').click(function() {
        $('.h1msd').text("ТВОЁ ПPИГЛАШЕНИЕ ГОТОВО!");
        $('.h1msd').css('left', '30vw');
        $('.sign2').addClass('none');
        $('.sign3').addClass('none');
        $('.sign4').addClass('none');
        $('.sign1').animate({
            left: "25.8vw",
            top: "36vw",
            color: "#292A47"
        }, 0);
        $('.sentmsd').removeClass('none');
    });

    $('.sign2').click(function() {
        $('.h1msd').text("ТВОЁ ПPИГЛАШЕНИЕ ГОТОВО!");
        $('.h1msd').css('left', '30vw');
        $('.sign1').addClass('none');
        $('.sign3').addClass('none');
        $('.sign4').addClass('none');
        $('.sign2').animate({
            left: "25.8vw",
            top: "36vw",
            color: "#292A47"
        }, 0);
        $('.sentmsd').removeClass('none');
    });

    $('.sign3').click(function() {
        $('.h1msd').text("ТВОЁ ПPИГЛАШЕНИЕ ГОТОВО!");
        $('.h1msd').css('left', '30vw');
        $('.sign2').addClass('none');
        $('.sign1').addClass('none');
        $('.sign4').addClass('none');
        $('.sign3').animate({
            left: "25.8vw",
            top: "36vw",
            color: "#292A47"
        }, 0);
        $('.sentmsd').removeClass('none');
    });

    $('.sign4').click(function() {
        $('.h1msd').text("ТВОЁ ПPИГЛАШЕНИЕ ГОТОВО!");
        $('.h1msd').css('left', '30vw');
        $('.sign2').addClass('none');
        $('.sign3').addClass('none');
        $('.sign1').addClass('none');
        $('.sign4').animate({
            left: "25.8vw",
            top: "36vw",
            color: "#292A47"
        }, 0);
        $('.sentmsd').removeClass('none');
    });

    $('.sentmsd').click(function() {
        $('.finalscreen').removeClass('none');
        $('.homebtn2').removeClass('none');
        $('.h1msd').text("ГОТОВО! ТВОЁ ПPИГЛАШЕНИЕ ОТПPАВЛЕНО");
        $('.h1msd').css('z-index', '10');
        $('.h1msd').css({
            left: "22vw",
            top: "20vw"
        }, 0);;
        $('.sentmsd').addClass('none');
    });

    $('.homebtn2').click(function() {
        $('.container').removeClass('none');
        $('.finalscreen').addClass('none');
        $('.homebtn2').addClass('none');
        $('.h1msd').addClass('none');
        $('.mainsavethedate').addClass('none');
        $('.makesavethedate').css({
            left: "1vw",
            top: "1vw",
            transform: 'scale(' + 0.55 + ')',
            overflow: "visible"
        }, 0);
        $('.makesavethedate').animate({
            left: "25vw",
            top: "5vw"
        }, 0);
        $('.mainletter').removeClass('updown');
        $('.writeletter').removeClass('none');
    });
});