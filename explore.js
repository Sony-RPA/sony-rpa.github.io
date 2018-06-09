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

		for(var i = 0; i < squaresGood.length; i++){
			squaresGood[i].classList.add("fadeIn")
		}
		optionInfo.textContent = "These orbs represent some of our most memorable scripts. Click on any orb to learn more about our processes."
		defaultOpt.textContent = "Walk with Domo"
		domoIntro.textContent = "You've arrived, Domo will wait for you."	

	} else if(defaultOpt.selected == true){
		for(var i = 0; i < squaresGood.length; i++){
			squaresGood[i].classList.remove("fadeIn")
		}
		removeActive()
		processInfo.style.display = "none"
		processTeam.style.display = "none"
		processStats.style.display = "none"

		analytics.classList.remove("domoWait");
		analytics.classList.add("domoWalk");

		optionInfo.textContent = ""
		defaultOpt.textContent = "Choose a Path"
		domoIntro.textContent = "Where would you like to go next?"
	}
})


for(var i = 0; i < squaresGood.length; i++){
	squaresGood[i].addEventListener("click", function(){
		removeActive()
		this.classList.add("activeSquare");
		this.textContent = " "
		changeDesc()
	})
}


function removeActive(){
	for(var i = 0; i < squaresGood.length; i++){
		squaresGood[i].classList.remove("activeSquare");
		squaresGood[i].textContent = "";
	}

}

function changeDesc(){

	processDesc.classList.add("fadeOut")
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
			processName.textContent = "User ID Management";
			processType.textContent = "IT Operations";
			processDiff.textContent = "Medium";
			processLead.textContent = "Ali S.";
			processDev.textContent = "Chris N.";
			processAna.textContent = "Tristan W.";
			processDays.textContent = timeElapsed + " Days"
			processTime.textContent = "5 minutes"
			processTotal.textContent = timeElapsed * 15
		}, 500)

	} else if(squaresGood[1].textContent == " "){
		setTimeout(function(){
			var processStart = new Date(2018, 4, 1)
			var timeElapsed = Math.floor((today - processStart)/dayToMili)
			processName.textContent = "PTP Financial Close";
			processType.textContent = "Finance & Accounting";
			processDiff.textContent = "Hard";
			processLead.textContent = "Marvin D.";
			processDev.textContent = "Juan B.";
			processAna.textContent = "Jerico C.";
			processDays.textContent = timeElapsed + " Days"
			processTime.textContent = "10 minutes"
			processTotal.textContent = timeElapsed * 22		
		}, 500)

	} else if(squaresGood[2].textContent == " "){
		setTimeout(function(){
			var processStart = new Date(2018, 1, 1)
			var timeElapsed = Math.floor((today - processStart)/dayToMili)
			processName.textContent = "Visitor Pass Creation";
			processType.textContent = "IT Operations";
			processDiff.textContent = "Easy";
			processLead.textContent = "Danielle V.";
			processDev.textContent = "Chris N.";
			processAna.textContent = "Mike S.";
			processDays.textContent = timeElapsed + " Days"
			processTime.textContent = "1 minute"
			processTotal.textContent = timeElapsed * 260	
		}, 500)	

	} else if(squaresGood[3].textContent == " "){
		setTimeout(function(){
			var processStart = new Date(2017, 11, 10)
			var timeElapsed = Math.floor((today - processStart)/dayToMili)
			processName.textContent = "HE Vendor FP&A";
			processType.textContent = "Finance & Accounting";
			processDiff.textContent = "Medium";
			processLead.textContent = "Danielle V.";
			processDev.textContent = "Patrick W.";
			processAna.textContent = "Mike S.";
			processDays.textContent = timeElapsed + " Days"
			processTime.textContent = "5 minutes"
			processTotal.textContent = timeElapsed * 6	
		}, 500)

	} else if(squaresGood[4].textContent == " "){
		setTimeout(function(){
			var processStart = new Date(2017, 7, 1)
			var timeElapsed = Math.floor((today - processStart)/dayToMili)
			processName.textContent = "PTP Invoice APAC";
			processType.textContent = "Finance & Accounting";
			processDiff.textContent = "Medium";
			processLead.textContent = "Marvin D.";
			processDev.textContent = "Juan B.";
			processAna.textContent = "Jerico C.";
			processDays.textContent = timeElapsed + " Days"
			processTime.textContent = "5 minutes"
			processTotal.textContent = timeElapsed * 40	
		}, 500)

	} else if(squaresGood[5].textContent == " "){
		setTimeout(function(){
			var processStart = new Date(2017, 9, 1)
			var timeElapsed = Math.floor((today - processStart)/dayToMili)
			processName.textContent = "OTC Consolidation";
			processType.textContent = "Finance & Accounting";
			processDiff.textContent = "Medium";
			processLead.textContent = "John R.";
			processDev.textContent = "Patrick W.";
			processAna.textContent = "Jerico C.";
			processDays.textContent = timeElapsed + " Days"
			processTime.textContent = "5 minutes"
			processTotal.textContent = timeElapsed * 8	
		}, 500)	

	} else if(squaresGood[6].textContent == " "){
		setTimeout(function(){
			var processStart = new Date(2017, 6, 1)
			var timeElapsed = Math.floor((today - processStart)/dayToMili)
			processName.textContent = "PTP Invoice LATAM";
			processType.textContent = "Finance & Accounting";
			processDiff.textContent = "Medium";
			processLead.textContent = "Marvin D.";
			processDev.textContent = "Juan B.";
			processAna.textContent = "Jerico C.";
			processDays.textContent = timeElapsed + " Days"
			processTime.textContent = "5 minutes"
			processTotal.textContent = timeElapsed * 55		
		}, 500)	

	} else if(squaresGood[7].textContent == " "){
		setTimeout(function(){
			var processStart = new Date(2017, 10, 1)
			var timeElapsed = Math.floor((today - processStart)/dayToMili)
			processName.textContent = "PPM Budget Recon";
			processType.textContent = "Finance & Accounting";
			processDiff.textContent = "Medium";
			processLead.textContent = "Danielle V.";
			processDev.textContent = "Chris N.";
			processAna.textContent = "Mike S.";
			processDays.textContent = timeElapsed + " Days"
			processTime.textContent = "5 minutes"
			processTotal.textContent = timeElapsed * 2		
		}, 500)

	} else if(squaresGood[8].textContent == " "){
		setTimeout(function(){
			var processStart = new Date(2018, 3, 1)
			var timeElapsed = Math.floor((today - processStart)/dayToMili)
			processName.textContent = "SAP Provisioning";
			processType.textContent = "IT Operations";
			processDiff.textContent = "Hard";
			processLead.textContent = "Ali S.";
			processDev.textContent = "Chris N.";
			processAna.textContent = "Tristan W.";
			processDays.textContent = timeElapsed + " Days"
			processTime.textContent = "5 minutes"
			processTotal.textContent = timeElapsed * 7		
		}, 500)

	} else if(squaresGood[9].textContent == " "){
		setTimeout(function(){
			var processStart = new Date(2017, 8, 1)
			var timeElapsed = Math.floor((today - processStart)/dayToMili)
			processName.textContent = "RPA KPI Feed";
			processType.textContent = "IT Operations";
			processDiff.textContent = "Hard";
			processLead.textContent = "John R.";
			processDev.textContent = "Juan B.";
			processAna.textContent = "Jerico C.";
			processDays.textContent = timeElapsed + " Days"
			processTime.textContent = "5 minutes"
			processTotal.textContent = timeElapsed * 24		
		}, 500)
	}
}


