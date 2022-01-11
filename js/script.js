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

// filter portfolio items 
const filterBtnsContainer = document.querySelector(".portfolio-filter");
filterBtnsContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("portfolio-filter-btn") &&
    !e.target.classList.contains("active")){
        filterBtnsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        filterItems(e.target);
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
            filterItems(e.target);
        }
    });
}
// filter active category portfolio items
filterItems(document.querySelector(".portfolio-filter-btn.active"));