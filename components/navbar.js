window.addEventListener("scroll",()=>{
    let nav=document.querySelector(".navbar");
    let position=window.scrollY>0;
    nav.classList.toggle("afterscroll", position);
})

let nav = document.querySelector('.navbar');
let dropdown = nav.querySelector('.nv_item');
let dropdownToggle = nav.querySelector("[data-action='dropdown-toggle']");
let navToggle = nav.querySelector("[data-action='nav-toggle']");

dropdownToggle.addEventListener('click', () => {
	if (dropdown.classList.contains('show')) {
		dropdown.classList.remove('show');
	} else {
		dropdown.classList.add('show');
	}
})

navToggle.addEventListener('click', () => {
	if (nav.classList.contains('opened')) {
		nav.classList.remove('opened');
	} else {
		nav.classList.add('opened');
	}
})