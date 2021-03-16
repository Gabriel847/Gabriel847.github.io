const inputs = document.querySelectorAll("input[type=checkbox]");
const selecting = (e) => {
	const elem = e.target.parentNode;
	const btnAdd = e.target.parentNode.childNodes["7"].children[0];

	if(e.target.checked) {
		elem.classList.add("checked");
		btnAdd.style="background: orange";
		btnAdd.text ="Escolhido";
	}
	else if(elem.classList[0] == "checked" || elem.classList[1] == "checked"){
		elem.classList.remove("checked");
		btnAdd.style="background: rgb(30, 120, 200)";
		elem.childNodes["7"].children[0].text ="Adicionar"
	}
}
inputs.forEach((e) => {e.addEventListener("click",selecting);});

const btnDetails = document.querySelectorAll(".moreDetails");
const details = (e) => {
	const elem = e.target.parentElement.nextElementSibling;
	elem.style = "display: block"
	
}
btnDetails.forEach((e) => {e.addEventListener("click",details);});

const btnCloseDetails = document.querySelectorAll(".closeDetails");
const closeDetails = (e) => {
	const elem = e.target.parentElement.parentElement;
	elem.style = "display: none";
}
btnCloseDetails.forEach((e) => {e.addEventListener("click",closeDetails);});