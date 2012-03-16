alert("JavaScript works!")

var say = function (message){
	console.log(message);
};

var budget = 2000,
	studio = 500,
	getStudio = false,
	doCover = false;

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

say("Now I must mix the record. I can do this myself. But I need to book more studio time.");
say("I figure that I can get a really good mix on the record in 4 hours. And I need to do this today.");
say("So I need to find a studio that is available today.");
say("I have a different studio in mind for this. It is one that is near my house and I have heard some really good mixes come out of there.");



if (getStudio === true){
	say("I called Dogwood Studios and they have a slot available today");
}else{
	console.log("I couldn't get the studio I wanted, so I have to get some suggestions for places to mix.")
	var studios = ["Doppler", "Patchwork", "Crossover"];
  studioavail = ["not available", "available", "available"];
for (var i=0, a=studios.length; i<a ; i++ ){
	console.log("I called " +studios[i]+ " Studios and they said that they are " +studioavail[i]+ " in that time frame")
};

};

say("Now I am in the mix session. I have to get this record done quickly because I only have 4 hours to mix.")
say("I have a total of 9 different parts to mix. They each have varying amounts of complexity. But I need to tackle them one by one.")

var trackNamesbyInstrument = ["drums", "keys", "bass", "saxophone", "Background Vox1", "Background Vox2", "Background Vox3", "Lead Vox"], 
	wholeMinutesPerTrack = [60, 20, 15, 20, 15, 15, 15, 35];
var mixOneInstrument = function(trackName, minutesThisTrack) {
	
	console.log("Starting to mix the " + trackName + " for " + minutesThisTrack + " minutes");
	for (var minutes = 0; minutes < minutesThisTrack; minutes += 5) {
		var minutesRemain = minutesThisTrack - minutes;
		console.log(minutes + " done, " + minutesRemain + " to go!");
	
	};
	console.log("I'm done with the " + trackName + ".");
};
var mixAllTracks = function(trackNames, minutesPerTrack){
	for (var trackNumber = 0; trackNumber < trackNames.length; trackNumber++) {
		var trackName = trackNames[trackNumber],
		minutesThisTrack = minutesPerTrack[trackNumber];
	mixOneInstrument(trackName, minutesThisTrack);
	};


};
mixAllTracks(trackNamesbyInstrument, wholeMinutesPerTrack);
say("I will send this off to be mastered this tonight. this will take another day to complete.");
say("While that's being done, I must get the credits together to put in the cover art and decide if I even want to do the cover art.");
if (doCover === false){
	say("I'm kinda tired. After all this work, I can spend the money to have a friend go the cover art pretty quick. It's no big deal");
}else{
	say("I am feeling kinda cheap. If I go ahead and do the cover art, I can keep this money. I'll sleep when I die")
};

say("Now to put down the information for the credits.");
say("Because I am dealing with professionals, In addition to their name and instrument they play, I must also include the companies they are endorsed by.");

var handleData = function (json) {
	for (var i = 0; i < json.musicians.length; i++){
	var musician = json.musicians[i];
	console.log("Instrument: " + musician.instrument + ", Name: " + musician.name + ", Endorses: " + musician.endorsements + ".")
	};
};

handleData(json2);
say("So I have everything I need for the finished product. I am feeling quite accomplished right now.");
