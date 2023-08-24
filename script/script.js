window.onload = function() {
  var elemento = document.querySelector("#left-size");
  elemento.classList.add("load");

};

function menuShow () {
  let menuMobile = document.querySelector('.mobile-menu')
  
  if(menuMobile.classList.contains("open")) {
      menuMobile.classList.remove("open")
      menuMobile.style.display = 'none'
      document.querySelector('.icon').src="assets/menu_white_36dp.svg"
    }

    else {
      menuMobile.classList.add("open")
      document.querySelector('.icon').src="assets/close_white_36dp.svg"
      menuMobile.style.display = 'block'
    }
}



 

  