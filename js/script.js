const scrollButton = document.querySelector('.main-hat__action-button');

scrollButton.addEventListener('click' , (e)=> {
    e.preventDefault()
    window.scrollTo({
        top: window.innerHeight, // Точная позиция прокрутки по вертикали
        behavior: 'smooth' // Плавная прокрутка
      });
})



//Change lang logic


const changeLangButton = document.querySelector('.header__change-lang');

changeLangButton.addEventListener('click' , (e) => {
  const langsItem = document.querySelector('.header__langs');
  const arrow = document.querySelector('.header__arrow');

  langsItem.classList.toggle('active');
  arrow.classList.toggle('active');
})