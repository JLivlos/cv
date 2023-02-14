let lang = localStorage.getItem('cvLang') ?
    localStorage.cvLang :
    navigator.language.split('-')[0] === 'ru' ?
    'ru' :
    'en';

function setLang() {
    if (lang === 'en') translateToEn();
    if (lang === 'be') translateToBe();
    if (lang === 'ru') translateToRu();
};
setLang();

function setLangStorage() {
    localStorage.setItem('cvLang', lang);
}
window.addEventListener('beforeunload', setLangStorage);


/* PROJECTS */

document.querySelector('.eldritch-img').addEventListener('click', (e) => {
    window.open('https://jlivlos.github.io/rss-tasks/eldritch-horror/');
});

document.querySelector('.gempuzzle-img').addEventListener('click', (e) => {
    window.open('https://jlivlos.github.io/rss-tasks/thegempuzzle/');
});

document.querySelector('.name-the-song-img').addEventListener('click', (e) => {
    window.open('https://jlivlos.github.io/rss-tasks/songbird/');
});

document.querySelector('.mom-img').addEventListener('click', (e) => {
    window.open('https://jlivlos.github.io/rss-tasks/momentum/');
});

document.querySelector('.zoo-img').addEventListener('click', (e) => {
    window.open('https://jlivlos.github.io/rss-tasks/online-zoo/pages/main/');
});

document.querySelector('.travel-img').addEventListener('click', (e) => {
    window.open('https://jlivlos.github.io/rss-tasks/travel/');
});

document.querySelector('.shveiba-img').addEventListener('click', (e) => {
    window.open('https://shveiba.by');
});

/* TRANSLATE */

document.querySelector('.lang').addEventListener('click', (e) => {
    document.querySelector('.lang-menu').classList.toggle('active');
});

document.querySelector('.ru').addEventListener('click', (e) => {
    translateToRu();
    document.querySelector('.lang-menu').classList.toggle('active');
});

document.querySelector('.en').addEventListener('click', (e) => {
    translateToEn();
    document.querySelector('.lang-menu').classList.toggle('active');
});

document.querySelector('.be').addEventListener('click', (e) => {
    translateToBe();
    document.querySelector('.lang-menu').classList.toggle('active');
});

function translateToEn() {
    lang = 'en';
    document.querySelector('.lang').textContent = 'EN';
    document.querySelector('.cv-name').textContent = 'Yuliya Shafranskaya';
    document.querySelector('.menu-contacts').textContent = 'Contacts';
    document.querySelector('.menu-summary').textContent = 'About me';
    document.querySelector('.menu-education').textContent = 'Education';
    document.querySelector('.menu-skills').textContent = 'Skills';
    document.querySelector('.menu-code').textContent = 'Code';
    document.querySelector('.menu-projects').textContent = 'Projects';

    document.querySelector('.contacts-title').textContent = 'Contacts';
    document.querySelector('.contacts-location').textContent = 'Location: Vitebsk, Belarus';

    document.querySelector('.summary-title').textContent = 'About me';
    document.querySelector('.date-of-birth').textContent = 'Date of birth: ';
    document.querySelector('.work-exp').textContent = 'Work experience';

    document.querySelector('.exp-school').textContent = 'Programmer (Vitebsk school №9): 09.2016-02.2019';
    document.querySelector('.exp-cont').innerHTML = 'Content-manager (<a href="https://podvodnik.pro/">podvodnik.pro</a>): 09.2017-07.2022';
    document.querySelector('.exp-manager').innerHTML = 'Manager (<a href="https://ppst.by/">"Steel Technologies"</a>): 10.2020-12.2022';
    document.querySelector('.exp-cont2').innerHTML = 'Content-manager (<a href="http://boat.maldiviana.com/">"Maldiviana Boat"</a>): 01.2023-now';

    document.querySelector('.education-title').textContent = 'Education/English';
    document.querySelector('.university').textContent = 'Vitebsk State University: Russian language and literature. Foreign language (German)';
    document.querySelector('.puzzleng').innerHTML = 'Puzzle English cources (<span>Teacher’s method</span>)';
    document.querySelector('.english').innerHTML = 'English A2 (<span>according <a href="https://pt.str.by/?gclid=Cj0KCQiA99ybBhD9ARIsALvZavXj3DZEuxZA8seN_zM_1MoPF4zIdchbaur5j67P30DduI6mhoKLAGgaAmZ9EALw_wcB">Streamline test</a></span>)';

    document.querySelector('.skills-title').textContent = 'Skills';
    document.querySelector('.code-title').textContent = 'Code';
    document.querySelector('.projects-h2').textContent = 'Projects';
    document.querySelector('.des-cod-title').textContent = 'Design/Front-end';
    document.querySelector('.cod-title').textContent = 'Front-end';
    document.querySelector('.des-title').textContent = 'Design';
};

function translateToBe() {
    lang = 'be';
    document.querySelector('.lang').textContent = 'BE';
    document.querySelector('.cv-name').textContent = 'Юлія Шафранская';
    document.querySelector('.menu-contacts').textContent = 'Кантакты';
    document.querySelector('.menu-summary').textContent = 'Пра мяне';
    document.querySelector('.menu-education').textContent = 'Адукацыя';
    document.querySelector('.menu-skills').textContent = 'Навыкі';
    document.querySelector('.menu-code').textContent = 'Код';
    document.querySelector('.menu-projects').textContent = 'Праекты';

    document.querySelector('.contacts-title').textContent = 'Кантакты';
    document.querySelector('.contacts-location').textContent = 'Лакацыя: Віцебск, Беларусь';

    document.querySelector('.summary-title').textContent = 'Пра мяне';
    document.querySelector('.date-of-birth').textContent = 'Дата нараджэння: ';
    document.querySelector('.work-exp').textContent = 'Працоўны вопыт';

    document.querySelector('.exp-school').textContent = 'Інжэнер-праграміст (ДУА "СШ№9"): 09.2016-02.2019';
    document.querySelector('.exp-cont').innerHTML = 'Кантэнт-мэнэджэр (<a href="https://podvodnik.pro/">podvodnik.pro</a>): 09.2017-07.2022';
    document.querySelector('.exp-manager').innerHTML = 'Мэнэджэр (<a href="https://ppst.by/">ТАА ПП "Стальныя тэхналогіі"</a>): 10.2020-12.2022';
    document.querySelector('.exp-cont2').innerHTML = 'Кантэнт-мэнэджэр (<a href="http://boat.maldiviana.com/">"Maldiviana Boat"</a>): 01.2023-зараз';

    document.querySelector('.education-title').textContent = 'Адукацыя';
    document.querySelector('.university').textContent = 'ВДУ ім. П.М. Машэрава: Філолаг. Выкладчык рускай мовы і літ-ры (спецыялізацыя: ням. мова)';
    document.querySelector('.puzzleng').innerHTML = 'Курсы Puzzle English (<span>Teacher’s method</span>)';
    document.querySelector('.english').innerHTML = 'Англійская мова A2 (<span>па выніках <a href="https://pt.str.by/?gclid=Cj0KCQiA99ybBhD9ARIsALvZavXj3DZEuxZA8seN_zM_1MoPF4zIdchbaur5j67P30DduI6mhoKLAGgaAmZ9EALw_wcB">Streamline test</a></span>)';

    document.querySelector('.skills-title').textContent = 'Навыкі';
    document.querySelector('.code-title').textContent = 'Прыклад кода';
    document.querySelector('.projects-h2').textContent = 'Праекты';
    document.querySelector('.des-cod-title').textContent = 'Дызайн/Вёрстка/Код';
    document.querySelector('.cod-title').textContent = 'Вёрстка/Код';
    document.querySelector('.des-title').textContent = 'Дызайн';
};

function translateToRu() {
    lang = 'ru';
    document.querySelector('.lang').textContent = 'RU';
    document.querySelector('.cv-name').textContent = 'Юлия Шафранская';
    document.querySelector('.menu-contacts').textContent = 'Контакты';
    document.querySelector('.menu-summary').textContent = 'Обо мне';
    document.querySelector('.menu-education').textContent = 'Образование';
    document.querySelector('.menu-skills').textContent = 'Навыки';
    document.querySelector('.menu-code').textContent = 'Код';
    document.querySelector('.menu-projects').textContent = 'Проекты';

    document.querySelector('.contacts-title').textContent = 'Контакты';
    document.querySelector('.contacts-location').textContent = 'Локация: Витебск, Беларусь';

    document.querySelector('.summary-title').textContent = 'Обо мне';
    document.querySelector('.date-of-birth').textContent = 'Дата рождения: ';
    document.querySelector('.work-exp').textContent = 'Опыт работы';

    document.querySelector('.exp-school').textContent = 'Инженер-программист (ГУО "СШ№9"): 09.2016-02.2019';
    document.querySelector('.exp-cont').innerHTML = 'Контент-менеджер (<a href="https://podvodnik.pro/">podvodnik.pro</a>): 09.2017-07.2022';
    document.querySelector('.exp-manager').innerHTML = 'Менеджер (<a href="https://ppst.by/">ООО ПП "Стальные технологии"</a>): 10.2020-12.2022';
    document.querySelector('.exp-cont2').innerHTML = 'Контент-менеджер (<a href="http://boat.maldiviana.com/">"Maldiviana Boat"</a>): 01.2023-наст.вр.';
    
    document.querySelector('.education-title').textContent = 'Образование';
    document.querySelector('.university').textContent = 'ВГУ им П.М. Машерова. Филолог. Преподаватель русск. языка и лит-ры (специализация: нем. яз.)';
    document.querySelector('.puzzleng').innerHTML = 'Курсы Puzzle English (<span>Teacher’s method</span>)';
    document.querySelector('.english').innerHTML = 'Английский язык A2 (<span>по результатам <a href="https://pt.str.by/?gclid=Cj0KCQiA99ybBhD9ARIsALvZavXj3DZEuxZA8seN_zM_1MoPF4zIdchbaur5j67P30DduI6mhoKLAGgaAmZ9EALw_wcB">теста Streamline</a></span>)';

    document.querySelector('.skills-title').textContent = 'Навыки';
    document.querySelector('.code-title').textContent = 'Пример кода';
    document.querySelector('.projects-h2').textContent = 'Проекты';
    document.querySelector('.des-cod-title').textContent = 'Дизайн/Верстка/Код';
    document.querySelector('.cod-title').textContent = 'Верстка/Код';
    document.querySelector('.des-title').textContent = 'Дизайн';
};