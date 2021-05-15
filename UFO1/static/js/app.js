// UFO Activity 1 

// from data.js
var tableData = data;

// Read In data.js
function CreateUFOTable (inputdata) {
    // @TODO: Unpack the dates, open, high, low, close, and volume
        datetime = inputdata.map(inputdata => inputdata.datetime);
        city = inputdata.map(inputdata => inputdata.city);
        state = inputdata.map(inputdata => inputdata.state);
        country = inputdata.map(inputdata => inputdata.country);
        shape = inputdata.map(inputdata => inputdata.shape);
        durationMinutes = inputdata.map(inputdata => inputdata.durationMinutes);
        comments = inputdata.map(inputdata => inputdata.comments);
    // Call BuildTable function passing in arrays above
    buildTable(datetime, city, state, country, shape, durationMinutes, comments);
    };

// Builds Table in HTML file 
function buildTable(datetime, city, state, country, shape, durationMinutes, comments) {
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    var trow;
    for (var i = 0; i < 50; i++) {
      trow = tbody.append("tr");
      trow.append("td").text(datetime[i]);
      trow.append("td").text(city[i])
      trow.append("td").text(state[i]);
      trow.append("td").text(country[i]);
      trow.append("td").text(shape[i]);
      trow.append("td").text(durationMinutes[i]);
      trow.append("td").text(comments[i]);
    }
  }

// var datetimefield = d3.select("#datetime").on("click");
// console.log(datetimefield);

// ("#filter-btn").onclick(console.log("Add Market button clicked"));

var FilterButton = d3.select("#filter-btn");

// FilterButton.on("click", function() {
//     var FilterDate = d3.select("#datetime").value;
//     console.log(FilterDate)
//     console.log("click!")
// });

// function GetDate() {
//     var datefield = document.getElementById("form1")
//     var text = "";
//     var i;
//     for (i = 0; i < datefield.length ;i++) {
//       text += datefield.elements[i].value;
//       console.log(text)
//     }
// }

var date = ""

function GetDate() {
    date = document.getElementById("form1").elements[0].value;
    console.log(date)
    SearchDate(date)
}



// var filtered1 = tableData.filter(filterUFOdata)
// var filtered2 = filtered1.map(blah => blah.date)

function SearchDate (DateToSearch) {
    console.log("filterUFOdata commence " + DateToSearch);
    FilteredList = tableData.filter(ReturnMatchingDates);
    console.log(FilteredList)
};

function ReturnMatchingDates(something) {
    return something.datetime === date;
};

// filtered2.forEach(thing => {
//     console.log(thing.city)
// });

CreateUFOTable(tableData)

// YOUR CODE HERE!
