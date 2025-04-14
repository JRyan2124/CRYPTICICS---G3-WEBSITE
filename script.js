function hamburg() {
    document.querySelector('.dropdown').style.transform = 'translateY(0)';
}

function cancel() {
    document.querySelector('.dropdown').style.transform = 'translateY(-500px)';
}

   // -------------------RENDERING CONTACT CONTENTS------------------//
   let contactContentHTML = `
   <div class="wrapper">
       <form action="">
         <h1 class="heading">CONTACT <span class="highlight-txt">US</span></h1>
         <p class="subheading">For inquiries. You can send us an email</p>             
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
