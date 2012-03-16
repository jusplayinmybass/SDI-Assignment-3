alert("JavaScript works!")

var say = function (message){
	console.log(message);
};

var budget = 2000,
	studio = 500,
	dogwood = true

say("I have finished recording the new single for a new artist.");
say("Now I have to mix and master the record.");
say("Then I will need to get the credits together for the packaging.");
say("Finally, I need to decide whether I want to do the cover art myself or hire someone else to do it.");
say("First step is to mix the project. My total project budget was $" + budget+ ".");
say("I am waiting to receive invoices from each of the musicians");
say("Now I have to pay the people that make me sound good:");
say("I negotiated individual rates for each musician, some people can command a higher rate because they have more album credits.")

var payInvoice = function (name, invoice, message) {
	var balance = budget - invoice
	console.log("I paid " + name + " $" + invoice + " because " + message + ". I now have $" + balance + " left." );
}; 

payInvoice("Steve", 150, "he is not a well know player. But he is a beast");
payInvoice("Quinton",  200, "he has a pretty legnthy resume");
payInvoice("Leeland", 100, "he is new to recording but did a great job");
payInvoice("Ronald", 250, "he has several albums out and can lend some brand recognition to buyers");
say("I already paid the recording studio $" + studio + " at the end of the recording session.");

say("Now I must mix the record. I can do this myself. But I need to book more studio time.");
say("I figure that I can get a really good mix on the record in 4 hours. And I need to do this today.");
say("So I need to find a studio that is available today.");
say("I have a different studio in mind for this. It is one that is near my house and I have heard some really good mixes come out of there.");

if (dogwood = true) {
	say("I called Dogwood Studios and they have a slot available today");
} 
else {
	say("I couldn't get the studio I wanted, so I have to call around to some other spots.")
	var studios = ["Doppler", "Patchwork", "Crossover"];
  studioavail = ["not available", "available", "available"];
for (var i=0, a=studios.length; i<a ; i++ ){
	say("I called " +studios[i]+ " Studios and they said that they are " +studioavail[i]+ " in that time frame")
};

};






var handleData = function (json) {
	for (var i = 0; i < json.musicians.length; i++){
	var musician = json.musicians[i];
	console.log("Instrument: " + musician.instrument + ", Name: " + musician.name + ", Endorses: " + musician.endorsements + ".")
	};
};

handleData(json2);
