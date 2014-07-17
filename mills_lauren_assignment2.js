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


