// JS code
// contact page

// Wait for the DOM to load
// document.addEventListener('DOMContentLoaded', function () {
//     // Get the buttons
//     var inquireButton1 = document.getElementById('inquire-button1');
//     var inquireButton2 = document.getElementById('inquire-button2');
//     var inquireButton3 = document.getElementById('inquire-button3');

//     // Add event listeners to the buttons
//     inquireButton1.addEventListener('click', function () {
//         redirectToContactPage(inquireButton1);
//     });

//     inquireButton2.addEventListener('click', function () {
//         redirectToContactPage(inquireButton2);
//     });

//     inquireButton3.addEventListener('click', function () {
//         redirectToContactPage(inquireButton3);
//     });

//     // Function to redirect to contact page with product information
//     function redirectToContactPage(button) {
//         var productName = button.dataset.productName;
//         var productDescription = button.dataset.productDescription;
//         localStorage.setItem('productName', productName);
//         localStorage.setItem('productDescription', productDescription);
//         window.location.href = 'contact.html';
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    var inquireButtons = document.querySelectorAll('.cta-button');

    // Add event listeners to the buttons
    inquireButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            redirectToContactPage(button);
        });
    });

    // Function to redirect to contact page with product information
    function redirectToContactPage(button) {
        var productName = button.dataset.productName;
        var productDescription = button.dataset.productDescription;
        localStorage.setItem('productName', productName);
        localStorage.setItem('productDescription', productDescription);
        window.location.href = 'contact.html';
    }
});


document.addEventListener('DOMContentLoaded', function () {
    var productName = localStorage.getItem('productName');
    var productDescription = localStorage.getItem('productDescription');
    var messageArea = document.getElementById('message');

    if (productName && productDescription) {
        var message = 'Product Name: ' + productName + '\nProduct Description: ' + productDescription;
        messageArea.value = message;
    }

    // Clear the stored product information from localStorage
    localStorage.removeItem('productName');
    localStorage.removeItem('productDescription');
});


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

document.getElementById("inquire-button").addEventListener("click", redirectToContactPage);






function populateMessageArea() {
    var urlParams = new URLSearchParams(window.location.search);
    var productName = urlParams.get("productName");
    var productDescription = urlParams.get("productDescription");

    // Set the product information in the message area
    document.getElementById("message").value = "Product: " + productName + "\n\nDescription: " + productDescription;
}

// Call the populateMessageArea function when the contact page is loaded
window.addEventListener("DOMContentLoaded", populateMessageArea);



// nav
document.getElementById("menu-toggle").addEventListener("change", function () {
    if (this.checked) {
        document.getElementById("menu").classList.add("active");
    } else {
        document.getElementById("menu").classList.remove("active");
    }
});
