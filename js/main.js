const btn = document.querySelector(".btn")
const head = document.querySelector(".head")
const penny = document.querySelector(".penny")
const audio = document.querySelector(".spooky-audio")
const laugh = document.querySelector(".laugh")

btn.addEventListener("click",(e) => {
    btn.innerHTML="🎈LIGHTS OFF"
    penny.style.display = "block"
    head.innerHTML="You shouldn't have done that!🎃"
    laugh.volume = 1
    audio.volume = 1
    laugh.play()
    audio.play()    
})