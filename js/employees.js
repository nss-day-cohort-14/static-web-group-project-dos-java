console.log("Hello Nurse");

var sunEmployees = [
	{
		name: "Rick James",
		title: "Lead Designer",
		description: "If anyone knows the future trends in shades, it's Rick James, kids!  With over 20 years experience in the bright lights, he's tuned in to turning it out.",
		image: "https://c6.staticflickr.com/8/7296/27253822125_dba4c10b60_o.jpg"
	},
	{
		name: "Tom James",
		title: "Lead Designer",
		description: "If anyone knows the future trends in shades, it's Rick James, kids!  With over 20 years experience in the bright lights, he's tuned in to turning it out.",
		image: "https://c6.staticflickr.com/8/7296/27253822125_dba4c10b60_o.jpg"
	},
	{
		name: "Ursula James",
		title: "Lead Designer",
		description: "If anyone knows the future trends in shades, it's Rick James, kids!  With over 20 years experience in the bright lights, he's tuned in to turning it out.",
		image: "https://c6.staticflickr.com/8/7296/27253822125_dba4c10b60_o.jpg"
	},
	{
		name: "Lenny James",
		title: "Lead Designer",
		description: "If anyone knows the future trends in shades, it's Rick James, kids!  With over 20 years experience in the bright lights, he's tuned in to turning it out.",
		image: "https://c6.staticflickr.com/8/7296/27253822125_dba4c10b60_o.jpg"
	},
	{
		name: "Tyrus James",
		title: "Lead Designer",
		description: "If anyone knows the future trends in shades, it's Rick James, kids!  With over 20 years experience in the bright lights, he's tuned in to turning it out.",
		image: "https://c6.staticflickr.com/8/7296/27253822125_dba4c10b60_o.jpg"
	},
		{
		name: "Wendy James",
		title: "Lead Designer",
		description: "If anyone knows the future trends in shades, it's Rick James, kids!  With over 20 years experience in the bright lights, he's tuned in to turning it out.",
		image: "https://c6.staticflickr.com/8/7296/27253822125_dba4c10b60_o.jpg"
	}
];

var employeeBio = document.getElementById("eContainer");

for (var i = 0; i < sunEmployees.length; i++) {
	var selectedEmployee = sunEmployees[i];

	employeeBio.innerHTML += 
		`<div class='employee'>
			<div class='eName'>${selectedEmployee.name}</div>
			<div class='eTitle'>${selectedEmployee.title}</div>
			<img class='eImage' src='${selectedEmployee.image}'>
			<div class='eDescription'>${selectedEmployee.description}</div>
		</div>`;
};

// ES6 vs "Traditional"
// employeeBio.innerHTML += 
// 	"<div class='employee'>" +
// 		"<div class='eName'>" + selectedEmployee.name + "</div>" +
// 		"<div class='eTitle'>" + selectedEmployee.title + "</div>" +
// 		"<img class='eImage' src='" + selectedEmployee.image + "'>" + 
// 		"<div class='eDescription'>" + selectedEmployee.description + 
// 		"</div>" +
// 	"</div>";




