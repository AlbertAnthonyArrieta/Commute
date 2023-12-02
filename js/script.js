// Run this function every minute
// setInterval(function() {
//     var now = new Date();
//     var hours = now.getHours();
//     var minutes = now.getMinutes();

//     // Check if it's midnight
//     if (hours === 0 && minutes === 10) {
//         // Make Josh disappear
//         var josh = document.getElementById('josh');
//         josh.style.display = "none";
//     }
// }, 1000);

// setVisibility("josh", false);
// setVisibility("josh", true);

document.getElementById('myRange').addEventListener('input', function () {
    var value = this.value;

    // Time
        // Map the slider value from [0, 100] to [6, 22]
        var hour = Math.round((value / 100) * (22 - 6) + 6);
        // Format the hour in a 12-hour format
        var formattedHour = hour > 12 ? hour - 12 : hour;
        var amPm = hour >= 12 ? 'PM' : 'AM';
        // Update the "time" element's text
        document.getElementById('clock').textContent = formattedHour + ':00 ' + amPm;
    // Erwin
    if (value >= 0 && value <= 40 || 75 <= value && value <= 100) {
        setVisibility('erwin', true);
    } else {
        setVisibility('erwin', false);
    }

    // Josh
    if (value >= 5 && value <= 35 || 70 <= value && value <= 85) {
        setVisibility('josh', true);
    } else {
        setVisibility('josh', false);
    }

    //Lorrie
    if (value >= 5 && value <= 35) {
        setVisibility('lorrie', true);
    } else {
        setVisibility('lorrie', false);
    }

    //Jorge
    if (value >= 15 && value <= 25 || 55 <= value && value <= 65) {
        setVisibility('jorge', true);
    } else {
        setVisibility('jorge', false);
    }

    //Trisha
    if (value >= 25 && value <= 40 || 60 <= value && value <= 90) {
        setVisibility('trisha', true);
    } else {
        setVisibility('trisha', false);
    }

    //Ysabel
    if (value >= 35 && value <= 50 || 60 <= value && value <= 85) {
        setVisibility('ysabel', true);
    } else {
        setVisibility('ysabel', false);
    }

    //Nora
    if (value >= 55 && value <= 85) {
        setVisibility('nora', true);
    } else {
        setVisibility('nora', false);
    }
});

function setVisibility(character, visibility) {
    var character = document.getElementById(character);
    if (visibility == false) {
        character.style.display = "none";
    } else if (visibility == true) {
        character.style.display = "inline";
    }
}