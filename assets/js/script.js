'use strict';

var script = document.createElement("script");
script.src = 'https://smtpjs.com/v3/smtp.js'; 
document.head.appendChild(script); 


/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header sticky & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 150) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

// addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScrolledPos = window.scrollY;
}

// addEventOnElem(window, "scroll", headerSticky);



/**
 * scroll reveal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);



function smoothScrollToSection(sectionId) {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' }); // Scrolls smoothly to the element
  }
}

function sendMail(){ 
  var email = document.getElementById('email').value;
  var name = document.getElementById('name').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  Email.send({
      Host : "smtp.elasticemail.com",
      Username: "",
      Password: "",
      To: "",
      From: "",
      Subject : subject.toString(),
      Body : "Hey, There <br>"+name.toString()+" This side.<br>Email: "+email.toString()+"<br><br>"+message.toString()
  }).then(
    message => {
      alert("Email has been succesfully sent!");
  });
}

window.onload = function () {
  var wpMsg = document.getElementById('wp-msg');
  if (wpMsg) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      wpMsg.setAttribute('href', 'https://wa.me/WhatsAppNumber?text=hello%2C+I%27m+here+from+your+website.');
    } else {
      wpMsg.setAttribute('href', 'https://web.whatsapp.com/send?phone=WhatsAppNumber&text=hello%2C+I%27m+here+from+your+website.');
    }
  } else {
    console.error('Element with id "wp-msg" not found');
  }
}