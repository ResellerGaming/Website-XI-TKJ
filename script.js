// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loading-screen').style.display = 'none';
    }, 2000);
});

// Sound Effect
const soundBtn = document.getElementById('sound-btn');
const bgSound = document.getElementById('bg-sound');

soundBtn.addEventListener('click', () => {
    if (bgSound.paused) {
        bgSound.play();
        soundBtn.textContent = '🔊';
    } else {
        bgSound.pause();
        soundBtn.textContent = '🔇';
    }
});

// Efek Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.opacity = 1 - window.scrollY / 300;
});
