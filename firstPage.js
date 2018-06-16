var subscribeForm = document.querySelector("#subscribeCont form")
var subscribeText = document.querySelector("#subscribeCont p")
var subscribeBtn = document.querySelector("#subscribeCont button")

subscribeForm.addEventListener("submit", function(){
	event.preventDefault();
	subscribeText.textContent = "Thank you for subscribing to our newsletter!";
	subscribeBtn.textContent = "Subscribed";
	subscribeBtn.style.color = "#fff"
	subscribeBtn.style.background = "#5cb85c"
	subscribeBtn.style.border = "#4cae4c solid 1px";

})