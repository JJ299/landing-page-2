const navMenu = document.getElementByyId('nav-menu'),
	toggleMenu = document.getElementByyId('nav-toggle'),
	closeMenu = document.getElementByyId('nav-close')

toggleMenu.addEventListener('click', ()=> {
	navMenu.classList.toggle('show')
})