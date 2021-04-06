$(document).ready(function() {
    $('.container-footer__text_wrap').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});