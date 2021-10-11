$(document).ready(function () {
    // Scroll Top
    $("a[href='#home']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    // Scroll by a:tag
    $("body").on('click', 'nav a[href*="#"]', function (e) {
        var fixed_offset = 80;
        $('html,body').stop().animate({
            // Animate Scroll
            scrollTop: $(this.hash).offset().top - fixed_offset 
        }, 1000);
    });

    // Add class for navigatikon
    $(window).scroll(function () {
        if ($(document).scrollTop() > 10) {
            $("header").addClass('scroller');
        } else {
            $("header").removeClass('scroller');
        }
    });
    
    /** Toggle nav menu */
    $("nav#mobile").click(function () {
        let $this = $(this);
        let $selector = $("div:last-child", $this);
        let cssValue = ( $selector.css("display") == 'block' )? "none" : "block";
        $("div:last-child", $this).fadeIn("slow").css({"display": cssValue});
    });
    /** END */




});

