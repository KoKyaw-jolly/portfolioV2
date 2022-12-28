function themeClick() {
    document.body.classList.toggle("dark");
}

var portfolioModelImage = document.getElementById("porfolioModelImage");
var portfolioModelHeader = document.getElementById("porfolioModelHeader");
var portfolioModelContent = document.getElementById("porfolioModelContent");
var portfolioModelGO = document.getElementById("portfolioModelGo");

document.getElementById("foodBtn").addEventListener("click",function(e){
    portfolioModelImage.src= "assets/images/food shop.png";
    portfolioModelHeader.innerHTML = "Food Deli App";
    portfolioModelContent.innerHTML = "A sample wireframe prototype created with Figma for a Demo Food Delivery application. To get the best user experience, recommend using a laptop or computer.";
    portfolioModelGO.setAttribute("href", "https://www.figma.com/proto/U973M3HIffYx0DZeGowKQS/Food-Deli-App?page-id=0%3A1&node-id=3%3A43&viewport=488%2C669%2C0.52&scaling=scale-down&starting-point-node-id=3%3A43");
});

document.getElementById("bookBtn").addEventListener("click",function(e){
    portfolioModelImage.src= "assets/images/book.png";
    portfolioModelHeader.innerHTML = "Onile Book Store";
    portfolioModelContent.innerHTML = "Using HTML, CSS, Bootstrap, JS, jQuery, PHP, and MySql, this project was created. Onile Book Store is a project that has Client View and Admin Panel, CRUD feature, section and login features and many other feature. However, this project is a small, simple, and demo. Checkout is available on GitHub.";
    portfolioModelGO.setAttribute("href", "https://github.com/KoKyaw-jolly/TheBook");
});

function cvDownload() {
    if (confirm ('Download file?')) {
        document.getElementById("downloadCV").setAttribute("download","assets/images/book.png");
    }

    return false;
}