function change_tab (tab,is_init) {

  console.log(tab);

  button_id=tab;
  // Зчитуємо id дочірнього елемента .nav_links


  switch (button_id) {
    case "work":
      var new_url = button_id;
      break;
    case "about":
      var new_url = button_id;
      break;
    case "articles":
      var new_url = button_id;
      break;
    case "experements":
      var new_url = button_id;
      break;
    default:
      var new_url = "/404";
  }

  // change url
  history.pushState({}, "", new_url);

  // change active
  $(".nav_link_pointer").removeClass("disable");
  $("#"+button_id).siblings(".nav_link_pointer").addClass("active");

  if (is_init === null ){
    init_main();

  }

};


// Додаємо обробник події "click" на всі елементи з класом "nav_link_container"
$(".nav_link_container").on("click", function() {
  var button_id = $(this).find(".nav_links").attr("id");  
  console.log(button_id+"ddd")
  change_tab(button_id, null);
});


// nav animation
$(document).ready(function() {
  $('.nav_link_container').mouseenter(() => {
    $('.active').addClass('disable').removeClass('active');
  });
  $('.nav_link_container').mouseleave(() => {
    $('.disable').addClass('active').removeClass('disable');
  });
});

 

