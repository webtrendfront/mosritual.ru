$('.carousel').owlCarousel({
    singleItem: true,
    navigation: true,
    scrollPerPage: true,
    lazyLoad: true,
    autoPlay : true,
    stopOnHover : true,
    slideSpeed: 1500
});

//$('nav.top input').click(function() {
$('nav.top input').on( "focusin", function() {
    $('nav.top button').addClass('active');
});
$('nav.top input').on( "focusout", function() {
    $('nav.top button').toggleClass('active');
});