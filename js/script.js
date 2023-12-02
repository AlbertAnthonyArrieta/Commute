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
    if (value >= 5 && value <= 20 || 70 <= value && value <= 85) {
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

document.getElementById('erwin').addEventListener('click', function () {
    document.getElementById('info').innerHTML = "<h2>Erwin</h2>" +
        "<p>Erwin's day begins with a peaceful 5 am neighborhood walk, followed by a 6 am train journey to see his treasured grandchildren. Their time together fills his heart with joy, yet the tiredness of the day occasionally leads him to doze off on the way back, causing him to miss his stop. Nevertheless, the happiness derived from his grandchildren's company makes any missed station a small price to pay for the cherished moments they share.</p>";
});

document.getElementById('trisha').addEventListener('click', function () {
    document.getElementById('info').innerHTML = "<h2>Trisha and Daisy</h2>" +
        "<p>Trisha takes her happy 8-month-old to the park for a morning picnic with friends. They enjoy good food and company amidst nature's beauty. Afterward, they head to the nearby shops to pick up groceries before strolling back home. Carrying bags of essentials, they enjoy the familiar sights on their way back, ending their day with a peaceful walk in the neighborhood.</p>";
});

document.getElementById('jorge').addEventListener('click', function () {
    document.getElementById('info').innerHTML = "<h2>Jorge</h2>" +
        "<p>Jorge, a vibrant 4th-grade student, starts his day by catching the train to school at 10:30 am. When the clock strikes 3:15 pm, he heads back home, excited to unwind with his favorite video games and tackle his homework. Finding a balance between fun and studies, Jorge enjoys his leisure time while responsibly completing his school tasks, making the most of his after-school routine.</p>";
});

document.getElementById('nora').addEventListener('click', function () {
    document.getElementById('info').innerHTML = "<h2>Nora</h2>" +
        "<p>Nora, a cheerful and bright 3rd grader, shares the same school as Jorge and begins her day with a ride to school courtesy of her father. However, as her father is occupied with work during her return home, Nora takes the train solo. Occasionally, she breaks her journey by alighting at an earlier stop, not just for a quick snack from a nearby eatery but also to relish a leisurely walk home. This short detour allows her to savor a scenic route, absorbing the sights and sounds of her neighborhood, making her homeward journey a delightful adventure filled with small pleasures.</p>";
});

document.getElementById('josh').addEventListener('click', function () {
    document.getElementById('info').innerHTML = "<h2>Josh</h2>" +
        "<p>Josh puts in his hours at a 9-5 job, often feeling like he's just pushing through the day's tasks. His main wish is to buy a new car soon so that he can drive himself to work and back without relying on public transportation. He looks forward to the independence and ease that having his own car will bring, imagining the convenience of a simple commute, free from the hassles of buses or trains. This goal keeps him motivated as he works, providing a glimmer of hope for a more straightforward daily routine in the near future.</p>";
});

document.getElementById('ysabel').addEventListener('click', function () {
    document.getElementById('info').innerHTML = "<h2>Ysabel</h2>" +
        "<p>Ysabel is thrilled to catch up with her friend who's visiting the city for a short while. Even though her friend has a busy schedule with family commitments, they can only manage a couple of hours to meet up. Despite the limited time and the effort it takes to commute, Ysabel treasures these moments with her friend. For her, the chance to see her friend, even briefly, makes every journey worthwhile.</p>";
});

document.getElementById('lorrie').addEventListener('click', function () {
    document.getElementById('info').innerHTML = "<h2>Lorrie</h2>" +
        "<p>Lorrie plans to meet her friends for lunch, knowing she has the longest journey to the meet-up spot, so she wakes up early to catch the train. After a bustling day with her friends, one of them kindly offers her a ride home, understanding the distance she'd have to cover. Thankful for the gesture, Lorrie happily accepts, relieved that she doesn't have to travel a long way back on the train. The friend's generosity and the ease of the ride make her day even better, wrapping up the outing on a grateful and cheerful note.</p>";
});


function setVisibility(character, visibility) {
    var character = document.getElementById(character);
    if (visibility == false) {
        character.style.display = "none";
    } else if (visibility == true) {
        character.style.display = "inline";
    }
}