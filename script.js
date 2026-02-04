const weddingDate = new Date("2026-02-25T00:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if(diff < 0){
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "💍 It's Wedding Time 💍";
  }
}, 1000);
function scrollToInvite(){
  document.getElementById("invitation").scrollIntoView({
    behavior: "smooth"
  });
}
function scrollToEvents(){
  document.getElementById("events").scrollIntoView({
    behavior:"smooth"
  });
}
/* MODAL LOGIC */
function openModal(type){
  const modal = document.getElementById("modal");
  const img = document.getElementById("modalImg");
  const name = document.getElementById("modalName");
  const text = document.getElementById("modalText");
if(type === "bride"){
    img.src = "assets/images/bride.png";
    name.innerText = "Divya";
    text.innerText = "Beloved daughter of ... A kind soul with a beautiful heart ❤️";
  }
if(type === "groom"){
    img.src = "assets/images/groom.png";
    name.innerText = "Sravan";
    text.innerText = "Beloved son of ... A man of values, love and commitment ❤️";
  }
modal.style.display = "flex";
}
function closeModal(){
  document.getElementById("modal").style.display = "none";
}