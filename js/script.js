$ ('.slider-2').slick({
    slidesToShow: 5,
    dots:false,
    autoplay:false,
    arrows:false,
    responsive: [
        {
            breakpoint:1024,
            settings:{
                slidesToShow:4,
                arrows: false,
                centerPadding: "40px",

            }
        }
    ]
});
