function countdown() {
    const endDate = new Date("2024-04-22T23:59:59").getTime(); // atvlis wertili
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


  //on scorll nav height change
  window.addEventListener("scroll",function(){
    const nav = document.querySelector('.navigation')
    if (window.scrollY >= 50) { 
      nav.style.height = '70px'; 
    } else {
      nav.style.height = '100px'; // Default height when not scrolled
    }
  })




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



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});