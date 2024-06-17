

let sliderData = [
    { imageSrc: './assets/images/1.png' },
    { imageSrc: './assets/images/2.png' },
    { imageSrc: './assets/images/3.png' },
];


for (let i = 0; i < sliderData.length; i++) {
    createSliderContent(sliderData[i].imageSrc, sliderData[i].titleText, sliderData[i].paragraphText, i);
}



function createSliderContent(imageSrc, titleText, paragraphText, id) {
    // Get the existing "slider" div
    var slider = document.getElementById('slider');

    // Create the slider content using JavaScript
    var sliderContent = document.createElement('div');
    sliderContent.className = 'myslide has-before hover:shine ';



    var image = document.createElement('img');
    image.src = imageSrc;
    image.className = "imgg";
    image.id = `img-${id}`;
    // image.style.width = '100%';
    // image.style.height = '100%';

    sliderContent.appendChild(image);

    // Append the slider content to the existing "slider" div
    slider.appendChild(sliderContent);
}





const myslide = document.querySelectorAll('.myslide');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 7000);

function autoSlide() {
    counter += 1;
    slidefun(counter);
}
function plusSlides(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}
function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoSlide, 7000);
}

function slidefun(n) {

    let i;
    for (i = 0; i < myslide.length; i++) {
        document.getElementById(`img-${i}`).classList.remove('Fade_animation');
        myslide[i].style.display = "none";
    }

    if (n > myslide.length) {
        counter = 1;
    }
    if (n < 1) {
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    document.getElementById(`img-${counter - 1}`).classList.add('Fade_animation');

}
