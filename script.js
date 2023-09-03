window.addEventListener("load", () =>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".page-loader").style.display = "None";
    },2000);
});

/* Toggle Navbar */

const navToggler = document.querySelector(".nav-toggle");
navToggler.addEventListener("click", () =>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}
/* End */

/* Active Section */

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        // console.log(e.target.hash);
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        }, 300);
    }
});

/* End */

// Scroll below
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("scroll-link") && e.target.hash !== "") {
        console.log(e.target.hash);
        document.querySelector(".overlay").classList.add("active");
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        }, 300);
//         // Prevent the default behavior of the anchor link
//         e.preventDefault();
        
//         // Get the target section ID from the href attribute
//         const targetId = e.target.getAttribute("href");
        
//         if (targetId) {
//             // Scroll to the target section
//             const targetSection = document.querySelector(targetId);
//             if (targetSection) {
//                 targetSection.scrollIntoView({ behavior: "smooth" });
//             }
//         }
    }
});

// const scroller = document.querySelector("scroll-below-row");




/* End */

const tabContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");


tabContainer.addEventListener("click",(e)=>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target_attr = e.target.getAttribute("data-target");
        // console.log(target_attr);
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target_attr).classList.add("active");
    }
});



// Function to trigger the animations after a specific delay
function startAnimations() {
    setTimeout(() => {
      document.querySelector(".card:nth-child(2) svg circle:nth-child(2)").style.animation = "anim1 3s linear forwards";
    }, 1000); // Start the first animation after 1000 milliseconds (1 second)
  
    setTimeout(() => {
      document.querySelector(".card:nth-child(3) svg circle:nth-child(2)").style.animation = "anim2 2s linear forwards";
    }, 4000); // Start the second animation after 4000 milliseconds (4 seconds)
  
    setTimeout(() => {
      document.querySelector(".card:nth-child(4) svg circle:nth-child(2)").style.animation = "anim3 2s linear forwards";
    }, 6000); // Start the third animation after 6000 milliseconds (6 seconds)
  
    setTimeout(() => {
      document.querySelector(".card:nth-child(5) svg circle:nth-child(2)").style.animation = "anim4 2s linear forwards";
    }, 8000); // Start the fourth animation after 8000 milliseconds (8 seconds)
  }
  
  // Call the function to start the animations when the page loads
  window.onload = startAnimations;
  