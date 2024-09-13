window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
        nav.style.background = 'linear-gradient(90deg, #00BFFF, #1E90FF)';
    } else {
        nav.style.background = 'linear-gradient(90deg, #1E90FF, #00BFFF)';
    }
});
