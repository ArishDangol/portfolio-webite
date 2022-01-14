// bg animation effect
function bgAnimationItems(){
    const rows = 7, cols =10;
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            const div = document.createElement("div");
            div.className = `col-${j+1}`;
            document.querySelector(".bg-animation-effect").appendChild(div);
        }
    }
}
bgAnimationItems();

// toggle body scrolling
function toggleBodyScrolling(){
    document.body.classList.toggle("hide-scrolling");
}

// filter portfolio items 
 const filterBtnsContainer = document.querySelector(".portfolio-filter");
 let portfolioItems;
 filterBtnsContainer.addEventListener("click", (e) => {
         if (e.target.classList.contains("portfolio-filter-btn") &&
             !e.target.classList.contains("active")) {
            filterBtnsContainer.querySelector(".active").classList.remove("active");
             e.target.classList.add("active");
             toggleBodyScrolling();
             document.querySelector(".filter-status").classList.add("active");
             document.querySelector(".filter-status p").innerHTML =`filtering <span>${e.target.innerHTML}</span> works`;
             setTimeout(()=>{
                filterItems(e.target);
             },400);
             setTimeout(()=>{
                document.querySelector(".filter-status").classList.remove("active");
                toggleBodyScrolling();
             },800);
         }
     });

function filterItems(filterBtn){
    const selectedCategory = filterBtn.getAttribute("data-filter");
    document.querySelectorAll(".portfolio-item").forEach((item) =>{
        const category = item.getAttribute("data-category").split(",");
        if(category.indexOf(selectedCategory) !== -1 || selectedCategory === "all"){
             item.classList.add("show");
      }
         else{
             item.classList.remove("show");
         }
     });
     portfolioItems = document.querySelector(".portfolio-item.show");
 }
// filter active category portfolio items
filterItems(document.querySelector(".portfolio-filter-btn.active"));

// Portfolio item details popup
let portfolioItemIndex;
document.addEventListener("click",(e) =>{
    if(e.target.closest(".portfolio-item")){
        const currentItem = e.target.closest(".portfolio-item");
        portfolioItemIndex = Array.from(portfolioItems).indexOf(currentItem);
        console.log(portfolioItemIndex);
    }
});