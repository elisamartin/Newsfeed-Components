const toggleMenu = (e) => {
	e.stopPropagation();
	// Toggle the "menu--open" class on your menu refence.
	menu.classList.toggle('menu--open');
	if (menu.classList.contains('menu--open')) {
		TweenMax.to(menu, 2, { left: 0, ease: Sine.easeOut });
	} else {
		TweenMax.to(menu, 2, { left: -10, ease: Sine.easeOut });
	}
};

const slideBack = () => {
	if (menu.classList.contains('menu--open')) {
		TweenMax.to(menu, 2, { left: -10 });
		menu.classList.toggle('menu--open');
	}
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
window.addEventListener('click', slideBack);
