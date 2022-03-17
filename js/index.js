$(document).ready(function() {
    console.log('ready')
    $('.heder__burger').click(function(event) {
        $('.heder__burger,.header__menu,.header').toggleClass('active');
        $('body').toggleClass('lock');
    })
});