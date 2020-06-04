$(function() {

    $('nav ul li a').click(function() {
        $('nav ul li').removeClass('selected')
        $(this).parent().addClass('selected')
    })

})