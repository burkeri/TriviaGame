
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

// Objects

var trivia = [
    {
        name: "Hairspray",
        opSong: "assets/audio/goodmorningbaltimore.mp3",
        choice1: "Once on this Island",
        choice2: "Hairspray",
        choice3: "Dear Evan Hansen",
        choice4: "Aida",
        answer: 2
    },
    {
        name: "The Fantasticks",
        opSong: "assets/audio/trytoremember.mp3",
        choice1: "The Fantasticks",
        choice2: "Come From Away",
        choice3: "Pippin",
        choice4: "Next to Normal",
        answer: 1
    },
    {
        name: "Aida",
        opSong: "assets/audio/everystoryisalovestory.mp3",
        choice1: "Aida",
        choice2: "A Chorus Line",
        choice3: "Into the Woods",
        choice4: "Pippin",
        answer: 1
    },
    {
        name: "Come From Away",
        opSong: "assets/audio/welcometotherock.mp3",
        choice1: "Hairspray",
        choice2: "Dear Evan Hansen",
        choice3: "Once on this Island",
        choice4: "Come From Away",
        answer: 4
    },
    {
        name: "Into the Woods",
        opSong: "assets/audio/prologue.mp3",
        choice1: "A Chorus Line",
        choice2: "The Fantasticks",
        choice3: "Into the Woods",
        choice4: "Aida",
        answer: 3
    },
    {
        name: "Next to Normal",
        opSong: "assets/audio/justanotherday.mp3",
        choice1: "Next to Normal",
        choice2: "Pippin",
        choice3: "Dear Evan Hansen",
        choice4: "Hairspray",
        answer: 1
    },
    {
        name: "Once on this Island",
        opSong: "assets/audio/wedance.mp3",
        choice1: "Aida",
        choice2: "Next to Normal",
        choice3: "Once on this Island",
        choice4: "Into the Woods",
        answer: 3
    },
    {
        name: "Pippin",
        opSong: "assets/audio/magictodo.mp3",
        choice1: "Come From Away",
        choice2: "A Chorus Line",
        choice3: "The Fantasticks",
        choice4: "Pippin",
        answer: 4
    },
    {
        name: "A Chorus Line",
        opSong: "assets/audio/ihopeigetit.mp3",
        choice1: "Once on this Island",
        choice2: "Hairspray",
        choice3: "A Chorus Line",
        choice4: "Dear Evan Hansen",
        answer: 3
    },
    {
        name: "Dear Evan Hansen",
        opSong: "assets/audio/anybodyhaveamap.mp3",
        choice1: "Into the Woods",
        choice2: "Come From Away",
        choice3: "Dear Evan Hansen",
        choice4: "Next to Normal",
        answer: 3
    }
]

var i = 0;
var timer = 30;
var song = new Audio(trivia[i].opSong);

var functions = {

    timer: function () {
        $("#timer-numbers").text(timer);
        if (timer > 0) {
            timer--;
        }
    },

    countdown: function () {
        setInterval(this.timer, 1000);
    },

    replaceQuizValues: function () {
        // change the text in the button to corresponding choices
        $("#ans1").text(trivia[i].choice1);
        $("#ans2").text(trivia[i].choice2);
        $("#ans3").text(trivia[i].choice3);
        $("#ans4").text(trivia[i].choice4);
        // start the countdown
        this.countdown();
        // assign the answer button a value of "answer"
        var answerBtn = "#ans" + trivia[i].answer;
        $(answerBtn).val(trivia[i].answer);
        // play the song question
        song.play();
        // iterate i
        i++;
    }

}

$("#ans1").click( function () {
    functions.replaceQuizValues();
})

// when start is pressed call replaceQuizValues
// while i < 10

