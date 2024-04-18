function countdown() {
    const endDate = new Date("2024-12-31T23:59:59").getTime(); // Change this to your desired end date
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

  const popup = document.querySelector(".popup")
  const registerBtn = document.querySelector("#registerbtn")
  const closePopup = document.querySelector(".exit-popup")

registerBtn.addEventListener("click",()=>{

popup.classList.add('open-popup')
})
closePopup.addEventListener("click",()=>{
  popup.classList.remove('open-popup')
})