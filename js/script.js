
$ ('.slider-2').slick({
    slidesToShow: 5,
    dots:false,
    autoplay:true,
    responsive: [
        {
            breakpoint:769,
            settings:{
                arrows: false,
                centerPadding: "40px",
                slidesToShow:3
            }
        }
    ]
});
