
// console.log('my script is connected');

// part 1: getting started
let mainEl = document.querySelector('main');
console.log(mainEl);

mainEl.style.backgroundColor = "#4a4e4d";
mainEl.innerHTML = "<h1> DOM Manipulation </h1>";
mainEl.style.textAlign = "center";

// part 2: creating a menu bar
let topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "#0e9aa7"; 

//part 3: adding menu buttons
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

menuLinks.forEach((link) => {
    let linkEl = document.createElement("a");
    linkEl.href = link.href;
    linkEl.textContent = link.text;
    topMenuEl.appendChild(linkEl);
});