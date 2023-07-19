$(document).ready(function() {
    const customLink = $('#customLink');
    customLink.on('click', function() {
      const url = 'https://www.example.com'; 
  
      window.location.href = url;
    });
  });