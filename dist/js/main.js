const linkClicked = document.getElementsByClassName('nav-link');
const numClass = linkClicked.length;

for (let i = 0; i < numClass; i++) {
    linkClicked[i].addEventListener('click', function () {
        const onTheMoment = document.getElementsByClassName('active');
        onTheMoment[0].className = onTheMoment[0].className.replace(' active', '');
        this.className += ' active';
    }, false);
}


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
$('#mainNav li a').on('click', function (event) {

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
