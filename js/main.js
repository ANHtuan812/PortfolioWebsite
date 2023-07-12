let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle("move");
};

// review swiper

var swiper =  new Swiper(".reviews-content",{
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction:true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// email js
function validate(){
    let name =  document.querySelector('.name');
    let email =  document.querySelector('.email');
    let msg =  document.querySelector('.message');
    let sendBtn =  document.querySelector('.send-btn');


    sendBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        }else{
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

function sendmail(name,email,msg){
    emailjs.send("service_93o8zfp","template_0qb3q94",{
        to_name: name,
        from_name: email,
        message: msg,
        });
}

function emptyerror() {
    swal({
        title: "Oh no ....",
        text: "Fields cannot be empty!",
        icon: "error",
      });
}

function success() {
    swal({
        title: "Email sent successfully",
        text: "We try to reply in 24 hours",
        icon: "success",
      });
}

// herder background change onl scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});

//scroll top
let scrolltop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrolltop.classList.toggle("scroll-active", window.scrollY >= 400);
}); 