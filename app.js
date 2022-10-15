const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");
 
let a = 1;

plus.addEventListener("click", () => {
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
});
minus.addEventListener("click", () => {
    if(a > 1){
        a--;
    }else{
        return a;
    }
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;

});

const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector("header")
    header.addEventListener("click", () =>{
        item.classList.toggle("open")
        let description = item.querySelector(".description")
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`
            item.querySelector("i").classList.replace("fa-plus", "fa-minus")
        }else{
            description.style.height = "0px"
            item.querySelector("i").classList.replace("fa-minus", "fa-plus")
        }
        removeOpen(index)
        })
    console.log(header);
})
function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open")
            let des = item2.querySelector(".description")
            des.style.height = "0px"
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus")
        }

    })
}

const circle = document.querySelector(".circles");
circle.addEventListener("click", (e)=>{
    let target = e.target;
    if(target.classList.contains("circle")){
        circle.querySelector(".active").classList.remove("active")
        target.classList.add("active");
        document.querySelector(".product-image .active").classList.remove("active");
        document.querySelector(`.product-image .${target.id}`).classList.add("active");

    }
})

const button = document.querySelector(".button button"),
          toast = document.querySelector(".toast"),
          progress = document.querySelector(".progress"),
          closeIcon = document.querySelector(".close"),
          badge = document.querySelector(".badge")

button.addEventListener("click", () => {
    toast.classList.add("active")
    badge.classList.add("active")
    badge.innerText= a;
    progress.classList.add("active")
    num.innerHTML = "01"
    setTimeout(()=>{
        toast.classList.remove("active")
    }, 5000);
    setTimeout(()=>{
        progress.classList.remove("active")
    }, 5300)
})
closeIcon.addEventListener("click", () => {
    toast.classList.remove("active")
    num.innerHTML = "01"
    setTimeout(()=>{
        progress.classList.remove("active")
    }, 300)
})

