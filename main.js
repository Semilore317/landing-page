const featuresArrow = document.querySelector('#features-arrow');
const companyArrow = document.querySelector('#company-arrow');

const feature = document.querySelector('#features');
const featureDropDown = document.querySelector('.features-dropdown');

const company = document.querySelector('#company');
const companyDropDown = document.querySelector('.company-dropdown');
console.log(company, companyDropDown);

function featuresAppear(){
    featureDropDown.style.display = 'flex';
    featureDropDown.style.transform = 'translateY(0)';
    featureDropDown.style.animationName = 'appear';

    //change the arrow
    featuresArrow.src = "upload.png";
}
 
function disappear(){
    featureDropDown.display = 'none';
    companyDropDown.display = 'none';
}


function featuresDisappear(){
    featureDropDown.style.display = 'none'
    featureDropDown.style.transform = 'translateY(8vh)';
    featureDropDown.style.animationName = 'disappear';
    //change the arrow
    featuresArrow.src = "down-arrow.png"
}


function stay() {
    featureDropDown.style.display = 'flex';
    featureDropDown.style.transform = 'translateY()';
    featureDropDown.style.animationName = '';
}

function companyAppear(){
    companyDropDown.style.display = 'flex';
    companyDropDown.style.transform = 'translateY(0)';
    companyDropDown.style.animationName = 'appear';
    
    //change the arrow
    companyArrow.src = "upload.png";
}

function companyDisappear(){
    companyDropDown.style.display = 'none'
    companyDropDown.style.transform = 'translateY(8vh)';
    companyDropDown.style.animationName = 'disappear';

    //change the arrow
    companyArrow.src = "down-arrow.png";
}

function companyStay() {
    companyDropDown.style.display = 'flex';
}

//the code is still buggy
//the dropdown menu is not working properly


//maintain aspect ratio of the image
const imageContainer = document.querySelector('.img-container');
const imageContainerImg = document.querySelector('.img-container img');
function aspectRatio(){
    if (window.innerWidth >= 869) {
    const height = imageContainer.offsetHeight;
    console.log(`height = ${height}`);
    const width = height * (9 / 10);
    console.log(`width = ${width}`);
    imageContainer.style.width = `${width}px`;
    imageContainer.style.height = `${height}px`;
    console.log('done');    
    }
    else if (window.innerWidth <= 869) {
        return 'the screen is mobile';
        imageContainerImg.src = 'images/image-hero-mobile.png';
    }
}
//add the event listener
window.addEventListener('load', aspectRatio);
window.addEventListener('resize', aspectRatio);

//Media queries
const imageToBeChanged = document.querySelector(".img-container img");
//change the image src when the breakpoint is reached

function changeImg() {
    if (window.innerWidth <= 869) {
        imageToBeChanged.src = "images/image-hero-mobile.png";

        //delete line-break
        const lineBreak = document.querySelector('.text-container h1');
        lineBreak.innerHTML = 'Make remote work';
    }  else if(window.innerWidth >= 869){
        imageToBeChanged.src = "images/image-hero-desktop.png"
    }
        //Maintain aspect ratio
        if (window.innerWidth <= 869) {
            const width = imageContainer.offsetWidth;
            console.log(`width = ${width}`);
            const height = width * (4 / 3);
            console.log(`height = ${height}`);
            imageContainer.style.width = `${width}px`;
            imageContainer.style.height = `${height}px`;
            console.log('done');    
            }
            else{
                console.log('the screen is large');
            }
}
window.addEventListener('DOMContentLoaded',changeImg);
window.addEventListener('reload',changeImg);
window.addEventListener('load', changeImg);
window.addEventListener('resize', changeImg);


//Make the nav slide in

navWrapper = document.querySelector('.nav-wrapper');
burger = document.querySelector('.burger-div');
function slideIn() {
    //navWrapper.style.transform = `translateX(0px)`;
    navWrapper.classList.toggle("slide-in");
    burger.classList.toggle('burger-x');

    console.log('slide');
}
