function OpenNav(){
  const nav = document.getElementById("nav")
  nav.classList.toggle("nav-open")
}


  const clicknav = document.getElementById("pop-nav")
  clicknav.addEventListener("click", OpenNav)