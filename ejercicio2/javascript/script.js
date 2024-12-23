// Cambio de título cuando el usuario cambia de pestaña
const originalTitle = document.title;
const handleVisibilityChange = function() {
    document.title = document.hidden ? "¡Vuelve! Te extrañamos!" : originalTitle;
};
document.addEventListener('visibilitychange', handleVisibilityChange);

// Manejo del header sticky con cambio de color
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});