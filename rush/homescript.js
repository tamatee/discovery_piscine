let navmenu2 = document.querySelector(".navmenu2")
        let hamburger = document.querySelector(".hamburger")
        let navmenuli = document.querySelectorAll(".navmenu2 li")
        hamburger.addEventListener("click", ()=> {
        hamburger.classList.toggle("active");
        navmenu2.classList.toggle("active");    
    })
        navmenuli.forEach(n => n.addEventListener("click", () =>{
        hamburger.classList.remove("active");
        navmenu2.classList.remove("active");  
    }))


setInterval(alert("Don't look at me so long! \n You must rest your eyes just some 20 seconds."),120000)

let enlang = true;
let thlang = false;
let changelang = () => {
    enlang = !enlang
    //thlang = !thlang
    let th = document.getElementsByClassName("thlang")
let en = document.getElementsByClassName("enlang")
if(enlang == true){
    
    for(let i = 0; i< th.length; i++){
        document.getElementsByClassName("enlang")[i].style = "display:block;"
        document.getElementsByClassName("thlang")[i].style = "display:none;"
        console.log("enlang")
    }
}
else{
    for(let i = 0; i< th.length; i++){
        document.getElementsByClassName("enlang")[i].style = "display:none;"
        document.getElementsByClassName("thlang")[i].style = "display:block;"
        console.log("thlang")
    }
}
}
