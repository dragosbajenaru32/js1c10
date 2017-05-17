window.addEventListener('load', function () {
    var contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (evt) {
        evt.preventDefault();
        var emailInput = document.querySelector('#contact-form input[name=email]');
        var titleInput = document.querySelector('#contact-form input[name=title]');
        var commentTA = document.querySelector('#contact-form textarea');
        var contact = { email: emailInput.value, title: titleInput.value, comment:commentTA.value };
        dataService.createContact(contact, function (error, _contact) {
            if (!error) {
                location.href = '/html/contact.html';
            } else {
                console.log(error);
                var formErrors = document.getElementById('form-errors');
                formErrors.innerText = error.message;
            }
        });
    });
});