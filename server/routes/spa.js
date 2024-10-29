// spa.js

const routes = {
    "/": "/login.html",
    "/login": "/login.html",
    "/todo": "/todo.html",
    "/edit_todo": "/edit_todo.html",
    "/404": "/404.html"
};

// Function to handle navigation
function route(event) {
    event.preventDefault();
    const path = event.target.getAttribute("href");
    window.history.pushState({}, "", path);
    handleLocation();
}

// Load the page content based on the path
async function handleLocation() {
    const path = window.location.pathname;
    const route = routes[path] || routes["/404"];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("app").innerHTML = html;
}




// Handle back/forward browser navigation
window.onpopstate = handleLocation;
window.route = route;

// Initial load
handleLocation();
