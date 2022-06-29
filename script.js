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

// Functions to save events in the local storage
document.getElementById("btnNine").addEventListener("click", function(){
    window.localStorage.setItem("9", $("#9am").val());
})

document.getElementById("btnTen").addEventListener("click", function(){
    window.localStorage.setItem("10", $("#10am").val());
})

document.getElementById("btnEleven").addEventListener("click", function(){
    window.localStorage.setItem("11", $("#11am").val());
})

document.getElementById("btnTwelve").addEventListener("click", function(){
    window.localStorage.setItem("12", $("#12pm").val());
})

document.getElementById("btnOne").addEventListener("click", function(){
    window.localStorage.setItem("13", $("#13pm").val());
})

document.getElementById("btnTwo").addEventListener("click", function(){
    window.localStorage.setItem("14", $("#14pm").val());
})

document.getElementById("btnThree").addEventListener("click", function(){
    window.localStorage.setItem("15", $("#15pm").val());
})

document.getElementById("btnFour").addEventListener("click", function(){
    window.localStorage.setItem("16", $("#16pm").val());
})

document.getElementById("btnFive").addEventListener("click", function(){
    window.localStorage.setItem("17", $("#17pm").val());
})

// Function to print saved data on the website
$(".timeDay").each(function(index) {
    $(this).text(localStorage.getItem(index + 9));
});