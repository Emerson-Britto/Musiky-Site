let btn_open_menu = document.getElementById('menu_icon')
let btn_close_menu = document.getElementById('menu_icon-opened')
let nav_aside = document.querySelector('.nav_aside')

btn_open_menu.addEventListener('click', ()=> {
	nav_aside.classList.toggle('menu_opened')	
})

btn_close_menu.addEventListener('click', ()=> {
	nav_aside.classList.toggle('menu_opened')	
})