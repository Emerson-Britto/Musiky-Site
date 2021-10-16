let btn_open_menu = document.getElementById('menu_icon');
let btn_close_menu = document.getElementById('menu_icon-opened');
let nav_aside = document.querySelector('.nav_aside');
let overlay = document.getElementById('overlay');

btn_open_menu.addEventListener('click', ()=> {
	nav_aside.classList.toggle('menu_opened');
	overlay.style.display = "block";
})

const closeMenu = () => {
	nav_aside.classList.toggle('menu_opened');
	overlay.style.display = "none";	
}

btn_close_menu.addEventListener('click', ()=> closeMenu())

overlay.addEventListener('click', ()=> closeMenu())

