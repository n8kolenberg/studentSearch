function print(message) {
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = message;
}


var students = [
{
	name : 'Nate',
	track : "JavaScript Loops, Arrays and Objects",
	achievements : "12",
	points : "15" 
},

{
	name : "Vero",
	track : "JavaScript Loops, Arrays and Objects",
	achievements : "16",
	points : "36"
},

{
	name : "Mijelor",
	track : "JavaScript Loops, Arrays and Objects",
	achievements : "12",
	points : "20" 
},

{
	name : "Capelito",
	track : "JavaScript Loops, Arrays and Objects",
	achievements : "19",
	points : "5" 
},

{
	name : "Kathrin",
	track : "JavaScript Loops, Arrays and Objects",
	achievements : "10",
	points : "20"
}

];

var message = "";
var student;
var search;

function getStudentReport (student) {
	var report = "<h2 class='strong'>Student: " + student.name+ "</h2>";
	report += "<p> Track: " + student.track + "</p>";
	report += "<p> Achievements: " + student.achievements + "</p>";
	report += "<p> Points: " + student.points + "</p>"; 
	return report;
}

while (true) {
	search = prompt("Search for student names or 'quit' to exit")
	if (search.toLowerCase() === "quit" || search === null) {
			break;
		}

	for (var i = 0; i < students.length; i += 1) {
		student = students[i];
		if (student.name.toLowerCase() === search.toLowerCase()) {
			message = getStudentReport (student);
			print(message);
		}
	}

}














