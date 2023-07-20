
// Функція, яка змінює URL адресу без перезавантаження сторінки
function changeURL(newAddress) {
  // newState.data=newAddress;
  history.pushState({}, "", newAddress);
  // console.log("URL адреса була змінена на: ", newAddress);
}

// Приклад конструкції switch case для зміни URL адреси залежно від умови
function processPage(condition) {

  switch (condition) {
    case "work":
      changeURL("/"+condition);
      break;
    case "about":
      changeURL("/"+condition);
      break;
    case "articles":
      changeURL("/"+condition);
      break;
    case "experements":
      changeURL("/"+condition);
      break;
    default:
      changeURL("/404");
  }
  init_main();
  // $("#"+condition).find(".nav_link_pointer").addClass("active");
  $(".nav_link_pointer").removeClass("disable");
  $("#"+condition).siblings(".nav_link_pointer").addClass("active");
}

// Додаємо обробник події "click" на всі елементи з класом "nav_link_container"
$(".nav_link_container").on("click", function () {
  // Зчитуємо id дочірнього елемента .nav_links
  const linkId = $(this).find(".nav_links").attr("id");
  processPage(linkId);
});


$(document).ready(function() {
  $('.nav_link_container').mouseenter(() => {
    console.log("rhere");
    $('.active').addClass('disable').removeClass('active');
  });
  $('.nav_link_container').mouseleave(() => {
    console.log("rhere");
    $('.disable').addClass('active').removeClass('disable');
  });
});

 

