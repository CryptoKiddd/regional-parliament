function countdown() {
    const endDate = new Date("2024-04-25T23:59:59").getTime(); // atvlis wertili
    const now = new Date().getTime();
    const distance = endDate - now;
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("days").textContent = formatTime(days);
    document.getElementById("hours").textContent = formatTime(hours);
    document.getElementById("minutes").textContent = formatTime(minutes);
    document.getElementById("seconds").textContent = formatTime(seconds);
  }
  
  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }
  
  setInterval(countdown, 1000);
  const nav = document.querySelector('.navigation')
  const navWrapper = document.querySelector('.nav-wrapper')



  //on scorll nav height change

if (window.innerWidth > 930){
  window.addEventListener("scroll",function(){
    if (window.scrollY >= 70) { 
      navWrapper.style.height = '70px'; 
    } else {
      navWrapper.style.height = '100px'; // Default height when not scrolled
    }
  })
}




  //popup

  const popup = document.querySelector(".popup")
  const registerBtn = document.querySelector("#registerbtn")
  const closePopup = document.querySelector(".exit-popup")

registerBtn.addEventListener("click",()=>{

popup.classList.add('open-popup')
})
closePopup.addEventListener("click",()=>{
  popup.classList.remove('open-popup')
})



const baseUrl = "http://127.0.0.1:5500/";

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1); // Remove the '#' from the href
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });

      // Update the URL
      const newUrl = baseUrl + this.getAttribute("href");
      history.pushState({}, '', newUrl);
    }
  });
});




const carouselBtns = document.querySelectorAll(".carousel-btn")
const carousel = document.querySelector(".carousel")
carouselBtns[0].classList.add('active-bullet')
carouselBtns.forEach((btn,idx)=>{
  btn.addEventListener("click", function(){
    carouselBtns.forEach(bullet => {
      bullet.classList.remove("active-bullet");
    });

    // Add active class to clicked bullet
    btn.classList.add("active-bullet");


    carousel.style.transform = `translateY(-${idx * 100 }%)`;

  })
  

})

const openBtn = document.querySelector(".openbtn")

openBtn.addEventListener('click',function(){
  this.classList.toggle('active')
  nav.classList.toggle('toggle-nav')
})

const lang = document.querySelector('.nav-langs')

lang.addEventListener('click',function(){
  this.textContent === "eng" ? this.textContent = "ქარ":this.textContent = "eng"
})