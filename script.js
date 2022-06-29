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
    window.localStorage.setItem("nueve", $("#9am").val());
})

document.getElementById("btnTen").addEventListener("click", function(){
    window.localStorage.setItem("diez", $("#10am").val());
})

document.getElementById("btnEleven").addEventListener("click", function(){
    window.localStorage.setItem("once", $("#11am").val());
})

document.getElementById("btnTwelve").addEventListener("click", function(){
    window.localStorage.setItem("doce", $("#12pm").val());
})

document.getElementById("btnOne").addEventListener("click", function(){
    window.localStorage.setItem("trece", $("#13pm").val());
})

document.getElementById("btnTwo").addEventListener("click", function(){
    window.localStorage.setItem("catorce", $("#14pm").val());
})

document.getElementById("btnThree").addEventListener("click", function(){
    window.localStorage.setItem("quince", $("#15pm").val());
})

document.getElementById("btnFour").addEventListener("click", function(){
    window.localStorage.setItem("dieciseis", $("#16pm").val());
})

document.getElementById("btnFive").addEventListener("click", function(){
    window.localStorage.setItem("diecisiete", $("#17pm").val());
})

// Function to print saved data on the website