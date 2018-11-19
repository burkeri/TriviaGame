// Musical List

// 1) Hairspay
// 2) The Fantasticks
// 3) Aida
// 4) Come From Away 
// 5) Into the Woods
// 6) Next to Normal 
// 7) Once on this Island
// 8) Pippin
// 9) A Chorus Line
// 10) Dear Evan Hansen 

// Musical Object

var trivia = [
    {
        name: "Hairspray",
        opSong: "assets/audio/goodmorningbaltimore.mp3",
        image: "assets/images/hairspray.jpg",
        choice1: "Once on this Island",
        choice2: "Hairspray",
        choice3: "Dear Evan Hansen",
        choice4: "Aida",
        answer: 2
    },
    {
        name: "The Fantasticks",
        opSong: "assets/audio/trytoremember.mp3",
        image: "assets/images/the-fantasticks.jpg",
        choice1: "The Fantasticks",
        choice2: "Come From Away",
        choice3: "Pippin",
        choice4: "Next to Normal",
        answer: 1
    },
    {
        name: "Aida",
        opSong: "assets/audio/everystoryisalovestory.mp3",
        image: "assets/images/aida.jpg",
        choice1: "Aida",
        choice2: "A Chorus Line",
        choice3: "Into the Woods",
        choice4: "Pippin",
        answer: 1
    },
    {
        name: "Come From Away",
        opSong: "assets/audio/welcometotherock.mp3",
        image: "assets/images/come-from-away.jpg",
        choice1: "Hairspray",
        choice2: "Dear Evan Hansen",
        choice3: "Once on this Island",
        choice4: "Come From Away",
        answer: 4
    },
    {
        name: "Into the Woods",
        opSong: "assets/audio/prologue.mp3",
        image: "assets/images/into-the-woods.jpg",
        choice1: "A Chorus Line",
        choice2: "The Fantasticks",
        choice3: "Into the Woods",
        choice4: "Aida",
        answer: 3
    },
    {
        name: "Next to Normal",
        opSong: "assets/audio/justanotherday.mp3",
        image: "assets/images/next-to-normal.jpg",
        choice1: "Next to Normal",
        choice2: "Pippin",
        choice3: "Dear Evan Hansen",
        choice4: "Hairspray",
        answer: 1
    },
    {
        name: "Once on this Island",
        opSong: "assets/audio/wedance.mp3",
        image: "assets/images/once-on-this-island.jpg",
        choice1: "Aida",
        choice2: "Next to Normal",
        choice3: "Once on this Island",
        choice4: "Into the Woods",
        answer: 3
    },
    {
        name: "Pippin",
        opSong: "assets/audio/magictodo.mp3",
        image: "assets/images/pippin.jpg",
        choice1: "Come From Away",
        choice2: "A Chorus Line",
        choice3: "The Fantasticks",
        choice4: "Pippin",
        answer: 4
    },
    {
        name: "A Chorus Line",
        opSong: "assets/audio/ihopeigetit.mp3",
        image: "assets/images/a-chorus-line.jpg",
        choice1: "Once on this Island",
        choice2: "Hairspray",
        choice3: "A Chorus Line",
        choice4: "Dear Evan Hansen",
        answer: 3
    },
    {
        name: "Dear Evan Hansen",
        opSong: "assets/audio/anybodyhaveamap.mp3",
        image: "assets/images/dear-evan-hansen.jpg",
        choice1: "Into the Woods",
        choice2: "Come From Away",
        choice3: "Dear Evan Hansen",
        choice4: "Next to Normal",
        answer: 3
    }
]

// Global Variables

var score = 0;
var i = 0;
var timer = 30;
var song = new Audio(trivia[i].opSong);

function countdown () {
    $("#timer-numbers").text(timer);
    if (timer > 0) {
        timer--;
    }
}

// start the countdown
var stopwatch = setInterval(countdown, 1000);

function replaceQuizValues () {
    // reset the timer
    timer = 30;
    $("#timer-numbers").text(timer);
    // start the countdown
    setInterval(countdown, 1000);
    // change the text in the button to corresponding choices
    $("#ans1").text(trivia[i].choice1);
    $("#ans2").text(trivia[i].choice2);
    $("#ans3").text(trivia[i].choice3);
    $("#ans4").text(trivia[i].choice4);
    // assign the answer button a value of "answer"
    var answerBtn = "#ans" + trivia[i].answer;
    $(answerBtn).val(trivia[i].answer);
    // play the song question
    song = new Audio(trivia[i].opSong);
    song.play();
}

function checkAnswer () {
    // when a button is clicked
    $("button").click(function () {
        // if the value of the button is equal to the answer
        if (this.value == trivia[i].answer) {
            console.log("That's correct!");
            // turn off the timer
            clearInterval(stopwatch);
            // increase the score
            score++;
            //stop the song
            song.pause();
            // show the correct answer screen
            $("#reveal").fadeIn();
            $("#reveal-text").text("Correct!");
            $("#reveal-musical-image").attr("src", trivia[i].image);
            $("reveal-musical").text(trivia[i].name);
            // iterate i
            i++;
            // wait five seconds and reset the game
            setTimeout(replaceQuizValues, 5000);
            setTimeout(stopwatch, 5000);
        }
    });
}



// Game Start

$("#start").click( function () {
    // hide the start menu
    $("#start-menu").css("display", "none");
    $("#interface").fadeIn();
    // assigns first correct answer marker
    var answerBtn = "#ans" + trivia[0].answer;
    $(answerBtn).val(trivia[0].answer);
    // plays first song
    song = new Audio(trivia[0].opSong);
    song.play();
})

checkAnswer();

// To Do:
// when start is clicked