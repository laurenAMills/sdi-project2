// alert("JavaScript works!"); 
// Lauren Mills
// Project 2
// SDI 1407
//My very needed Vacation

// Variables

var daysTillVaca = 122;
var spendingPerDay = 215;
var numOfStops = 35;
var locations = [
				"Vietnam", 
				"Thailand", 
				"Cambodia", 
				"China"];
var country = "Asia";
var goingWith = "mom";
var hrOfTraveling = 44;
var numOfNights = 14;


// Procedure
var firstStop = function (anyStop) { 
	if (anyStop == "Asia"){
	console.log("I cannot believe my " + goingWith + " and I are back in " + country + " for the first time 16 years!");  	
	} else {	
		console.log("If I cannot go to " + country + " with my" + goingWith + " then im going to fly to Connecticut to see her.");
	};
};
	
// Boolean Function
var whatToDo = function (spending, stops) {
	if (spending <=  250 && stops >= 30) {
	var moreToBeDone = true;
	console.log("We get to explore even more then we thought! Yay!");
	} else {
		moreToBeDone = false;
		console.log("We are broke so no more spending money for us.");
		};
};

// Number Function
var exploringTime = function (totalFlightHours) {
	letsFlyAway = "Thai Air"
	var hoursLeftToTravel = 40;
	if (totalFlightHours > hoursLeftToTravel) {
		var remainingHours = (totalFlightHours - hoursLeftToTravel);
		console.log("we are here");
		while (remainingHours > 0){
			console.log ("Just want to start vacation yet there is still " + remainingHours + " to go!  Teleporting needs to happen now. Want nothing more then to see " + locations[remainingHours] + " ASAP!");
			remainingHours--;
		}
	};
};
// String Function
var jetLag = function (currentCountry, travelTime) {
	var mustSleep = "heads hits the pillow";
	var hotelRoom = "W Hotel";
	console.log ("After " +  travelTime + " hours of travel, we have arrived in " + currentCountry + " we will let our " + mustSleep + " in the amazing " + hotelRoom + " so that we can actually explore " + currentCountry + " with as little jet lag as possible");
};

// Array Function
var exploring = function(numOfPlaces) {
	var ourDestinations = ["Visit the Queens garden", "Floating Market", "Phuket", "Chaing Mai"];
	console.log ("so that we can maximize our time and see" + numOfPlaces + " attractions today, we will use different modes of transportation");
	for (var i = 0; i < ourDestinations.length; i++) {
		console.log ("to get to " + ourDestinations[i] + " we will need to ride in a TokTok.");
		};
		return locations;
};

firstStop(country);
whatToDo(spendingPerDay, numOfStops);
exploringTime(hrOfTraveling);
jetLag(country, hrOfTraveling);
exploring(numOfStops);

