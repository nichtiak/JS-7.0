$(document).ready(function(){
    $('ul:last li:eq(1)').on('click', function(){
        $('.overlay').fadeIn('slow');
        $('.modal'). slideDown(1000);
    });

    $('.main_btna').on('click', function(){
        $('.overlay').fadeIn('slow');
        $('.modal'). slideDown(1000);
    });

    $('.main_btn').on('click', function(){
        $('.overlay').fadeIn('slow');
        $('.modal'). slideDown(1000);
    });

    $('.close').on('click', function(){
        $('.modal'). slideUp(1000);
        $('.overlay').fadeOut('slow');
    });
});