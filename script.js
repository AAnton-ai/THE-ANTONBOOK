var settingsmenu = document.querySelector(".settings-menu");

var darkBtn = document.getElementById("dark-btn")

function settingsMenuToggle(){
	settingsmenu.classList.toggle("settings-menu-hieght");
}

darkBtn.onclick = function(){
	darkBtn.classList.toggle("dark-btn-on");
	document.body.classList.toggle("dark-theme");

	if(localStorage.getItem("theme") == "light"){
		localStorage.setItem("theme","dark")
	}
	else{
		localStorage.setItem("theme","light")
	}
}


if(localStorage.getItem("theme") == "light"){
	darkBtn.classList.remove("dark-btn-on");
	document.body.classList.remove("dark-theme");
}

else if(localStorage.getItem("theme") == "dark"){
	darkBtn.classList.add("dark-btn-on");
	document.body.classList.add("dark-theme");
}
else{
	localStorage.setItem("theme","light")
}

/*
@author Alberto Hartzet 
*
*I wouldn't mind if you use this piece of code in your project as long 
as you give credit with a link to my site. www.albertohartzet.com
*
Licence (CC BY-NC-SA 4.0) http://creativecommons.org/licenses/by-nc-sa/4.0/
*/