var rubricHeaders = document.querySelectorAll("#rubric h2")
var rubricGrades = document.getElementsByClassName("col-md-4 col-xs-12 grade");

for(var i = 0; i < rubricGrades.length; i++){
	(function(i){
		rubricGrades[i].addEventListener("mouseover", function(){
			rubricHeaders[i].classList.add("rubricHover")
		})
	}(i))
}

for(var i = 0; i < rubricGrades.length; i++){
	(function(i){
		rubricGrades[i].addEventListener("mouseout", function(){
			rubricHeaders[i].classList.remove("rubricHover")
		})
	}(i))
}