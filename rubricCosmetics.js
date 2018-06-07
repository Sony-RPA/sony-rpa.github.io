var rubricHeaders1 = document.querySelectorAll("#rubric h2")[0]
var rubricHeaders2 = document.querySelectorAll("#rubric h2")[1]
var rubricHeaders3 = document.querySelectorAll("#rubric h2")[2]
var rubricGrades1 = document.getElementsByClassName("col-md-4 col-xs-12 grade")[0]
var rubricGrades2 = document.getElementsByClassName("col-md-4 col-xs-12 grade")[1]
var rubricGrades3 = document.getElementsByClassName("col-md-4 col-xs-12 grade")[2]


rubricGrades1.addEventListener("mouseover", function(){
	rubricHeaders1.classList.add("rubricHover")
});

rubricGrades1.addEventListener("mouseout", function(){
	rubricHeaders1.classList.remove("rubricHover")
});


rubricGrades2.addEventListener("mouseover", function(){
	rubricHeaders2.classList.add("rubricHover")
});

rubricGrades2.addEventListener("mouseout", function(){
	rubricHeaders2.classList.remove("rubricHover")
});


rubricGrades3.addEventListener("mouseover", function(){
	rubricHeaders3.classList.add("rubricHover")
})

rubricGrades3.addEventListener("mouseout", function(){
	rubricHeaders3.classList.remove("rubricHover")
})