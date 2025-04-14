
    function hamburg() {
    document.querySelector('.dropdown').style.transform = 'translateY(0)';
}

function cancel() {
    document.querySelector('.dropdown').style.transform = 'translateY(-500px)';
}

// Typewriter Effect
const texts = [
    "UI/UX DESIGNER",
    "FRONT-END DEVELOPER",
    "VIDEO EDITOR",
    "VIDEOGRAPHER",
    "PHOTOGRAPHER"
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter      

function scrollUp() {
    window.scrollBy({
        top: -window.innerHeight, // Scroll up by one viewport height
        behavior: 'smooth'
    });
}

function scrollDown() {
    window.scrollBy({
        top: window.innerHeight, // Scroll down by one viewport height
        behavior: 'smooth'
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show or hide the "Back to Top" button based on scroll position
window.addEventListener("scroll", () => {
    const backToTopButton = document.querySelector(".back-to-top");
    if (window.scrollY > window.innerHeight) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// -------------------RENDERING PROJECTS CONTENTS------------------//
const projectsDetails = {
    heading: 'MY PROJECTS',
    subheading: 'Some list of projects I created over the years',
  }

  const projectContentHTML = `
    <div class="wrapper">
      <h1 class="heading">${projectsDetails.heading}</h1>
      <p class="subheading">${projectsDetails.subheading}</p>
      <div class="projects-container d-grid"> </div>
      </div>
    </div>
         
  `;

  const projectsSection = document.querySelector('#projects-section').innerHTML = projectContentHTML;

  const projects = [
    {
      image: "project-image.png",
      title: "AVP PRESIDENTIAL REPORT",
      description: "I am one of the Video Editors, Videographers, and Graphic Designers",
      link: "#"
    },
    {
      image: "project-image(2).png",
      title: "AVP - SOPA",
      description: "I am the Video Editor for the final video and one of the  Videographers, Graphic Designers",
      link: "#"
    },
    {
      image: "project-image(3).png",
      title: "CICS HYMN",
      description: "I am the Video Editor, overseeing the editing and assembly of the music video.",
      link: "#"
    },
    {
      image: "project-image(4).png",
      title: "SPI PROJECT - INFOMERCIAL",
      description: "I was the Director, Videographer, and Video Editor, managing the production and final edit.",
      link: "#"
    },
    {
      image: "project-image(5).png",
      title: "MSC-CICS ACCREDITATION",
      description: "I am one of the Video Editors, Videographers, and Graphic Designers",
      link: "#"
    },
    {
      image: "project-image(6).png",
      title: "REDCROSS APP - PROTOTYPE",
      description: "I am the Front-End Developer, creating the prototype using Figma.",
      link: "#"
    }
  ];

  let projectCardHTML = '';

  projects.forEach(project => {
    projectCardHTML += `
      <div class="project">
          <img src="MYPROJECTS/${project.image}" alt="project-image" class="project-img">
          <div class="project-details">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
          </div>
        </div>
    `
  });

  const projectsContainer = document.querySelector('.projects-container').innerHTML = projectCardHTML;

  
    // -------------------RENDERING CONTACT CONTENTS------------------//
    let contactContentHTML = `
    <div class="wrapper">
        <form action="">
          <h1 class="heading">CONTACT <span class="highlight-txt">ME</span></h1>
          <p class="subheading">For inquiries. You can send me an email</p>             
          <div class="name-input">
            <input type="text" placeholder="First Name" class="fname-input">
            <input type="text" placeholder="Last Name" class="lname-input">
          </div>     
          <input type="email" placeholder="Email Address" >
          <textarea name="" id="" placeholder="Your message here"></textarea>
          <div class="buttons-container">
            <button class="send-btn">Send</button>
            <button class="clear-btn">Clear</button>
          </div>
        </form>
      </div>
  `;

  const contactSection = document.querySelector('#contact-section').innerHTML = contactContentHTML;

