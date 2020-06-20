//added active class to vertical navigation
$('.nav .nav-link').click(function () {
    $('.nav .nav-link').removeClass('active');
    $(this).addClass('active');
})


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
$('#vertical-nav li a, .button').on('click', function (event) {

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

$('body').scrollspy({ target: '#vertical-nav' })
