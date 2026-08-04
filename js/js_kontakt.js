const contactForm = document.querySelector('.contact-form');
const contactAddress = 'staufferkatrin@t-online.de';

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        window.location.href = 'mailto:' + contactAddress
            + '?subject=' + encodeURIComponent(subject)
            + '&body=' + encodeURIComponent(message);
    });
}
