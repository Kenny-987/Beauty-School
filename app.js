const bars = document.querySelector(".bars");
const nav = document.querySelector("nav");
const imageContanerBtn = document.querySelector(".gallery-btn")
const imageContaner = document.querySelector(".allimages")
const gallerIntro = document.querySelector('.images')
const closeSlider = document.querySelector(".close")
const sliderContainer = document.querySelector(".slider-container")
const galleyImages = document.querySelectorAll("#gallery-img")
const modalImage = document.querySelector("#modalimage")




bars.onclick = () => {
  nav.classList.toggle("active");
};

imageContanerBtn.addEventListener("click",(e)=>{
  imageContaner.classList.toggle("showallimages")
  if(imageContaner.classList.contains("showallimages")){
    imageContanerBtn.textContent = "Hide Images"
    gallerIntro.style.display='none'
  }else{
    gallerIntro.style.display='flex'
    imageContanerBtn.textContent = "Show All Images"
  }
})

galleyImages.forEach((image)=>{
  image.addEventListener('click',(e)=>{
    console.log(e.target.src)
    sliderContainer.classList.toggle("showslider")
    modalImage.src = e.target.src
    console.log(modalImage)
  })
})

sliderContainer.addEventListener('click',()=>{
  sliderContainer.classList.toggle("showslider")
})

closeSlider.addEventListener("click",()=>{
  sliderContainer.classList.add("showslider")
})
