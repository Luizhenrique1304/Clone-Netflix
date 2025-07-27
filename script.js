const banners = [
    {
        Image: 'img/stranger-things-4-poster.jpg',
        title: "Stranger Things",
        desc: 'Na década de 1980, um grupo de amigos se envolve em uma série de eventos sobrenaturais na pacata cidade de Hawkins. Eles enfrentam criaturas monstruosas, agências secretas do governo e se aventuram em dimensões paralelas.'
    },
    {
        Image: 'img/wandinhabanner.jfif',
        title: "Wandinha",
        desc: 'Inteligente, sarcástica e apática, Wandinha Addams pode estar meio morta por dentro, mas na Escola Nunca Mais ela vai fazer amigos, inimigos e investigar assassinatos.'
    },
    {
        Image: 'img/sandmanbanner.jfif',
        title: "Sandman",
        desc: 'Após anos aprisionado, Morpheus, o Rei dos Sonhos, embarca em uma jornada entre mundos para recuperar o que lhe foi roubado e restaurar seu poder.'
    },
];

let currentBanner = 0;
const bannerSection = document.querySelector('.banner');
const title = document.getElementById('banner-title');
const desc = document.getElementById('banner-desc');

function changeBanner() {
    const banner = banners[currentBanner];
    bannerSection.style.backgroundImage = `url('${banner.Image}')`;
    title.textContent = banner.title
    desc.textContent = banner.desc
    bannerSection.classList.add('fade-out');

    setTimeout(() => {
        const banner = banners[currentBanner];
        bannerSection.style.backgroundImage = `url('${banner.Image}')`;
        title.textContent = banner.title;
        desc.textContent = banner.desc;

        bannerSection.classList.remove('fade-out');
        currentBanner = (currentBanner + 1) % banners.length; }, 1000);
}

changeBanner();

setInterval(changeBanner, 5000);


const carousels = document.querySelectorAll('.carousel-container');

carousels.forEach(carousel => {
    const row = carousel.querySelector('.row-posters');
    const leftBtn = carousel.querySelector('.left');
    const rightBtn = carousel.querySelector('.right');

    const scrollAmount = 300;

    leftBtn.addEventListener('click', () => {
        row.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    });

    rightBtn.addEventListener('click', () => {
        row.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    });
});