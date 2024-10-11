window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var countdown = 15; // Reset countdown to 15 for each slide
var interval = setInterval(function() {
    if (countdown > 0) {
        countdown--;
        player.SetVar("Timer", countdown); // Update the Timer variable
    } else {
        clearInterval(interval); // Stop the countdown when it reaches 0
        player.SetVar("SubmitInteraction", true); // Submit interaction

        // After 500ms, jump to the next slide
        setTimeout(function() {
            player.SetVar("JumpToNextSlide", true);
        }, 500);
    }
}, 1000); // Countdown runs every second
}

window.Script2 = function()
{
  var countdown = 15; // Reset countdown to 15 for each slide
var interval = setInterval(function() {
    if (countdown > 0) {
        countdown--;
        player.SetVar("Timer", countdown); // Update the Timer variable
    } else {
        clearInterval(interval); // Stop the countdown when it reaches 0
        player.SetVar("SubmitInteraction", true); // Submit interaction

        // After 500ms, jump to the next slide
        setTimeout(function() {
            player.SetVar("JumpToNextSlide", true);
        }, 500);
    }
}, 1000); // Countdown runs every second
}

window.Script3 = function()
{
  var countdown = 15; // Reset countdown to 15 for each slide
var interval = setInterval(function() {
    if (countdown > 0) {
        countdown--;
        player.SetVar("Timer", countdown); // Update the Timer variable
    } else {
        clearInterval(interval); // Stop the countdown when it reaches 0
        player.SetVar("SubmitInteraction", true); // Submit interaction

        // After 500ms, jump to the next slide
        setTimeout(function() {
            player.SetVar("JumpToNextSlide", true);
        }, 500);
    }
}, 1000); // Countdown runs every second
}

window.Script4 = function()
{
  var countdown = 15; // Reset countdown to 15 for each slide
var interval = setInterval(function() {
    if (countdown > 0) {
        countdown--;
        player.SetVar("Timer", countdown); // Update the Timer variable
    } else {
        clearInterval(interval); // Stop the countdown when it reaches 0
        player.SetVar("SubmitInteraction", true); // Submit interaction

        // After 500ms, jump to the next slide
        setTimeout(function() {
            player.SetVar("JumpToNextSlide", true);
        }, 500);
    }
}, 1000); // Countdown runs every second
}

};
