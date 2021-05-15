// UFO Activity 1 

// get data from data.js
var tableData = data;

// Read In data.js and map into arrays 
function CreateUFOTable (inputdata) {
    // @TODO: Unpack the dates, open, high, low, close, and volume
        datetime = inputdata.map(inputdata => inputdata.datetime);
        city = inputdata.map(inputdata => inputdata.city);
        state = inputdata.map(inputdata => inputdata.state);
        country = inputdata.map(inputdata => inputdata.country);
        shape = inputdata.map(inputdata => inputdata.shape);
        durationMinutes = inputdata.map(inputdata => inputdata.durationMinutes);
        comments = inputdata.map(inputdata => inputdata.comments);
    // Call BuildTable function whcich passes in the arrays above
    buildTable(datetime, city, state, country, shape, durationMinutes, comments);
    };

// Builds Table in HTML document 
function buildTable(datetime, city, state, country, shape, durationMinutes, comments) {
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    var trow;
    for (var i = 0; i < datetime.length; i++) {
      trow = tbody.append("tr");
      trow.append("td").text(datetime[i]);
      trow.append("td").text(city[i])
      trow.append("td").text(state[i]);
      trow.append("td").text(country[i]);
      trow.append("td").text(shape[i]);
      trow.append("td").text(durationMinutes[i]);
      trow.append("td").text(comments[i]);
    };
};

// Master Function to delete and rebuild table from entered date 
function ReBuildTable() {
    GetDate();
    var DateFilteredUFOList = SearchDate(date);
    DeteleTable();
    CreateUFOTable(DateFilteredUFOList);
};

// Child Function to get Date from HTML form
var date = ""
function GetDate() {
    date = document.getElementById("form1").elements[0].value;
    console.log(date)
};

// Child Function to search original dataset for matches against Date 
// Return results to Master Function 
function SearchDate (DateToSearch) {
    console.log("filterUFOdata commence " + DateToSearch);
    var DateFilteredUFOList = tableData.filter(ReturnMatchingDates);
    return DateFilteredUFOList;
};

// Child Function for Filter 
function ReturnMatchingDates(row) {
    return row.datetime === date;
};

// Child Function to Delete HTML Table 
function DeteleTable() {
    console.log("Delete Table Commence")
    for(var i = document.getElementById("ufo-table").rows.length; i > 1;i--) {
        document.getElementById("ufo-table").deleteRow(i -1);
    }
};

// Execute Primary Function 
CreateUFOTable(tableData)


