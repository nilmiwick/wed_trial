const weddingDate=new Date("December 12, 2026 16:00:00").getTime();
const whatsappNumber="94704110431";
function sendRSVP(){const name=document.getElementById("name").value.trim();if(!name){alert("Please enter your name.");return}
const attendance=document.getElementById("attendance").value,guests=document.getElementById("guests").value;
const message=`Hi Nilmi & Nilan! 💕\n\nI'd like to RSVP for your wedding.\n\nName: ${name}\nAttendance: ${attendance}\nNumber of guests: ${guests}\n\nThank you for the invitation! ❤️`;
window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,"_blank")}
function update(){const d=weddingDate-Date.now(),c=document.getElementById("countdown");if(d<=0){c.innerHTML="<p>Today is the day! ❤️</p>";return}
days.textContent=String(Math.floor(d/864e5)).padStart(2,"0");hours.textContent=String(Math.floor(d/36e5)%24).padStart(2,"0");minutes.textContent=String(Math.floor(d/6e4)%60).padStart(2,"0");seconds.textContent=String(Math.floor(d/1e3)%60).padStart(2,"0")}update();setInterval(update,1000);