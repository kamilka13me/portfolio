var pages = {
    styles: {
        about: "/pages/about/styles/css/main.css",
    },
    pages: {
        about: "/pages/about/about.php",
        work: "/pages/work/work.php",
        articles: "/pages/articles/articles.php",
        experements: "/pages/experements/experements.php",
    }
};

      
      
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
    $("head").append("<link rel='stylesheet' type='text/css' href='" + style_link + "'>");
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
    // style_insert(pages.styles[pathname]);
    content_insert(pages.pages[pathname]);

    if (is_init === 1){
      change_tab (pathname , 1);
  }
}

init_main(1);
