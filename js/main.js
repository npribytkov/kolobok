$('.portfolio__list').slick();
$('.grats__list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


$(".mobile_menu_container .parent").on("click", function(e) {
    e.preventDefault();
    $(".mobile_menu_container .activity").removeClass("activity");
    $(this).siblings("ul").addClass("loaded").addClass("activity");
});
$(".mobile_menu_container .back").on("click", function(e) {
    e.preventDefault();
    $(".mobile_menu_container .activity").removeClass("activity");
    $(this).parent().parent().removeClass("loaded");
    $(this).parent().parent().parent().parent().addClass("activity");
});
$(".mobile_menu").on("click", function(e) {
    e.preventDefault();
    $(".mobile_menu_container").addClass("loaded");
    $(".mobile_menu_overlay").fadeIn();
});
$(".mobile_menu_overlay").on("click", function(e) {
    $(".mobile_menu_container").removeClass("loaded");
    $(this).fadeOut(function() {
        $(".mobile_menu_container .loaded").removeClass("loaded");
        $(".mobile_menu_container .activity").removeClass("activity");
    });
});