// Let the site play ground begin
// ----------------------------------------------------
// Global Variables
// ------=====-------=====------=====------=====
var windW = $(window).height();

// 1.0 ============ landingpage jquery
if ($('.landingpage').length){
    $('article').height(windW);
}


// 1.0 Main-banner slider initializer
// will slide slider
// ------------------------------------------
var swiper = new Swiper('.main-banner-booking .swiper-container', {
    pagination: '.main-banner-booking .swiper-pagination',
    paginationClickable: true,
    effect: 'fade',
    autoplay: 5000,
    lazyLoading:true
});


var galleryTop = new Swiper('.bannerMainImgSection', {
    nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 0,
});


var galleryThumbs = new Swiper('.bannerThumbImgSection', {
    spaceBetween: 10,
    centeredSlides: false,
    slidesPerView: '6',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    paginationClickable: false,
    freeMode: false
});

galleryTop.params.control = galleryThumbs;
galleryThumbs.params.control = galleryTop;


// 3.0 lazy loading images unviel.js
// -------------------------------------------
$("img").unveil(0, function() {
	$(this).load(function() {
	    this.style.opacity = 1;
	 });
});
