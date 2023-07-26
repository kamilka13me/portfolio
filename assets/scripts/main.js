var pages = {
    styles: {
        about: "/portfolio/pages/about/assets/styles/css/main.css",
        work: "/portfolio/pages/work/assets/styles/css/main.css",
        articles: "/portfolio/pages/articles/assets/styles/css/main.css",
        experements: "/portfolio/pages/experements/assets/styles/css/main.css",
    },
    pages: {
        about: "/portfolio/pages/about/about.php",
        work: "/portfolio/pages/work/work.php",
        articles: "/portfolio/pages/articles/articles.php",
        experements: "/portfolio/pages/experements/experements.php",
    }
};

      
// const styleLink = "style.css"; // Замість "style.css" введіть ваш шлях до стилів

// Функція для перевірки наявності стилів
function isStylesheetLoaded(styleLink) {
  // Отримуємо всі елементи <link> з атрибутом rel="stylesheet"
  const linkElements = $("link[rel='stylesheet']");
  for (let i = 0; i < linkElements.length; i++) {
    // Отримуємо значення атрибуту href для поточного елемента
    const href = $(linkElements[i]).attr("href");
    // Порівнюємо значення атрибуту href зі значенням змінної styleLink
    if (href === styleLink) {
      return true; // Повертаємо true, якщо стиль знайдено
    }
  }
  return false; // Повертаємо false, якщо стиль не знайдено
}
      


function content_insert(tab) {
    console.log('insert' + tab);

    var responseElement = $('.index_main_block');

    $.get(tab, function (response) {
        responseElement.html(response);
    }).fail(function (xhr, status, error) {
        console.log('Помилка AJAX запиту: ' + status + ', ' + error);
    });
}




  
  function style_innsert(style_link) {
          // Виклик функції для перевірки наявності стилів і виведення результату в консоль
          const isStyleLoaded = isStylesheetLoaded(style_link);
          if (isStyleLoaded) {
            console.log("Стиль з посиланням '" + style_link + "' знайдено в тезі.");

          } else {
            console.log("Стиль з посиланням '" + style_link + "' не знайдено в тезі.");
            $("head").append("<link rel='stylesheet' type='text/css' href='" + style_link + "'>");
          }


  }  
  
       // style remove
     function remove_styles() {
      for (var key in pages.styles) {
        if (pages.styles.hasOwnProperty(key)) {
          var link = $("link[href='" + pages.styles[key] + "']");
          link.remove();
        }
      }
    }

function init_main(is_init){
    let pathname = window.location.pathname.slice(1);
    console.log('Шлях: ', pathname);
    content_insert(pages.pages[pathname]);
    
    style_innsert(pages.styles[pathname]);

    if (is_init === 1){
      change_tab (pathname , 1);
  }
}

init_main(1);


