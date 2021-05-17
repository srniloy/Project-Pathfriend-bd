// ============= Home slider======================

const slides = document.querySelectorAll('.slide-common');
const slidesContant = document.querySelectorAll('.slide-common .slide-contant');
const sliderDots = document.querySelector('.home-slide-dots');

let numberOfCurrentSlide = 0;
window.onload = addDots();


function addDots(){
    for(let i=0;i<slides.length;i++){
        const dot = document.createElement('div'); 
        dot.classList.add('dots');
        dot.id = i;
        dot.setAttribute("onclick","changeForDot(this)");
        sliderDots.appendChild(dot);
    }
    sliderDots.children[0].classList.add('active-dot');
}

function changeForDot(element){
    numberOfCurrentSlide = element.id;
    slideChange();
    resetTimerOfHomeSlider();
}


function animiOfHomeSlide(){
    nextSlide();

}
let timerOfHomeSlider = setInterval(animiOfHomeSlide,6000);

function resetTimerOfHomeSlider(){
    clearInterval(timerOfHomeSlider);
    timerOfHomeSlider = setInterval(animiOfHomeSlide,6000);
}


function nextSlide(){
    if(numberOfCurrentSlide >= slides.length -1){
        numberOfCurrentSlide = 0;
        slideChange();
        resetTimerOfHomeSlider();
    }else{
        numberOfCurrentSlide++;
        slideChange();
        resetTimerOfHomeSlider();
    }
}

function prevSlide(){
    if(numberOfCurrentSlide == 0){
        numberOfCurrentSlide = slides.length -1;
        slideChange();
        resetTimerOfHomeSlider();
    }else{
        numberOfCurrentSlide--;
        slideChange();
        resetTimerOfHomeSlider();
    }
}

function slideChange(){
    for(let i=0;i<slides.length;i++){
        slides[i].style.opacity = 0;
        slidesContant[i].style.opacity = 0;
        sliderDots.children[i].classList.remove('active-dot');
    }
    slides[numberOfCurrentSlide].style.opacity = 1;
    slidesContant[numberOfCurrentSlide].style.opacity = 1;
    sliderDots.children[numberOfCurrentSlide].classList.add('active-dot');
}

const allDots = document.querySelectorAll('dots');
// allDots.forEach((item,index) => {
//     item.addEventListener('click',()=>{
//         console.log("worked");
//     });
// });
// sliderDots.children[0].style.background = '#362642';
// sliderDots.children.forEach((item,index) => {
//     item.addEventListener('click',()=>{
//         console.log("worked");
//     });
// });






const homeSlidesBox = document.querySelector('.home-slides-box');

let isDown = false;
let startX;


homeSlidesBox.addEventListener('mousedown',(e)=>{
    isDown = true;
    startX = e.pageX;
});
homeSlidesBox.addEventListener('mousemove',(e)=>{
    e.preventDefault();
});
homeSlidesBox.addEventListener('mouseup',(e)=>{
    isDown = false;
    const pointOfMouseUp = e.pageX;
    const walk = pointOfMouseUp - startX;
    //console.log(walk);
    if(walk > 0){
        prevSlide();
    }
    else if(walk < 0){
        nextSlide();
    }
});







// ============= Home slider======================



//================= Packages items animation=============

const packageItemBox = document.querySelectorAll('.packages-item');
const packageItemImage = document.querySelectorAll('.packages-image img');
const packageHeadingBox = document.querySelectorAll('.packages-heading');

packageItemBox.forEach((item,index) =>{
    
    item.addEventListener('mouseover',()=>{
        console.log(index);
        packageItemImage[index].style.transform = "scale("+1.1+")";
        packageHeadingBox[index].style.transform = "translateY(-"+10+"px)";
        packageHeadingBox[index].style.boxShadow = 0+" "+10+"px "+5+"px rgba("+34+","+.33+","+.33+","+0.08+")";
    
    });
    item.addEventListener('mouseout',()=>{
        packageHeadingBox[index].style.transform = "translateY("+0+"px)";
        packageHeadingBox[index].style.boxShadow = "none";
        packageItemImage[index].style.transform = "scale("+1+")";
    
    });
});



//================= Packages items animation=============





