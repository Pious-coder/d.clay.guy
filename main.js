const saluteTextContainer = document.querySelector(".saluteTextcontainer")
const saluteImgContainer = document.querySelector(".saluteImgContainer")
const authorName = document.querySelector(".name")
const jobTitleContainers = document.querySelectorAll(".jobTitleContainer")
const jobTitles = document.querySelectorAll(".jobTitle")
const projectsTitle = document.querySelector(".projectsTitle")
const projectImgs = document.querySelectorAll(".projectImg")

window.addEventListener ("scroll", ()=>{
    let offsetY = window.scrollY
    saluteTextContainer.style.transform= `translateY(${offsetY * 0.1}px)`
    saluteImgContainer.style.transform= `translate(${offsetY * 0.4}px, ${offsetY * 0.27}px)`
    authorName.style.transform= `translateX(calc(90vh - ${offsetY}px))`
    jobTitleContainers[0].style.backgroundPositionY = `${offsetY * 0.5}px`
    jobTitleContainers[1].style.backgroundPositionY = `${-offsetY * 0.5}px`
    jobTitles[0].style.transform = `translateX(calc(200vh - ${offsetY}px))`
    jobTitles[1].style.transform = `translateX(calc(-300vh + ${offsetY}px))`
    projectsTitle.style.transform = `translateX(calc(400vh - ${offsetY}px))`
    projectImgs[0].style.transform = `translateX(calc(500vh - ${offsetY}px))`
    projectImgs[1].style.transform = `translateX(calc(600vh - ${offsetY}px))`
    projectImgs[2].style.transform = `translateX(calc(750vh - ${offsetY}px))`
})