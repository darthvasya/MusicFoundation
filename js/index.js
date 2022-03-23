$(document).ready(function() {
    console.log('ready')
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu,.header').toggleClass('active');
        $('body').toggleClass('lock');
    })
});
