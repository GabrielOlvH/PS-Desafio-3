let currentCards = "prato"

changeCards();

function changeCards() {
	let sectors = document.getElementById("opcoes");
	let v = sectors.value;

	document.getElementById(currentCards).style.display = "none";
	currentCards = v;
	document.getElementById(currentCards).style.display = "block";
}