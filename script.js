let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let rndmBtn = document.getElementById("random");


const setRndmBckgr = ()=>{
		const rndmCol = Math.floor(Math.random()*16777215).toString(16);
		const rndmCol2 = Math.floor(Math.random()*16777215).toString(16);

		color1.value = "#" + rndmCol;
		color2.value= "#" + rndmCol2;

		body.style.background = 
		"linear-gradient(to right, " + 
		color1.value 
		+ ", " 
		+ color2.value 
		+ ")";

		css.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setRndmBckgr();

rndmBtn.addEventListener("click", setRndmBckgr);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

