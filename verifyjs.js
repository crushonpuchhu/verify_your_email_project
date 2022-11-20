document.querySelectorAll(".otps")[0].focus();
document.querySelector(".otps").addEventListener("keydown",()=>{
setTimeout(()=>{    document.querySelectorAll(".otps")[1].focus()},100)
})