const btn = document.querySelector(".btn")
const head = document.querySelector(".head")
const penny = document.querySelector(".penny")
const audio = document.querySelector(".spooky-audio")
const laugh = document.querySelector(".laugh")

btn.addEventListener("click",(e) => {
    if(btn.innerHTML == "💡LIGHTS ON"){
        btn.innerHTML = "🎈LIGHTS OFF"
    }
    else{
        btn.innerHTML = "💡LIGHTS ON"
    }
    if(penny.style.display == "block"){
        penny.style.display = "none"
    }
    else{
        penny.style.display="block"
    }
    if(head.innerHTML == "Don't turn off the lights 💡"){
        head.innerHTML="You shouldn't have done that!🎃"
    }
    else{
        head.innerHTML="Don't turn off the lights 💡"
    }
    laugh.volume = 1
    audio.volume = 1
    if(btn.innerHTML=="🎈LIGHTS OFF"){
    laugh.play()
    audio.play()    
    }
    else{
        laugh.pause()
        audio.pause()
    }
})