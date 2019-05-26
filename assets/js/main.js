$(document).ready(function(){
	// Initialize the slider
	$('.slides').bxSlider({
		mode: 'fade',
	    slideWidth: 1035,
	    auto: true,
	    controls: false,
	    pager: false
	});

});

const $connectBtn = document.getElementById("connect-button");
const $loginFrmBox = document.querySelector(".login-form-box");
const $loginFrm = document.querySelector(".login-form");

const $email = document.querySelector("#email");
console.log($email.value);



$connectBtn.addEventListener("click", function(e){
	e.preventDefault();
	$loginFrmBox.classList.add("show");
});

// Detect all clicks on the document
document.addEventListener("click", function(event) {
	// If user clicks inside the element, do nothing
	if (event.target.closest("#connect-button") || event.target.closest(".login-form-box")) return;

	// If user clicks outside the element, hide it!
	$loginFrmBox.classList.remove("show");
});

$loginFrm.addEventListener("submit", function(e){
	
	const emailRegex = /\w+@\w+\.\w{2,}/;

	let email = $email.value;

	if(emailRegex.test(email)) {
		console.log("valid mail");
		
	} else {
		e.preventDefault();
	}
	
});