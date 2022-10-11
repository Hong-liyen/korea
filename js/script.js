$(function() {
    $('.qa .qa_title').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next()
            .stop()
            .slideUp(300)
            $(".qa_title img").css("transform","rotate(0deg)");
        } else {
            $(this).addClass('active');
            $(this).next()
            .stop()
            .slideDown(300);
            $(".qa_title img").css("transform","rotate(180deg)");
        }
    });
    // Header
    var shrinkHeader = 300;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if ( scroll >= shrinkHeader ) {
            $('.header').addClass('shrink');
            console.log(123)
            }
            else {
                $('.header').removeClass('shrink');
                console.log(456)
            }
    });
    function getCurrentScroll() {
        return window.pageYOffset;
    }
    // Click slideUP
    $('.qa_title').click(function (){
        $('.qa_answer').slideUp();
        $(this).next('.qa_answer').stop().slideToggle(500); 
    });

    //Click event to scroll to top
    $('.top img').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});