const images = [
    'img/pic-1.jpg',
    'img/pic-2.jpg',
    'img/pic-3.jpg',
    'img/pic-4.jpg',
    'img/pic-5.jpg',
    'img/pic-6.jpg',
    'img/pic-7.jpg',
    'img/pic-8.jpg',
    'img/pic-9.jpg',
]

let imgIndex = 0;
const img = document.getElementById('carosel-img');

setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0
    }
    const imgLink = images[imgIndex];
    img.setAttribute('src', imgLink)
    // console.log('hello')
    imgIndex++;
}, 1500)