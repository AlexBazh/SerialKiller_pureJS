let openFilter = document.querySelector(".filter");
let popupFilter = document.querySelector(".popup_container");
let closeFilter = document.querySelector("#close_filter");
let closeFilterIcon = document.querySelector(".close_filter_icon");
let overlay = document.querySelector(".overlay");
let burger = document.querySelector(".burger_menu");
let sideBar = document.querySelector(".sidebar");
let closeSidebar = document.querySelector(".close_sidebar");
let bottomSheet = document.querySelector(".bottom_sheet");
let openBottom = document.querySelector(".filter_mobile");

openFilter.addEventListener('click', function(){
    popupFilter.classList.toggle('show');
    popupFilter.classList.toggle('open_bottom_sheet');
    overlay.classList.toggle('show');
    popupFilter.classList.toggle('open_bsh_full');
    
});

closeFilter.addEventListener('click', function(){
    popupFilter.classList.remove('show');
    overlay.classList.remove('show');
    popupFilter.classList.remove('open_bottom_sheet');
    popupFilter.classList.remove('open_bsh_full');
});

closeFilterIcon.addEventListener('click', function(){
    popupFilter.classList.remove('show');
    overlay.classList.remove('show');
    popupFilter.classList.remove('open_bottom_sheet');
    popupFilter.classList.remove('open_bsh_full');
});

document.body.addEventListener('keyup', function(e){
    let key = e.keyCode;
    if(key === 27){
        popupFilter.classList.remove('show');
        overlay.classList.remove('show');
    };  
});

overlay.addEventListener('click', function() {
    popupFilter.classList.remove('show');
    overlay.classList.remove('show');
    popupFilter.classList.remove('open_bottom_sheet');
    popupFilter.classList.remove('open_bsh_full');
});

burger.addEventListener('click', function(){
    sideBar.classList.add('sidebar_open');
});

closeSidebar.addEventListener('click', function(){
    sideBar.classList.remove('sidebar_open');
});

sideBar.addEventListener('swiped-left', function(){
    sideBar.classList.remove('sidebar_open');
});

openBottom.addEventListener('click', function () {
    popupFilter.classList.toggle('show');
    popupFilter.classList.toggle('open_bottom_sheet');
    overlay.classList.toggle('show');
});


popupFilter.addEventListener('swiped-up', function(){
    popupFilter.classList.remove('open_bottom_sheet');
    popupFilter.classList.add('open_bsh_full');
});

popupFilter.addEventListener('swiped-down', function(){
  popupFilter.classList.remove('open_bottom_sheet');
});