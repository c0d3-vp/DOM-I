const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navLinks = document.querySelectorAll("nav a");
navLinks.forEach((navItem, index) => {
  navItem.innerText = siteContent["nav"][`nav-item-${index + 1}`]
})

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].style.color = "green";
}


let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])


let header = document.querySelector("h1");
header.innerHTML = siteContent["cta"]["h1"].split(' ').join('<br>')

 
let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"]

let mainContent = siteContent["main-content"]
let contact = siteContent["contact"]

let h4 = document.querySelectorAll("h4");
h4[0].textContent = mainContent["features-h4"]
h4[1].textContent = mainContent["about-h4"]
h4[2].textContent = mainContent["services-h4"]
h4[3].textContent = mainContent["product-h4"]
h4[4].textContent = mainContent["vision-h4"]
h4[5].textContent = contact["contact-h4"]

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', mainContent["middle-img-src"])

let p = document.querySelectorAll("p");
p[0].textContent = mainContent["features-content"]
p[1].textContent = mainContent["about-content"]
p[2].textContent = mainContent["services-content"]
p[3].textContent = mainContent["product-content"]
p[4].textContent = mainContent["vision-content"]
p[5].textContent = contact["address"]
p[6].textContent = contact["phone"]
p[7].textContent = contact["email"]

p[5].innerHTML = siteContent['contact']['address'].split('t S').join('t<br>S')

let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"]

let button2 = document.createElement('button');
button2.innerHTML = 'Do Something';
const footer2 = document.querySelector('footer');
footer2.appendChild(button2);


button2.addEventListener('click', ()=>{
  h4[0].style.color = "blue";
  h4[1].style.color = "red";
  h4[2].style.color = "pink";
  h4[3].style.color = "green";
  h4[4].style.color = "grey";
  h4[5].style.color = "orange";
})

//.appendChild()
const nav = document.querySelector('nav');
let a = document.createElement('a');
a.textContent = "Goodbye";
nav.appendChild(a);

//.prepend()
let a2 = document.createElement('a');
a2.textContent = "Hello";
nav.prepend(a2);