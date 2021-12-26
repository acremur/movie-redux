const Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                dots:false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                dots:false,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                dots:false,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1200,
            settings: {
                dots:false,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },   
    ]
}

export default Settings