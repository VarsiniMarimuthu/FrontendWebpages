let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');
  
  if (username === '' || password === '') {
      errorMessage.textContent = 'Please fill in both fields.';
  } else {
      errorMessage.textContent = '';
      alert('Login successful!');
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const address = document.getElementById('address').value.trim();
      if (!name || !email || !phone || !subject || !address) {
          alert('Please fill in all fields.');
      } else {
          console.log('Name:', name);
          console.log('Email:', email);
          console.log('Phone:', phone);
          console.log('Subject:', subject);
          console.log('Message:', address);
          alert('Message sent successfully!');
      }
  });
});
document.getElementById('orderForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const items = document.getElementById('items').value;
  const quantity = document.getElementById('quantity').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  const confirmationMessage = `
      <h2>Order Confirmation</h2>
      <p>Thank you, <strong>${name}</strong>! Your order for <strong>${quantity} ${items}</strong> has been placed successfully.</p>
      <p>We will contact you at <strong>${phone}</strong> or <strong>${email}</strong> if we need further information.</p>
      <p>Please pick up your order on <strong>${date}</strong> at <strong>${time}</strong>.</p>
  `;

  document.getElementById('confirmation').innerHTML = confirmationMessage;
  document.getElementById('orderForm').reset();
});
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('payment-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementsByName('name')[0].value.trim();
    const pincode = document.getElementsByName('pincode')[0].value.trim();
    const cardType = document.getElementsByName('card_type')[0].value.trim();
    const cardNumber = document.getElementsByName('card_number')[0].value.trim();
    const expDate = document.getElementsByName('exp_date')[0].value.trim();
    const cvv = document.getElementsByName('cvv')[0].value.trim();

    if (!name || !pincode || !cardType || !cardNumber || !expDate || !cvv) {
      alert('Please fill in all the fields.');
    } else {
      alert('Payment successful!');
    }
  });
});

let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}
var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".blogs-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextE1 :".swiper-button-next",
        prevE1 :".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });

  var swiper = new Swiper(".review-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  })