//Set height main-hat

function updateHeightMainHat() {
    const headerHeight = document.querySelector('.hat__header').getBoundingClientRect().height;
    document.querySelector('.hat__main').style.height = window.innerHeight - headerHeight - 1 + 'px';
}

updateHeightMainHat()


//Set about__imgs height

function updateHeightAboutImgs() {
    const img1Height = document.querySelector('.about__imgl-1').getBoundingClientRect().height;
    console.log(img1Height)
    document.querySelector('.about__imgs').style.height = img1Height + 'px';
}




//Set main-hat__action-button position 

function updateScrollButton () {
    const scrollButton = document.querySelector('.main-hat__action-button');

    scrollButton.style.top = window.innerHeight - scrollButton.getBoundingClientRect().height - 15 + 'px';
}

updateScrollButton()





window.addEventListener('resize', () => {
    updateHeightMainHat()
    updateScrollButton()
})