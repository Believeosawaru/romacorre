document.querySelector('.fa-bars').addEventListener('click', () => {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    })
})