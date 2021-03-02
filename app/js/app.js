function showNav() {
    document.getElementById("nav").classList.toggle("active");
    document.getElementById("burger-bnt").classList.toggle("active");
}



function down() {
    element = document.getElementById("about");
    let y = element.getBoundingClientRect().top;
    window.scroll({
        top: y,
        behavior: 'smooth'
    })
}

var error = false;
function validation(form) {
    error = false;
    var name = form.name;
    var email = form.email;
    var subject = form.subject;
    var message = form.message;


    if (name.value === '') {
        setErrorFor(name, "The name can't be null");
    } else {
        setSuccess(name);
    }   

    if (email.value === '') {
        setErrorFor(email, "The email can't be null");
    } else {
        setSuccess(email);
    }

    if (subject.value === '') {
        setErrorFor(subject, "The subject can't be null");
    } else {
        setSuccess(subject);
    }

    if (message.value === '') {
        setErrorFor(message, "The message can't be null");
    } else {
        setSuccess(message);
    }

    if (error == false) {
        form.submitF.submit();
    }
}

function setErrorFor(input, message) {
    error = true;
    var formControl = input.parentElement;
    var small = formControl.querySelector('small');
    small.innerHTML = message;
    formControl.className= "form-control error";
}

function setSuccess(input) {
    var formControl = input.parentElement;
    formControl.className= "form-control success focus orange";
}

const images = document.querySelectorAll('.work-content');
new simpleParallax(images, {
    delay: 0,
    orientation: 'up',
    scale: 1.3,
    overflow: true
});

let parallax = document.getElementById("parallax");

window.addEventListener('scroll', () => {
    var value = window.scrollY;
    parallax.style.top = 50 - (value * 0.1) + '%';
})

inputs = document.querySelectorAll('.input');
inputs.forEach(input => {
    input.addEventListener("focus", focusFunction);
    input.addEventListener("blur", blurFunction);
});

function focusFunction() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunction() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    } else {
        parent.classList.add("orange");
    }
}