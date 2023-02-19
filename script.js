$(function() {
    $('.owl-one').owlCarousel({
        loop: false, 
        margin: 0, 
        dots:false,
        dotsDate:true,
        items: 10,
        nav: true,
        slideBy:10,
        navText:["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"]
    })
});

$(function() {
    $('.owl-two').owlCarousel({
        loop: false, 
        margin: 0, 
        dots:false,
        dotsDate:true,
        items: 5,
        nav: true,
        slideBy:8,
        navText:["<div class='leftarrow'><i class='fa-solid fa-chevron-left '></i>","<div class='rightarrow'><i class='fa-solid fa-chevron-right'></i></div>"]
    })
});