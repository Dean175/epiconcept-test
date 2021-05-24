const $loginFrm = document.querySelector('.login-form');
const $loginFrmBox = document.querySelector('.login-form-box');
const $email = document.getElementById('email');
const $pwd = document.getElementById('pwd');

const $connectBtn = document.getElementById('connect-button');
const $closeConnectBtn = document.getElementById('close-connect-btn');
const $errorMsg = document.getElementById('error-message');

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

$connectBtn.addEventListener('click', function(){
    $loginFrmBox.classList.add("show");
});

$closeConnectBtn.addEventListener('click', function(){
    $loginFrmBox.classList.remove("show");
});

document.addEventListener("click", function(e){
    if(e.target.closest(".login-form-box") || e.target.closest("#connect-button")) {
        return;
    }
    $loginFrmBox.classList.remove("show");
});

$loginFrm.addEventListener('submit', function(e){
    e.preventDefault();
    
    var validEmail = validInput(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, $email.value);
    var validPwd = validInput(/^((?=.*\d)(?=.*[a-z])(?=.*\W).{8,8})$/g, $pwd.value);

    if($email.value === "") {
        errMsg("Le champ Email est vide!");
    } else if($pwd.value === "") {
        errMsg("Le champ Password est vide!");
    } else if(!validEmail) {
        errMsg("Email non valid! Exemple: ally@gmail.com");
    } else if(!validPwd) {
        errMsg("Password non valid! (8 caracteres: au moins 1 lettre, 1 chiffre et 1 caractere especial)");
    } else {
        errMsg("");
    }

    if(validEmail && validPwd) {
        onSuccessfulConnection();
    }
    
});

function validInput(expr, val) {
    var regx = new RegExp(expr);
    return regx.test(val);
}

function errMsg(msg) {
    return $errorMsg.innerHTML = '<p>' + msg + '</p>';
}

/*---Ajax load --*/
function onSuccessfulConnection() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if( this.readyState == 4 && this.status == 200) {

            $loginFrmBox.innerHTML = this.responseText;
            document.getElementById('user-email').innerText = $email.value;
        }
    }

    xhr.open("GET", "connected.html", true);
    xhr.send();
}