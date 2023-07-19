$(document).ready(function() {
    const customLink = $('#work');
    customLink.on('click', function() {
      const url = 'http://localhost/dsada'; 
  

      history.pushState({}, "", "/нова-адреса");


      // Функція, яка зчитує URL адресу сторінки
function readPageURL() {
  const pageURL = window.location.href;
  console.log("URL адреса сторінки: ", pageURL);
}

// Затримка у мілісекундах (тут 5000 мс = 5 секунд)
const timeout = 1000;

// Запускаємо таймаут і викликаємо функцію після його закінчення
setTimeout(readPageURL, timeout);


    });
    const customLink2 = $('#about');
    customLink2.on('click', function() {
      const url = 'http://localhost/dsada'; 
  

      history.pushState({}, "", "/new");


      // Функція, яка зчитує URL адресу сторінки
function readPageURL() {
  const pageURL = window.location.href;
  console.log("URL адреса сторінки: ", pageURL);
}

// Затримка у мілісекундах (тут 5000 мс = 5 секунд)
const timeout = 1000;

// Запускаємо таймаут і викликаємо функцію після його закінчення
setTimeout(readPageURL, timeout);


    });
  });


