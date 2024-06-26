// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/

function myMap() {
    var mapProp = {
      center: new google.maps.LatLng(18.4630333, 73.8917124),
      zoom: 18,
      title: 'CodersDome'
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  
    var marker = new google.maps.Marker({
      position: {lat: 18.4630333, lng: 73.8917124},
      map: map,
      title: 'CodersDome'
    });
  }

/** header section's mail,call  js **/

// Get the phone number and email links
const phoneLink = document.getElementById('top_call');
const emailLink = document.getElementById('top_mail');

// Add click event listeners
phoneLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  window.location.href = 'tel:+919561618368'; // Redirect to call dial option
});

emailLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  window.location.href = 'mailto:codersdome@gmail.com?cc=codersdome@gmail.com'; // Redirect to email with CC
});




  
/** footer section's mail,call and address redirect js **/

// Get the mail element
const mailElement = document.getElementById('mail_id');

// Add a click event listener to the mail element
mailElement.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior

  // Get the email addresses from the paragraph text
  const emailText = event.currentTarget.querySelector('p').textContent;
  const emails = emailText.split(',').map(email => email.trim());

  // Construct the Gmail URL with the email addresses in the "Cc" field
  const gmailUrl = `https://mail.google.com/mail/?view=cm&su=&body=&cc=${emails.join(',')}`;

  // Open the Gmail URL in a new tab or window
  window.open(gmailUrl, '_blank');
});



// Get the call element for footer
const callElement = document.getElementById('call');

// Add a click event listener to the call element
callElement.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior

  // Get the phone number from the paragraph text
  const phoneNumber = event.currentTarget.querySelector('p').textContent.trim();

  // Construct the phone call URL
  const phoneUrl = `tel:${phoneNumber}`;

  // Open the phone call URL
  window.location.href = phoneUrl;
});


// Get the address element
const addressElement = document.getElementById('address');

// Add a click event listener to the address element
addressElement.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior

  // Get the address from the paragraph text
  const address = event.currentTarget.querySelector('p').textContent.replace('Address: ', '');

  // Construct the Google Maps URL with the address
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  // Open the Google Maps URL in a new tab or window
  window.open(mapsUrl, '_blank');
});




/**Contact us - javascript**/


// Get the form element
const form = document.querySelector('form');

// Add an event listener to the form's submit event
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the form field values
  const nameInput = form.querySelector('input[placeholder="Name"]');
  const phoneInput = form.querySelector('input[placeholder="Phone Number"]');
  const emailInput = form.querySelector('input[placeholder="Email"]');
  const messageInput = form.querySelector('input[placeholder="Message"]');

  // Validate the form fields
  if (nameInput.value.trim() === '' || !isValidName(nameInput.value)) {
    alert('Please enter a valid name (only alphabets allowed).');
    return;
  }

  if (phoneInput.value.trim() === '' || !isValidPhone(phoneInput.value)) {
    alert('Please enter a valid 10-digit phone number (only numbers allowed).');
    return;
  }

  if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (messageInput.value.trim() === '') {
    alert('Please enter a message.');
    return;
  }

  // If all fields are valid, send the form details to WhatsApp
  sendToWhatsApp('+91 7488730827', `Name: ${nameInput.value}\nPhone: ${phoneInput.value}\nEmail: ${emailInput.value}\nMessage: ${messageInput.value}`);
  sendToWhatsAppWeb(`https://web.whatsapp.com/send?phone=+917488730827&text=${encodeURIComponent(`Name: ${nameInput.value}\nPhone: ${phoneInput.value}\nEmail: ${emailInput.value}\nMessage: ${messageInput.value}`)}`);

  // Reset the form fields
  form.reset();
});

// Helper function to validate name (only alphabets allowed)
function isValidName(name) {
  const nameRegex = /^[a-zA-Z\s]+$/;
  return nameRegex.test(name);
}

// Helper function to validate phone number (only numbers allowed)
function isValidPhone(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

// Helper function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to send form details to WhatsApp
function sendToWhatsApp(number, message) {
  const whatsAppUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}&text=${encodeURIComponent(message)}`;
  window.open(whatsAppUrl, '_blank');
}

// Function to send form details to WhatsApp Web
function sendToWhatsAppWeb(url) {
  window.open(url, '_blank');
}