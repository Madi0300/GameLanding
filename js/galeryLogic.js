function handleClickNextButton() {
    const images = document.querySelectorAll('.about__img');
    const img1 = document.querySelector('.about__imgl-1');
    const img2 = document.querySelector('.about__imgl-2');
    const img3 = document.querySelector('.about__imgl-3');

    const lastImg = document.querySelector('.about__imgl-' + images.length);


    for (let i = 1; i <= images.length + 1; i++) {
        console.log('.about__imgl-' + i)
        const img = document.querySelector('.about__imgl-' + i);
        console.log(img)
        if (i <= 1) {
            img.classList.remove('about__imgl-' + i);
            img.classList.add('about__imgl-' + (images.length + 1));
            img.classList.add('about__imgl-hidden');
        } else {
            img.classList.remove('about__imgl-' + i);
            img.classList.add('about__imgl-' + (i - 1))
            if (img.classList.contains('about__imgl-3')) {
                setTimeout(()=>{img.classList.remove('about__imgl-hidden');} , 500)
            }
        }
    }


    galeryNextButton.removeEventListener('click', handleClickNextButton)

    setTimeout(() => {
        
        galeryNextButton.addEventListener('click', handleClickNextButton)
    }, 500)
}

const galeryNextButton = document.querySelector('.about__next-button');

galeryNextButton.addEventListener('click', handleClickNextButton)

const galeryImages = document.querySelectorAll('.about__img');

window.onload = () => {
    for (let i = 0; i < galeryImages.length; i++) {
        galeryImages[i].classList.add('about__imgl-' + (i + 1));
    }
    for (let i = 1; i <= galeryImages.length; i++) {
        const img = document.querySelector('.about__imgl-' + i);
        if (i >= 4) {
            img.classList.add('about__imgl-hidden')
        } else {
            img.classList.remove('about__imgl-hidden')
        }
    }

}