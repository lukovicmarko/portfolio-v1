
//experience animation
const items = document.querySelectorAll('#experience li');

const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const run = () =>
    items.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('show');
        }
    });


// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);



// Smooth Scrolling
$('#vertical-nav li a,#mainNav li a, .button').on('click', function (event) {

    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
});

$('body').scrollspy({ target: '#vertical-nav' });


/* Animations on scroll */
$('.js--wp-1').waypoint(function (direction) {
    $('.js--wp-1').addClass('animated zoomIn');
}, {
    offset: '30%'
});

$('.js--wp-2').waypoint(function (direction) {
    $('.js--wp-2').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('.js--wp-3').waypoint(function (direction) {
    $('.js--wp-3').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('.js--wp-4').waypoint(function (direction) {
    $('.js--wp-4').addClass('animated fadeInUp');
}, {
    offset: '80%'
});

$('.js--wp-5').waypoint(function (direction) {
    $('.js--wp-5').addClass('animated fadeInUp');
}, {
    offset: '80%'
});


$('.js--wp-6').waypoint(function (direction) {
    $('.js--wp-6').addClass('animated fadeInUp');
}, {
    offset: '80%'
});


$('.js--wp-7').waypoint(function (direction) {
    $('.js--wp-7').addClass('animated fadeInUp');
}, {
    offset: '80%'
});



$('.js--wp-8').waypoint(function (direction) {
    $('.js--wp-8').addClass('animated fadeInUp');
}, {
    offset: '80%'
});


$('.js--wp-9').waypoint(function (direction) {
    $('.js--wp-9').addClass('animated fadeInUp');
}, {
    offset: '80%'
});



$('.js--wp-10').waypoint(function (direction) {
    $('.js--wp-10').addClass('animated zoomIn');
}, {
    offset: '30%'
});
