$('.reviews-section__card-holder').slick({
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    arrows: true,
    prevArrow: '<div class="slider__buttons-item slider__buttons-item--left"><button class="slider__buttons-btn slider__buttons-btn--left"></button> </div>',
    nextArrow: '<div class="slider__buttons-item slider__buttons-item--right"><button class="slider__buttons-btn slider__buttons-btn--right"></button></div>',
    asNavFor: '.reviews-section__btn-holder',
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: 'linear'
});
$('.reviews-section__btn-holder').slick({
    centerPadding: '62px',
    draggable: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.reviews-section__card-holder',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
});

function serviceSection() {
    let ul = document.querySelector('.service-section__nav-holder');

    ul.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            let active = document.querySelector('.service-section__active');
            active.classList.remove('service-section__active');
            e.target.classList.add('service-section__active');
        } else if (e.target.tagName !== 'LI') {
            return;
        }

        let text = document.querySelectorAll('.service-section__text-col');
        text.forEach(el => {
            if (e.target.id === el.dataset.text) {
                let textActive = document.querySelector('.service-section__text-col-active');
                textActive.classList.remove('service-section__text-col-active');
                el.classList.add('service-section__text-col-active');
            }
        })
    })
}
serviceSection();

function workSection() {
    const imgWrapper = document.querySelector('.work-section__image-wrapper');
    function image(a, b) {
        for (let i = a; i <= b; i++) {
            const array = ['graphic-design', 'web-design', 'landing-pages', 'wordpress'];
            const index = Math.floor(Math.random() * array.length);
            const data = array[index];
            const newData = data.replace(/(\s?-\s?)|\s/g, ' ');
            const li = `
                    <li class="work-section__card-holder" data-image='${data}'>
                                <img src="./src/image/amazing-image/img-${i}.png" alt="${i}-img" width='285' height='211'>
                                <div class="work-section__card-content">
                                    <div class="work-section__link-holder">
                                        <a href="#" class="work-section__link">
                                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M20.5973 0.997952C31.8653 0.997952 40.9999 9.95227 40.9999 20.9979C40.9999 32.0432 31.8653 40.9979 20.5973 40.9979C9.3292 40.9979 0.194626 32.0432 0.194626 20.9979C0.194626 9.95227 9.3292 0.997952 20.5973 0.997952Z"
                                                    fill="#18CFAB" />
                                                <rect x="14" y="16" width="12" height="11" fill="white" />
                                            </svg>
                                        </a>
                                        <a href="#" class="work-section__link">
                                            <svg width="43" height="42" viewBox="0 0 43 42" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect x="1" y="1" width="41" height="40" rx="20" stroke="#18CFAB" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M26.9131 16.7282L25.0948 14.8913C24.2902 14.0809 22.983 14.0759 22.1768 14.8826L20.1592 16.8926C19.3516 17.6989 19.3482 19.0103 20.1505 19.8207L21.3035 18.689C21.1868 18.3284 21.3304 17.9153 21.6159 17.6295L22.8995 16.3519C23.3061 15.9462 23.9584 15.9491 24.3595 16.3543L25.4513 17.458C25.8528 17.8628 25.8511 18.5171 25.447 18.9232L24.1634 20.2024C23.8918 20.473 23.4461 20.6217 23.1002 20.5263L21.9709 21.6589C22.7745 22.4718 24.0803 22.4747 24.8889 21.6684L26.9039 19.6592C27.7141 18.8525 27.7167 17.5398 26.9131 16.7282ZM19.5261 24.0918C19.6219 24.4441 19.4686 24.8997 19.1909 25.1777L17.9923 26.3752C17.5807 26.7845 16.916 26.7833 16.5067 26.369L15.393 25.2475C14.9847 24.8349 14.9873 24.1633 15.3982 23.7547L16.598 22.5577C16.8903 22.2661 17.3104 22.1202 17.6771 22.2438L18.8335 21.0715C18.0149 20.2462 16.6825 20.2421 15.8606 21.0632L13.9152 23.0042C13.0923 23.8266 13.0884 25.1629 13.9065 25.9886L15.7582 27.8618C16.576 28.6846 17.9072 28.6912 18.7311 27.8701L20.6765 25.9287C21.4985 25.1054 21.5024 23.7717 20.6855 22.9443L19.5261 24.0918ZM19.2579 23.5631C18.9801 23.8419 18.5343 23.8411 18.2618 23.5581C17.9879 23.2743 17.9901 22.8204 18.2661 22.5399L21.5907 19.1611C21.8668 18.8823 22.3117 18.8831 22.5851 19.164C22.8605 19.4457 22.8588 19.9009 22.5817 20.183L19.2579 23.5631Z"
                                                    fill="#1FDAB5" />
                                            </svg>
        
                                        </a>
                                    </div>
                                    <p class="work-section__card-title">creative design</p>
                                    <p class="work-section__card-title-desctiption">${newData}</p>
                                </div>
                            </li>
                    `;
            imgWrapper.innerHTML += li;
        }
        for (const el of imgWrapper.children) {
            el.style.display = 'block';
        }
    }
    image(1, 12)
    const ul = document.querySelector('.work-section__nav-holder');
    ul.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            let active = document.querySelector('.work-section__active');
            active.classList.remove('work-section__active');
            e.target.classList.add('work-section__active');
        } else if (e.target.tagName !== 'LI') {
            return;
        }
        for (const child of imgWrapper.children) {
            if (e.target.dataset.btn === 'all') {
                child.style.display = 'block';
            } else if (e.target.dataset.btn === child.dataset.image) {
                child.style.display = 'block';
            } else {
                child.style.display = 'none';
            }
        }
    })
    let btn = document.querySelector('.work-section__btn');
    let countClick = 0;
    let imageStart = 13;
    let imageFinish = 24;
    btn.addEventListener('click', (e) => {
        countClick++;
        btn.style.display = 'none';
        let loader = document.querySelector('.loader');
        loader.style.display = 'block';
        setTimeout(() => {
            loader.style.display = 'none';
            if (countClick < 2) {
                btn.style.display = 'block';
            }
        }, 2000);
        setTimeout(() => {
            image(imageStart, imageFinish)
            imageStart += 12;
            imageFinish += 12;
        }, 2000);
    })
}
workSection();





