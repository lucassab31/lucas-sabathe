function showNav() {
    document.getElementById("nav").classList.toggle("active");
    document.getElementById("burger-bnt").classList.toggle("active");
}

particlesJS.load('particles-js', 'app/js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

function down() {
    element = document.getElementById("about");
    let y = element.getBoundingClientRect().top;
    window.scroll({
        top: y,
        behavior: 'smooth'
    })
}