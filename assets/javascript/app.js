var questions = [{
    ques: "Who's the best team in the World lol?",
    ans: ["Italy", "Italy", "Italy", "Italy"],
    name: "theBest",
    correct: "Italy",
    divClass: ".theBest"
},
{
    ques: "Which country ended the Civil War by qualifying to the World Cup?",
    ans: ["Russia", "Colombia", "North Korea", "Ivory Coast"],
    name: "civilWar",
    correct: "Ivory Coast",
    divClass: ".civilWar"
},
{
    ques: "Who's the player with most World Cups wins?",
    ans: ["Pele", "Buffon", "Batistuta", "Ronaldo"],
    name: "mostWins",
    correct: "Pele",
    divClass: ".mostWins"
},
{
    ques: "Who scored The Hand of God goal?",
    ans: ["CR7", "Messi", "Maradona", "Totti"],
    name: "handGod",
    correct: "Maradona",
    divClass: ".handGod"
},
{
    ques: "Who won the World Cup in 2014?",
    ans: ["France", "Germany", "Italy", "Argentina"],
    name: "whoWon",
    correct: "Germany",
    divClass: ".whoWon"
},
{
    ques: "How often is the World Cup played?",
    ans: ["Every year", "Every other year", "Every four years", "Every five years"],
    name: "howOften",
    correct: "Every four years",
    divClass: ".howOften"
},
{
    ques: "Who is the player with most goals in World Cups?",
    ans: ["Ronaldo", "Pele", "Maradona", "Miroslav klose"],
    name: "mostGoals",
    correct: "Miroslav klose",
    divClass: ".mostGoals"
},
{
    ques: "How many teams play in the World Cup?",
    ans: ["25", "14", "32", "85"],
    name: "howMany",
    correct: "32",
    divClass: ".howMany"
},
{
    ques: "Witch country has the most World Cups?",
    ans: ["Brazil", "Croatia", "England", "Argentina"],
    name: "mostTrophy",
    correct: "Brazil",
    divClass: ".mostTrophy"
},
{
    ques: "Witch country won the first world cup?",
    ans: ["Brazil", "Italy", "Uruguay", "Germany"],
    name: "firstWinner",
    correct: "Uruguay",
    divClass: ".firstWinner"
}]

var labels = ["first", "second", "third", "forth"];

var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});

var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
for (var i = 0; i <= 3; i++) {
$(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}

var countdown = function(seconds) {
var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    
for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

correctAnswers++;
console.log("this is correct! number:" + i)
} 
else {
wrongAnswers++;
console.log("this is wrong! number:" + i)
};
}
    
$('#correctTimesUp').append(correctAnswers);
$('#wrongTimesUp').append(wrongAnswers);
$('#timesUp').fadeIn(500).show();

clearInterval(timer);
return;
}
}, 1000);

$('#sub-but').on('click', function() {
clearInterval(timer);
})
};

var gradeQuiz = $('#sub-but').on('click', function() {
var correctAnswers = 0;
var wrongAnswers = 0;

for (var i = 0; i < 10; i++) {
if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

correctAnswers++;
console.log("this is correct! number:" + i)
} 
else {
wrongAnswers++;
console.log("this is wrong! number:" + i)
};
};

countdown();
$('.container').fadeOut(500);
$('#answerScreen').show();
$('#correctScreen').append(correctAnswers);
$('#wrongScreen').append(wrongAnswers);
}); 