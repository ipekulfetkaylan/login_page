const inputs= document.querySelectorAll(".input-field");
const toggleBtn= document.querySelectorAll(".toggle");
const main= document.querySelector("main");
const bulletsEl= document.querySelectorAll(".bullets span");
const images= document.querySelectorAll(".image");

inputs.forEach((inp)=>{
    inp.addEventListener("focus",()=>{
        inp.classList.add("active");
    });
    inp.addEventListener("blur",()=>{
        if(inp.value != "") return;
        inp.classList.remove("active");
    });
})

toggleBtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        main.classList.toggle("sign-up-mode");
    });
})


function moveSlider(){
    let index= this.dataset.value;
    let currenImage= document.querySelector(`.img-${index}`);
    images.forEach((img)=> img.classList.remove("show"));
    currenImage.classList.add("show")
 
    const textSlider= document.querySelector(".text-group");
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

    bulletsEl.forEach((bull) => bull.classList.remove("active"));
    this.classList.add("active");
}

bulletsEl.forEach((bullet)=>{
    bullet.addEventListener("click", moveSlider);
})