$(document).ready(function () {
    $('#btn').click(function () {
        $('.kwadrat').animate({ width: 100, height: 100, 'margin-left': 150, }, 3000, function () {
            $('.kwadrat').css({
                'background': 'blue',
                'transition': '5s',
                'color': 'white'
            });
            setTimeout(function () {
                $('h2').text('Animacja zakończona');
            }, 4000);

        });

    });



});


