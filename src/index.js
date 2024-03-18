
// console.log('my script is connected');

//part 3: adding menu buttons
// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// part 1: getting started
let mainEl = document.querySelector('main');
console.log(mainEl);

mainEl.style.backgroundColor = "#4a4e4d";
mainEl.innerHTML = "<h1> DOM Manipulation </h1>";
mainEl.classList.add('flex-ctr');

// part 2: creating a menu bar
let topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "#0e9aa7"; 
topMenuEl.classList.add('flex-around');



menuLinks.forEach((link) => {
    let linkEl = document.createElement("a");
    linkEl.href = link.href;
    linkEl.textContent = link.text;
    topMenuEl.appendChild(linkEl);
});

//creating the submenu
let subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = '#3da4ab';
subMenuEl.classList.add('flex-around');

// adding menu interaction
let topMenuLinks = topMenuEl.querySelectorAll("a");
const submenuStates = {};
topMenuEl.addEventListener("click", function(event) {
  event.preventDefault();
  if(!event.target.matches("a")) {
    return;
  }
  const clickedLink = event.target;
  topMenuLinks.forEach((link) => {
    link.classList.remove("active");
  });

  clickedLink.classList.toggle("active");

  const clickedLinkObject = menuLinks.find((linkObject) => linkObject.text === clickedLink.textContent);
 
  if (clickedLinkObject && clickedLinkObject.subLinks) {
    if (submenuStates[clickedLinkObject.text]) {
      subMenuEl.style.top = "0";  
      subMenuEl.innerHTML = ''; 
      submenuStates[clickedLinkObject.text] = false;
    } else {
      subMenuEl.style.top = "100%"; 
      buildSubmenu(clickedLinkObject.subLinks);
      submenuStates[clickedLinkObject.text] = true;
    }
  } else {
    subMenuEl.style.top = "0";
    subMenuEl.innerHTML = ''; 
  }

  if (event.target.textContent === "about") {
    mainEl.innerHTML = "<h1>About</h1>";
  } else {
    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  }
})

// adding submenu interaction
function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = '';
  for (let link of subLinks) {
    let subLinkElement = document.createElement("a");
    subLinkElement.setAttribute("href", link.href);
    subLinkElement.textContent = link.text;
    subMenuEl.appendChild(subLinkElement);
  }
}

subMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if(!event.target.matches("a")) {
    return;
  }
  subMenuEl.style.top = "0";
  topMenuLinks.forEach((link) => {
    link.classList.remove("active");
  });
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
})















