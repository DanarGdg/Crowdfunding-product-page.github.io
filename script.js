const hamburgerIcon =  document.getElementById("hamburgerIcon");
const list =  document.getElementById("unlistedList");
const nav = document.querySelectorAll('#unlistedList a');
const navWrap = document.getElementById('navWrap');
const bookmark = document.getElementById("bookmark");
const bookmarkTxt = document.getElementById("bookmarkTxt");
const main = document.getElementById('main');
const wrapBackProject = document.getElementById('wrapBackProject');
const icnCloseMdl = document.getElementById('icnCloseMdl');
const activeBtn = document.querySelectorAll('.activeBtn');
const radio1 = document.getElementById('radio1');
const radio2 = document.getElementById('radio2');
const radio3 = document.getElementById('radio3');
const selectBamboo = document.querySelector('.select-bamboo');
const selectBlack = document.querySelector('.select-black');
const successModal = document.querySelector('.wrap-success-modal');

radio1.addEventListener("click", clear)
radio2.addEventListener("click", bamboo)
radio3.addEventListener("click", black)

for(let i = 0; i<activeBtn.length; i++){
  activeBtn[1].addEventListener("click", bamboo)
  activeBtn[2].addEventListener("click", black)

  activeBtn[i].addEventListener("click", clicked)
}

function successModalfunc(){
  successModal.classList.add("active");
  wrapBackProject.classList.remove("active");
}

function clear(){
  successModal.classList.add("active");
  wrapBackProject.classList.remove("active");
  selectBlack.classList.remove("active");
  selectBamboo.classList.remove("active");
}

function bamboo(){
  radio2.checked = true;
  selectBamboo.classList.add("active");
  selectBlack.classList.remove("active");
}

function black(){
  radio3.checked = true;
  selectBlack.classList.add("active");
  selectBamboo.classList.remove("active");
}

function clicked(){
  icnCloseMdl.addEventListener("click", () =>{
    wrapBackProject.classList.remove("active");
    document.body.classList.remove("active")
    navWrap.classList.remove("active")
    main.classList.remove("active")
  })
  wrapBackProject.classList.add("active");
  document.body.classList.add("active")
  navWrap.classList.add("active")
  main.classList.add("active")
}

nav.forEach(function(nav) {
  hamburgerIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
    list.classList.toggle("active");

    if(nav.classList.contains("active")){
      hamburgerIcon.src = "images/icon-close-menu.svg";
    }else{
      hamburgerIcon.src = "images/icon-hamburger.svg";
    }

    if(nav.classList.contains("active")){
      document.body.style.backgroundColor = "rgba(26, 26, 26, 0.5)";
      navWrap.style.backgroundColor = "rgba(26, 26, 26, 0.5)";
      main.style.zIndex = "-1";
    }else{
      document.body.style.backgroundColor = "";
      main.style.zIndex = "";
      navWrap.style.backgroundColor = "";
    }
  })
})

bookmark.addEventListener("click", () => {
  bookmarkTxt.innerHTML = "Bookmarked"
  bookmarkTxt.style.color = "hsl(176, 72%, 28%)"
});
