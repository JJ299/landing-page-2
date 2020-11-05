const navMenu = document.getElementById('nav-menu'),
	toggleMenu = document.getElementById('nav-toggle'),
	closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click', ()=>{
	navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', ()=>{
	navMenu.classList.remove('show')
})

document.addEventListener('mousemove', move)

function move(e) {
	this.querySelectorAll('.move')
}