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
	this.querySelectorAll('.move').forEach(Layer => {
		const speed = layer.getAttribute('data-speed')

		const x = (window.innerWidth - e.pageX*speed)/120
		const y = (window.innerWidth - e.pageY*speed)/120

		layer.style.transform = `translateX(${X}px) translateY(${x}px)`
	})
}