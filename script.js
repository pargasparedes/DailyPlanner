// Variables for date and time
var today = moment();
var hour = moment().hours();

// Displaying date on header
$("#currentDay").text(today.format("dddd, MMMM Do"));

// Function to set time-of-day backgrounds
$(".timeDay").each(function() {
var timeTest = parseInt($(this).attr("id"));
hour = parseInt(hour);

if (hour > timeTest) {
    $(this).addClass("past");
} else if (hour < timeTest) {
    $(this).addClass("future");
} else {
    $(this).addClass("present");
}
});