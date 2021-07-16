
//link swipe in the section from links & icons
let tabs = document.querySelectorAll(".nav-left .navcontent ul li , .nav-left .navcontent .icons i");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll("section");
let divsArray = Array.from(divs);
tabsArray.forEach((ele)=>{
  ele.addEventListener("click",function(e){
    tabsArray.forEach((ele)=>{
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active"); 
    divsArray.forEach((div)=>{
      div.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display= "block";
  });
});
//link swipe in the section Portfolio from links in this
let links = document.querySelectorAll(".portfolio .contentall .nav-portfolio ul li");
let linksarr = Array.from(links);
let images = document.querySelectorAll(".portfolio .contentall .images img");

linksarr.forEach((li) =>{
    li.addEventListener("click" , function(e){
        switch (e.currentTarget.dataset.val){
            case "All":
                images[0].style.display = "block";
                images[1].style.display = "block";
                images[2].style.display = "block";
                images[3].style.display = "block";
                break;
            case "Ui/Ux":
                images[0].style.display = "none";
                images[1].style.display = "none";
                images[2].style.display = "block";
                images[3].style.display = "block";
                break;
            case "Website":
                images[0].style.display = "block";
                images[1].style.display = "block";
                images[2].style.display = "none";
                images[3].style.display = "none";
                break;
            case "Graphic":
                images[0].style.display = "block";
                images[1].style.display = "none";
                images[2].style.display = "none";
                images[3].style.display = "block";
                break;
            case "Creative":
                images[0].style.display = "none";
                images[1].style.display = "block";
                images[2].style.display = "block";
                images[3].style.display = "none";
                break;
        } 
        linksarr.forEach((l) =>{
            l.classList.remove("active");
        });
        li.classList.add("active"); 
    });
});