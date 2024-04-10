
function toggleNav(){
    var navbar = document.getElementById('navbar');

    if(navbar.className === "nav-bar"){
        navbar.className += " responsive";
    } else {
        navbar.className = "nav-bar";
    }
}