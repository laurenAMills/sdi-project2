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
var hrOfTraveling = 46;
var numOfNights = 14;

// Procedure
var firstStop = function (anyStop) {
	anyStop = country;
	if (country === "Asia"){
	console.log("I cannot believe my " + goingWith + " and I are back in " + country + " for the first time 16 years!");  
/*	
	} else {	
		console.log("If I cannot go to " + country + " with my" + going With + " then im going to fly to Connecticut to see her.");
		};
};
*/
	
// Boolean Function
var whatToDo = function (spendingPerDay, numOfStops) {
	if (spendingPerDay <=  250 && numOfStops >= 30) {
	moreToBeDone = true;
	console.log("We get to explore even more then we thought! Yay!");
	} else {
		moreToBeDone = false;
		console.log("We are broke so no more spending money for us.");
		};
		return moreToBeDone;
};

// Number Function
var exploringTime = function (hrOfTraveling) {
	letsFlyAway = "Thai Air"
	while (hrOfTraveling >= 40) {
	console.log ("Just want to start vacation yet there is still " + hrOfTraveling + " to go!  Teleporting needs to happen now. Want nothing more then to see" + locations + "ASAP!");
	hrOfTravleing--;
	};
	return hrOfTraveling;	
};

// String Function
var jetLag (country, hrOfTraveling) {
	mustSleep = "heads hits the pillow";
	hotelRoom = "W Hotel"
	console.log ("Now that we have arrived in" + country + " we will let our" + mustSleep + "in the amazing" + hotelRoom + "so that we can actually explore" + locations + "with as little jet lag as possible");
	return hotelRoom
};

// Array Function
var 