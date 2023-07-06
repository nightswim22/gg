$(window).scroll(function () {
    var scrollpos = window.scrollY;

    if (scrollpos >= 500) {
        $(".back-top").addClass("back-top-show");
    }

    else {

        $(".back-top").removeClass("back-top-show");
    }

});


$(".back-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});





