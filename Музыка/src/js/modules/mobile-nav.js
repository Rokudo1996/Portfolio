function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const close =document.querySelector('.close-btn')

	navBtn.onclick = function () {
		nav.classList.add('mobile-nav--open');
		
	};
	close.onclick = function () {
		nav.classList.remove('mobile-nav--open');
		
	};
}

export default mobileNav;