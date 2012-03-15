alert("JavaScript works!")

;	//For loop	
for (var i=0, m = musicians.length; i< m; i++){
	console.log(musicians[i] + " is scheduled for " +times[i]+ " on " +instruments[i]+ ".")
};
console.log("After I get the instruments laid down. I have the Background Vocals to do.");
console.log("I have the 2 female singers booked. I just have to see if Jason can sing the male part")
//Boolean Function
var javail=true
if (javail=true){
	console.log("Jason is available, I don't have to sing the male parts. I am really out of practice")
	}else{
	console.log("Oh well, Jason is not available. I have to man up and sing these parts. That's why they pay me the big bucks.")	
};
console.log("Now I need to have a rough mix done to the song and have it bounced so I can put it on a CD to listen to in the car.")
console.log("Because the software we are using is Pro Tools, it has to bounce in real time.")
//While loop
var songlength = 230
console.log("The song is " +songlength+ " seconds long. Let's start the timer.")
while (songlength >= 0) {
	console.log("I now have " +songlength+ " seconds remaining.")
	songlength--
};
//Object
var key = "interests";
console.log(student[key]);
console.log(student.id);
console.log(student.interests);
console.log(student.sayHi);
console.log(student["sayHi"]);
student.sayHi();
student["sayHi"]();
student.sayHi = function  () {
	console.log("Get Lost!");
	};
student["sayHi"]();

//This outputs everything as a string:
for (var key in student) {
	console.log("key:" + key + " value:  " + student[key])

};
