console.log("Hello Nurse");

var sunEmployees = [
	{
		name: "Rick James",
		title: "Lead Designer",
		description: "If anyone knows the future trends in shades, it's Rick James, kids!  With over 20 years experience in the bright lights, he's tuned in to turning it out.",
		image: "https://c6.staticflickr.com/8/7296/27253822125_dba4c10b60_o.jpg"
	},
	{
		name: "Sunny Bono",
		title: "Lead Wearer",
		description: "Strip steak enim biltong leberkas fugiat, eiusmod do pork belly id qui ball tip. Shoulder pariatur cillum ham do venison pig id. Tempor tri-tip venison swine, cow duis in beef ribs aliqua andouille kielbasa.",
		image: "https://c4.staticflickr.com/8/7399/27197342171_0ee4c9c126_o.jpg"
	},
	{
		name: "Ursula Lugnuts",
		title: "Field Tester",
		description: "Strip steak enim biltong leberkas fugiat, eiusmod do pork belly id qui ball tip. Shoulder pariatur cillum ham do venison pig id. Tempor tri-tip venison swine, cow duis in beef ribs aliqua andouille kielbasa.",
		image: "https://c4.staticflickr.com/8/7743/26661586123_b7a3c0e5aa_o.jpg"
	},
	{
		name: "Lenny James",
		title: "Monicle Tester",
		description: "Strip steak enim biltong leberkas fugiat, eiusmod do pork belly id qui ball tip. Shoulder pariatur cillum ham do venison pig id. Tempor tri-tip venison swine, cow duis in beef ribs aliqua andouille kielbasa.",
		image: "https://c8.staticflickr.com/8/7063/27198217911_9373f92172_o.jpg"
	},
	{
		name: "Tyrus James",
		title: "Future Division",
		description: "Strip steak enim biltong leberkas fugiat, eiusmod do pork belly id qui ball tip. Shoulder pariatur cillum ham do venison pig id. Tempor tri-tip venison swine, cow duis in beef ribs aliqua andouille kielbasa.",
		image: "https://c6.staticflickr.com/8/7566/26661585653_50aa295a78_o.jpg"
	},
		{
		name: "Wendy James",
		title: "Intern",
		description: "Strip steak enim biltong leberkas fugiat, eiusmod do pork belly id qui ball tip. Shoulder pariatur cillum ham do venison pig id. Tempor tri-tip venison swine, cow duis in beef ribs aliqua andouille kielbasa.",
		image: "https://c2.staticflickr.com/8/7590/26661586833_89eebfcd7d_o.jpg"
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




