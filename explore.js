var analytics = document.querySelector("#analytics")
var dropdown = document.querySelector("form");
var defaultOpt = document.getElementById("default")
var scriptsOpt = document.getElementById("scripts")
var productionOpt = document.getElementById("production")
var imageDisplay = document.querySelector("#analytics img")

var squares = document.querySelectorAll(".square");
var squaresGood = document.querySelectorAll(".squareGood")
var domoIntro = document.querySelector("#domoIntro")

var processInfo = document.getElementById("processInfo")
var processTeam = document.getElementById("processTeam")
var processStats = document.getElementById("processStats")

var processName = document.getElementById("processName");
var processType = document.getElementById("processType");
var processDiff = document.getElementById("processDiff")

var processLead = document.getElementById("processLead")
var processDev = document.getElementById("processDev")
var processAna = document.getElementById("processAna")

var processDays = document.getElementById("processDays")
var processTime = document.getElementById("processTime")
var processTotal = document.getElementById("processTotal")


dropdown.addEventListener("change", function(){
	if(scriptsOpt.selected == true){
		analytics.classList.remove("domoWalk")
		analytics.classList.add("domoWait")

		for(i = 0; i < squaresGood.length; i++){
			squaresGood[i].classList.add("fadeIn")
		}
		optionInfo.textContent = "These orbs represent some of our most memorable scripts. Click on any orb to learn more about our processes."
		defaultOpt.textContent = "Back to Domo"
		domoIntro.textContent = "You've arrived, Domo will wait for you."	

	} else if(defaultOpt.selected == true){
		for(i = 0; i < squaresGood.length; i++){
			squaresGood[i].classList.remove("fadeIn")
		}
		removeActive()
		processInfo.style.display = "none"
		processTeam.style.display = "none"
		processStats.style.display = "none"

		analytics.classList.remove("domoWait");
		analytics.classList.add("domoWalk");

		optionInfo.textContent = ""
		defaultOpt.textContent = "Select a Path"
		domoIntro.textContent = "This is Domo, he will guide you to your destination."
	}
})


for(i = 0; i < squaresGood.length; i++){
	squaresGood[i].addEventListener("click", function(){
		removeActive()
		this.classList.add("activeSquare");
		this.textContent = " "
		processDesc.classList.add("fadeOut")
		changeDesc()
	})
}


function removeActive(){
	for(i = 0; i < squaresGood.length; i++){
		squaresGood[i].classList.remove("activeSquare")
		squaresGood[i].textContent = ""
	}

}

function changeDesc(){
	domoIntro.textContent = "Domo is finding your selection";

	setTimeout(function(){
		domoIntro.textContent = "Domo has gathered your results";
		processDesc.classList.remove("fadeOut")
		processInfo.style.display = "initial";
		processTeam.style.display = "initial";
		processStats.style.display = "initial";
	}, 500)

		var dayToMili = 86400000;
		var today = Date.now()


	if(squaresGood[0].textContent == " "){
		setTimeout(function(){
			var processStart = new Date(2018, 0, 9)
			var timeElapsed = Math.floor((today - processStart)/dayToMili)
			processName.textContent = "Resource Onboarding";
			processType.textContent = "IT Operations";
			processDiff.textContent = "Easy";
			processLead.textContent = "Ali S.";
			processDev.textContent = "Chris N.";
			processAna.textContent = "Tristan W.";
			processDays.textContent = timeElapsed + " Days"
			processTime.textContent = "5 minutes"
			processTotal.textContent = "2980 runs"
		}, 500)
	} 
	else if(squaresGood[1].textContent == " "){
		setTimeout(function(){
			var processStart = new Date(2018, 4, 1)
			var timeElapsed = Math.floor((today - processStart)/dayToMili)
			processName.textContent = "PTP Financial Close ";
			processType.textContent = "Finance & Accounting";
			processDiff.textContent = "Hard";
			processLead.textContent = "Marvin D.";
			processDev.textContent = "Juan B.";
			processAna.textContent = "Jerico C.";
			processDays.textContent = timeElapsed + " Days"
			processTime.textContent = "10 minutes"
			processTotal.textContent = "120 runs"		
		}, 500)
	}
}
