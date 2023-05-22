// let slideIndex = [1, 1];
// let slideId = ["mySlides1", "mySlides2", "mySlides2"]
// showSlides(1, 0);
// showSlides(1, 1);

// function plusSlides(n, no) {
//     showSlides(slideIndex[no] += n, no);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n, no) {
//     let i;
//     let x = document.getElementsByClassName(slideId[no]);
//     let dots = document.getElementsByClassName("dot");
//     if (n > x.length) { slideIndex[no] = 1 }
//     if (n < 1) { slideIndex[no] = x.length }
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     x[slideIndex[no] - 1].style.display = "block";
// }

// contact page

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var subject = "Contact Form Submission from " + name;
    var body = "Email: " + email + "\n\nMessage: " + message;

    var mailtoLink = "mailto:twonknives@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;
});

// nav
document.getElementById("menu-toggle").addEventListener("change", function() {
    if (this.checked) {
      document.getElementById("menu").classList.add("active");
    } else {
      document.getElementById("menu").classList.remove("active");
    }
  });
  