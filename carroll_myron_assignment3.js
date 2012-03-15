alert("JavaScript works!")

var say = function (message){
	console.log(message);
};

var budget = 2000,
	balance = 2000,
	studio = 500;

say("I have finished recording the new single for a new artist.");
say("Now I have to mix and master the record.");
say("Then I will need to get the credits together for the packaging.");
say("Finally, I need to decide whether I want to do the cover art myself or hire someone else to do it.");
say("First step is to mix the project. My total project budget was $" + budget+ ".");
say("I am waiting to receive invoices from each of the musicians");
say("Now I have to pay the people that make me sound good:");
var payInvoice = function (invoice) {
	var bud = budget, 
};

say("I already paid the recording studio $" + studio + " at the end of the recording session.");






var handleData = function (json) {
	for (var i = 0; i < json.musicians.length; i++){
	var musician = json.musicians[i];
	console.log("Instrument: " + musician.instrument + ", Name: " + musician.name + ", Endorses: " + musician.endorsements + ".")
	};
};

handleData(json2);