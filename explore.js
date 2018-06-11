var analytics = document.querySelector("#analytics")
var dropdown = document.querySelector("form");
var defaultOpt = document.getElementById("default")
var scriptsOpt = document.getElementById("scripts")
var productionOpt = document.getElementById("production")
var imageDisplay = document.querySelector("#analytics img")
var optionInfo = document.querySelector("#optionInfo")

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

var processList = [
{
	processName: "User ID Management",
	processStart: new Date(2018, 0, 9),
	processType: "IT Operations",
	processDiff: "Medium",
	processLead: "Ali S.",
	processDev: "Chris N.",
	processAna: "Tristan W.",
	processTime: "5 minutes",
	processDaily: 15
},
{
	processName: "PTP Financial Close",
	processStart: new Date(2018, 4, 1),
	processType: "Finance & Accounting",
	processDiff: "Hard",
	processLead: "Marvin D.",
	processDev: "Juan B.",
	processAna: "Jerico C.",
	processTime: "10 minutes",
	processDaily: 22	
},
{
	processName: "Visitor Pass Creation",
	processStart: new Date(2018, 1, 1),
	processType: "IT Operations",
	processDiff: "Easy",
	processLead: "Danielle V.",
	processDev: "Chris N.",
	processAna: "Mike S.",
	processTime: "1 minute",
	processDaily: 260	
},
{
	processName: "HE Vendor FP&A",
	processStart: new Date(2017, 11, 10),
	processType: "Finance & Accounting",
	processDiff: "Medium",
	processLead: "Danielle V.",
	processDev: "Patrick W.",
	processAna: "Mike S.",
	processTime: "5 minutes",
	processDaily: 260
},
{
	processName: "PTP Invoice APAC",
	processStart: new Date(2017, 7, 1),
	processType: "Finance & Accounting",
	processDiff: "Medium",
	processLead: "Marvin D.",
	processDev: "Juan B.",
	processAna: "Jerico C.",
	processTime: "5 minutes",
	processDaily: 40
},
{
	processName: "OTC Consolidation",
	processStart: new Date(2017, 9, 1),
	processType: "Finance & Accounting",
	processDiff: "Medium",
	processLead: "John R.",
	processDev: "Patrick W.",
	processAna: "Jerico C.",
	processTime: "5 minutes",
	processDaily: 8
},
{
	processName: "PTP Invoice LATAM",
	processStart: new Date(2017, 6, 1),
	processType: "Finance & Accounting",
	processDiff: "Medium",
	processLead: "Marvin D.",
	processDev: "Juan B.",
	processAna: "Jerico C.",
	processTime: "5 minutes",
	processDaily: 55
},
{
	processName: "PPM Budget Recon",
	processStart: new Date(2017, 10, 1),
	processType: "Finance & Accounting",
	processDiff: "Medium",
	processLead: "Danielle V.",
	processDev: "Chris N.",
	processAna: "Mike S.",
	processTime: "5 minutes",
	processDaily: 2
},
{
	processName: "SAP Provisioning",
	processStart: new Date(2018, 3, 1),
	processType: "IT Operations",
	processDiff: "Hard",
	processLead: "Ali S.",
	processDev: "Chris N.",
	processAna: "Tristan W.",
	processTime: "5 minutes",
	processDaily: 7
},
{
	processName: "RPA KPI Feed",
	processStart: new Date(2017, 8, 1),
	processType: "IT Operations",
	processDiff: "Hard",
	processLead: "John R.",
	processDev: "Juan B.",
	processAna: "Jerico C.",
	processTime: "5 minutes",
	processDaily: 24
}
]
	


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

		optionInfo.textContent = "."
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

	for(var i = 0; i < squaresGood.length; i++){
		(function(i) {
			if(squaresGood[i].textContent == " "){
				var timeElapsed = Math.floor((today - processList[i].processStart)/dayToMili);
					setTimeout(function(){
						processName.textContent = processList[i].processName;
						processType.textContent = processList[i].processType;
						processDiff.textContent = processList[i].processDiff;
						processLead.textContent = processList[i].processLead;
						processDev.textContent = processList[i].processDev;
						processAna.textContent = processList[i].processAna;
						processDays.textContent = timeElapsed + " Days";
						processTime.textContent = processList[i].processTime;
						processTotal.textContent = timeElapsed * processList[i].processDaily;
					}, 500)			
			}
		})(i);
	}
}

