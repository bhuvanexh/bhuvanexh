const BGI = document.querySelectorAll('.BGI')


const eye1 = document.querySelector('.eye1');
const eye2 = document.querySelector('.eye2');
window.addEventListener('mousemove', (e) => {



    let mx = e.x - (window.innerWidth * .7);
    let my = e.y - (window.innerHeight * .35);
    let ex = mx / 80;
    let ey = my / 70;
    eye1.style.transform = `translate(${ex}px , ${ey}px)`
    eye2.style.transform = `translate(${ex}px , ${ey}px)`

    // console.log(e.x, e.y)

    for (let i = 0; i < BGI.length; i++) {
        BGI[i].style.transform = `rotate(${((-1) ** i) * (i * 5) + ex}deg)`

    }
})



const frontA = document.querySelector('.frontA')
const frontend = document.querySelector('.frontend')
const backA = document.querySelector('.backA')
const backend = document.querySelector('.backend')
const moreA = document.querySelector('.moreA')
const more = document.querySelector('.more')

frontA.addEventListener('click', () => {
    frontA.classList.add('active')
    moreA.classList.remove('active')
    backA.classList.remove('active')

    frontend.classList.remove('hide')
    backend.classList.add('hide')
    more.classList.add('hide')
})
backA.addEventListener('click', () => {
    backA.classList.add('active')
    moreA.classList.remove('active')
    frontA.classList.remove('active')

    backend.classList.remove('hide')
    frontend.classList.add('hide')
    more.classList.add('hide')
})
moreA.addEventListener('click', () => {
    moreA.classList.add('active')
    backA.classList.remove('active')
    frontA.classList.remove('active')

    more.classList.remove('hide')
    backend.classList.add('hide')
    frontend.classList.add('hide')
})


const toggle = document.querySelectorAll('.scrollToggle');
const svgs = document.querySelectorAll('.frontSvg');


window.addEventListener('scroll', () => {
    const limit = window.innerHeight / 1.2;
    toggle.forEach(tog => {
        const top = tog.getBoundingClientRect().top;

        if (top < limit) {
            tog.classList.add('show')

        } else {
            tog.classList.remove('show')

        }
        if (toggle[1].classList.contains('show')) {
            svgs.forEach(svg => {
                svg.classList.add('mojFirst')
            })
        } else {
            svgs.forEach(svg => {
                svg.classList.remove('mojFirst')
            })
        }
    })
})



const leftSlider = document.querySelector('.DleftSlider');
const rightSlider = document.querySelector('.DrightSlider');

let counter = 0;
let arrayOfSlides = [
    document.querySelector('#slide1')
    , document.querySelector('#slide2')
    , document.querySelector('#slide3')
    , document.querySelector('#slide4')
    , document.querySelector('#slide5')
    , document.querySelector('#slide6')
    , document.querySelector('#slide7')
    , document.querySelector('#slide8')
]

const slideAssign = (counter, Danim) => {
    arrayOfSlides.forEach(s => {
        s.classList.add('hide');
        arrayOfSlides[counter].classList.remove('DanimR');
        arrayOfSlides[counter].classList.remove('DanimL');
    })
    arrayOfSlides[counter].classList.remove('hide');
    arrayOfSlides[counter].classList.add(`${Danim}`);
}

rightSlider.addEventListener('click', () => {
    console.log('rs click')
    counter++;
    if (counter >= 0 && counter < arrayOfSlides.length) {
        slideAssign(counter, 'DanimR');
    }
    else if (counter < 0) {
        counter = arrayOfSlides.length - 1;
        slideAssign(counter, 'DanimR');
    } else {
        counter = 0;
        slideAssign(counter, 'DanimR');
    }
})
leftSlider.addEventListener('click', () => {
    console.log('ls click')
    counter--;
    if (counter >= 0 && counter < arrayOfSlides.length) {
        slideAssign(counter, 'DanimL');
    }
    else if (counter < 0) {
        counter = arrayOfSlides.length - 1;
        slideAssign(counter, 'DanimL');
    } else {
        counter = 0;
        slideAssign(counter, 'DanimL');
    }
})

