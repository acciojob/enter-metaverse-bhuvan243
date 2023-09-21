//your JS code here. If required.
const paraText = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");

enterButton.addEventListener("click", ()=> {
	let h1 = document.createElement("h1");
	h1.innerText = "Entered Metaverse";
	document.body.insertBefore(h1, paraText);
	paraText.remove();
}	
);