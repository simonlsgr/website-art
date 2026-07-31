const arrow_a = document.querySelector('.arrow.a');
const desc_aside_a = document.querySelector('.desc-aside.a');
const arrow_b = document.querySelector('.arrow.b');
const desc_aside_b = document.querySelector('.desc-aside.b');

if (arrow_a && desc_aside_a) {
    arrow_a.addEventListener('click', function() {
        this.classList.toggle('is-active');
        desc_aside_a.classList.toggle('is-active');
    });
}

if (arrow_b && desc_aside_b) {
    arrow_b.addEventListener('click', function() {
        this.classList.toggle('is-active');
        desc_aside_b.classList.toggle('is-active');
    });
}

const galleryTabs = document.querySelectorAll('.gallery-tab');
const gallerySections = document.querySelectorAll('.gallery-section');

galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        galleryTabs.forEach(button => button.classList.remove('is-active'));
        gallerySections.forEach(section => section.classList.remove('is-active'));

        tab.classList.add('is-active');
        const targetId = tab.dataset.target;
        const target = document.getElementById(targetId);
        if (target) {
            target.classList.add('is-active');
        }
    });
});