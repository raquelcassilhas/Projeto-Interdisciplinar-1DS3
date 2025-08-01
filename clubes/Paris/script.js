$(".owl-carousel").owlCarousel({
    navigation : true,
    navigationText : ["prev","next"],
    pagination : true,
    paginationNumbers: true,
    autoWidth: true,
    loop: false,
});


// $(".owl-carousel").owlCarousel({

//   navigation: true,

// });

$(document).ready(function () {
  $(".owl-carousel .elemento").click(function () {
    $(".owl-carousel .elemento").not($(this)).removeClass("elemento__ativo");
    $(this).toggleClass("elemento__ativo");
  });
});


function OpenNav(){
  const nav = document.getElementById("nav")
  nav.classList.toggle("nav-open")
}


  const clicknav = document.getElementById("pop-nav")
  clicknav.addEventListener("click", OpenNav)