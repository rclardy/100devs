document.getElementById("purple").onclick = partyPurple;
document.getElementById("green").onclick = partyGreen;
document.getElementById("blue").onclick = partyBlue;
document.getElementById("grey").onclick = partyGrey;

function partyPurple() {
	document.querySelector("body").style.backgroundColor = "rgba(241,63,247,1)";
	document.querySelector("body").style.color = "white";
}

function partyGreen() {
	document.querySelector("body").style.backgroundColor = "rgba(0,253,81,1)";
	document.querySelector("body").style.color = "white";
}

function partyBlue() {
	document.querySelector("body").style.backgroundColor = "rgba(0,254,255)";
	document.querySelector("body").style.color = "white";
}

function partyGrey() {
	document.querySelector("body").style.backgroundColor = "#808080";
	document.querySelector("body").style.color = "#0e6b0e";
}
