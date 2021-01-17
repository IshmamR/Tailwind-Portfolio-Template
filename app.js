const NavBar = document.querySelector('.NavBar');
let transparent = 'start';
let showScroll = false;
var scroller = () => {
	if(window.scrollY > '100' && window.scrollY <= window.innerHeight-100) {
		transparent = 'mid';
	} else if(window.scrollY > window.innerHeight-100) {
		transparent = 'end';
	} else { 
		transparent = 'start'; 
	}
	if(window.scrollY > window.innerHeight-200) {
		showScroll = true;
	} else { 
		showScroll = false;
	}
	changeNavBar();
	scrollerUp();
}
window.addEventListener('scroll', scroller, false);
const changeNavBar = () => {
	const navClass = "NavBar bg-white w-full py-3 fixed z-50 transition-all duration-500 ease-in ";
	if (transparent === 'start') {
		NavBar.className = navClass + 'bg-opacity-0 text-white shadow-none';
	} else if (transparent === 'mid') {
		NavBar.className = navClass + 'bg-opacity-25 text-white shadow-md';
	} else if (transparent === 'end') {
		NavBar.className = navClass + 'bg-opacity-100 text-gray-900 shadow-lg';
	}
}


//  Download resume
const downloadResume = () => {
	const a = document.createElement('a');
	a.href = `${window.location.origin}${Resume}`;
	// console.log(a.href);
	a.download = "IshmamsResume.pdf";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}


// Contact Form submit
const handleSubmit = (e) => {
	e.preventDefault();
	alert("Thank you")
}

// ScrollUp button
const scrollUp = document.querySelector('.ScrollUp');
var scrollerUp = () => {
	const scrollUpClass = "ScrollUp fixed bottom-0 right-0 z-50"
	if(showScroll) {
		scrollUp.className = scrollUpClass + "";
	} else { 
		scrollUp.className = scrollUpClass + " hidden";
	}
}