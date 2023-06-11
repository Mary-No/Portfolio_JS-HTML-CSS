// ===================================== BURGER MENU ====================================
let toggleBurger = function() {
    let elements = document.querySelectorAll(".header_burger, .top_nav");

    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("open");
    }
}

document.querySelector(".header_burger").addEventListener("click", toggleBurger);
links = document.querySelectorAll(".nav_link")
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", toggleBurger);
} 

// =============================================== PORTFOLIO BUTTONS ==================================
const portfolioImages = document.querySelectorAll('.gallery_img');

const portfolioBtn1 = document.querySelector('.winter');

portfolioBtn1.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/portfolio/winter/${index + 1}.jpg`);
 });
 
 const portfolioBtn2 = document.querySelector('.spring');
 portfolioBtn2.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/portfolio/spring/${index + 1}.jpg`);
 });

 const portfolioBtn3 = document.querySelector('.summer');
 portfolioBtn3.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/portfolio/summer/${index + 1}.jpg`);
 });

 const portfolioBtn4 = document.querySelector('.autumn'); 
 portfolioBtn4.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/portfolio/autumn/${index + 1}.jpg`);
 });


// ================================================DARK/LiGHT THEME ==============================================


let themaChangeElements = document.querySelectorAll(".wrapper, .html, .menu_name, .section_name, .skills_name, .skills_discr, .portfolio_btn, .price_name, .price_sum, .price_discr, .footer, .sun, .night");
let themaChangeButton = document.querySelector('.theme_btn');

themaChangeButton.onclick = function(){
    for (var i = 0; i < themaChangeElements.length; i++) {
        themaChangeElements[i].classList.toggle('light');
    }

}
//  ============================================= LANGUAGE ==============================================

 const i18Obj = {
    'en': {
    'portfolio_autor': 'Alexa Rise',
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
        'portfolio_autor': 'Саша Рис',
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'placeholder-phone': 'Номер телефона',
      'placeholder-message': 'Ваше сообщение',
      'send-message': 'Отправить'
    }
  }

const lengArr = document.querySelectorAll("[data-i18]");
const enLang = document.querySelector('.header_lang_en')
const ruLang = document.querySelector('.header_lang_ru')


function translate(lang) {
  lengArr.forEach((elem) => {
    elem.textContent = i18Obj[lang][elem.dataset.i18];
    
    
  })
}
// if(enLang.addEventListener('click')){
//     translate('en');
// }
// if(ruLang.addEventListener('click')){
//     translate('ru');
// }
enLang.addEventListener('click', () =>{ translate('en');});
ruLang.addEventListener('click', () =>{ translate('ru');});

