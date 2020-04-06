var g = document.querySelectorAll("#kalendaroutzone > div");

var adate = new Date();
var month = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec",];
var day = [7, 1, 2, 3, 4, 5, 6]; //week start on monday

var x = 0;
function plusMonth() {
	x = x - 1;
	createCalendar();
};
function minusMonth() {
	x = x + 1;
	createCalendar();
};

function createCalendar() {
	var date = new Date(adate.getFullYear(), adate.getMonth() + x, adate.getDate());
	var firstdayofmonth = new Date(date.getFullYear(), date.getMonth(), 1, date.getDay());
	var numberOfDays = new Date(date.getFullYear(), date.getMonth() + 1, 0); //numberOfDays.getDate();

								//month & year on the top of the calendar
	var MonthAndYear = month[date.getMonth()] + "\xa0" + date.getFullYear();
	document.getElementById("Month+Year").innerHTML = MonthAndYear;
								//END

								//calendar
		//before
	var lastday = new Date(date.getFullYear(), date.getMonth(), 0);
	var z = lastday.getDate();

	for (i = 7; i < day[firstdayofmonth.getDay()] + 6; i++) {
		g[i].innerHTML = z++ - day[firstdayofmonth.getDay()] + 2;
		g[i].style.color = "#b5b5b5";
		g[i].style.backgroundColor = "white";
	};

		//full month
	var h = 1;
	for (var i = day[firstdayofmonth.getDay()] + 6; i < day[firstdayofmonth.getDay()] + numberOfDays.getDate() + 6; i++) {
		g[i].innerHTML = h++;
		g[i].style.color = "black";
		if (adate.getMonth() != date.getMonth()) {
			g[i].style.backgroundColor = "white";
		}
		else {
			g[adate.getDate() + 5 + day[firstdayofmonth.getDay()]].style.backgroundColor = "#f2c31a";
		}
	};
	h = 1;

		//next month start
	for (i = day[firstdayofmonth.getDay()] + numberOfDays.getDate() + 6; i < 49; i++) {
		g[i].innerHTML = h++;
		g[i].style.color = "#b5b5b5";
		g[i].style.backgroundColor = "white";
	}
}
createCalendar();