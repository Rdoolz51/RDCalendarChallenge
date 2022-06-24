var dayEl = document.querySelector("#currentDay");
//set date/time 
var currentTime = moment().format('LLLL');
dayEl.textContent = currentTime;
//check every second to see if the time has updated and update it in the dayEl.
var checkTime = setInterval(function () {
    currentTime = moment().format('LLLL');
    dayEl.textContent = currentTime;
    setColor();
}, 1000);
//converts time to 24hour time to make comparisons easier.
var timeTester = moment().format("HH");
setColor();

//determines what color each block should be based on time of event relative to current time and assigning the class accordingly
function setColor() {
    $(".event").each(function () {

        var eventTime = parseInt($(this).attr("id"));

        if (eventTime < timeTester) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if (eventTime == timeTester) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }

    })
}

//grabs any previous events from localstorage.
$("#9 .event").val(localStorage.getItem("9"));
$("#10 .event").val(localStorage.getItem("10"));
$("#11 .event").val(localStorage.getItem("11"));
$("#12 .event").val(localStorage.getItem("12"));
$("#13 .event").val(localStorage.getItem("13"));
$("#14 .event").val(localStorage.getItem("14"));
$("#15 .event").val(localStorage.getItem("15"));
$("#16 .event").val(localStorage.getItem("16"));
$("#17 .event").val(localStorage.getItem("17"));

//saves events to localstorage
$(".saveBtn").on("click", function () {
    var time = $(this).siblings(".event").attr("id");
    var event = $(this).siblings(".event").val();
    localStorage.setItem(time, event);
});

//optional code to save events to localstorage when the user clicks outside of the textarea.

// $(".event").on("blur", function () {
//     var time = $(this).attr("id");
//     var event = $(this).val();
//     localStorage.setItem(time,event);
// });





