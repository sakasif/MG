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
    // spaceBetween: 10,
    //centeredSlides: true,
    // slidesPerView: '6',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    slidesPerView: 6,
    paginationClickable: true,
    spaceBetween: 10,
    freeMode: true
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


$('.bannerThumbImgSection').flexslider({
animation: "slide",
directionNav: false,
controlNav: false,
animationLoop: false,
slideshow: false,
itemWidth: 170,
itemMargin: 0,
asNavFor: '.bannerMainImgSection'
});
 
$('.bannerMainImgSection').flexslider({
animation: "slide",
directionNav: false,
controlNav: false,
animationLoop: true,
slideshow: false,
sync: ".bannerThumbImgSection"
});


$('.innerBannerSection').flexslider({
    slideshow: 'true',
    animation: "slide",
    directionNav: false,
    controlNav: false,
    useCSS: true
});



$('.chart').easyPieChart({
	barColor: '#ef1e25',
	trackColor: '#f9f9f9',
	scaleColor: '#000',
	scaleLength: 5,
	lineCap: 'round',
	lineWidth: 7,
	trackWidth: undefined,
	size: 120,
	rotate: 0,
	animate: {
		duration: 1000,
		enabled: true
	},
	
	easing: 'easeOutBounce',
	onStep: function(from, to, percent) {
		$(this.el).find('.percent').text(Math.round(percent));
	}
});


$("#page-header .header-wrap .navigation .bottom-nav .primary-nav > li").hover(function(){

    $(this).find("ul.dropDown").slideDown().stop(true).delay(10);

}, function(){

    $(this).find("ul.dropDown").slideUp();

})



$(".bannerThumbImgSection ul li").click(function(){

	new WOW().init();

})

$(".mapPopUp").fancybox({
    maxWidth: 780,
    maxHeight: 420,
    fitToView: false,
    width: '100%',
    height: '100%',
    autoSize: false,
    closeClick: false,
    openEffect: 'none',
    closeEffect: 'none'
});


new WOW().init();