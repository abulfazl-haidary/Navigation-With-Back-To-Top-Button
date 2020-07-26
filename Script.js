$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 150) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });
})