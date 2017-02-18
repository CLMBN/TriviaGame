var startGame;
var gameHTML;
var counter = 30;
var questionArray = [
"Which London suburb is also the name of a film starring Hugh Grant and Julia Roberts?", 
"Which of these Beatles songs was NOT also a Beatles film?", 
"In 'Finding Nemo' what is unusual about Nemo?", 
"Finish this line from 'The Princess Bride': 'Hello. My name is Inigo Montoya ...'", 
"Agent Smith is a villain in which film series?", 
"Sarah Connor is a key character in which movie franchise?", 
"What country is Lord of the Rings director Peter Jackson from?", 
"Which Harry Potter book was made into two movies instead of one?",
"What is the name of the young heroine in 'The Hunger Games'?",
"Which of these films did not star Marilyn Monroe?",
"Which of these Tim Burton movies teamed up Johnny Depp and Winona Ryder?",
"What is the name of the title character in Anchorman?",
"Which historic Queen was played on-screen by Elizabeth Taylor?",
"Which of these romantic comedies did NOT team up Meg Ryan and Tom Hanks?",
"Which film sees Katherine Hepburn and Humphrey Bogart journeying on the Ulanga River in German East Africa at the outbreak of World War I?",
"What is the title of the first film in the series of four movies about Jason Bourne?",
"Which Avengers superhero is played by Chris Hemsworth?"
];

var answerArray = [
["Notting Hill", "Ealing Common", "Wimbledon", "Knightsbridge"], 
["Yellow Submarine","Hard Days Night","Help!","All You Need Is Love"], 
["He's 150 years old", "He has a tiny fin on one side of his body", "He's immune to jellyfish stings", "He's a clownfish who isn't funny"], 
["'You seem a decent fellow. I hate to kill you.'","'We are men of action. Lies do not become us.'","'I'll probably kill you in the morning.'","'You killed my father. Prepare to die.'"], 
["Lethal Weapon", "Men In Black", "The Matrix", "Batman"], 
["Terminator","Mission: Impossible","Harry Potter","Austin Powers"], 
["Ireland", "New Zealand", "Australia", "UK"], 
["Harry Potter and the Order of the Phoenix","Harry Potter and the Half-Blood Prince","Harry Potter and the Deathly Hallows","Harry Potter and the Goblet of Fire"],
["Katherine Evergreen", "Katerina Eveleen", "Katniss Everdeen", "Kathleen Evergrow"],
["Gentlemen Prefer Blondes", "Some Like it Hot", "The Prince and the Showgirl", "My Fair Lady"],
["Edward Scissorhands", "Alice in Wonderland", "Sweeney Todd", "Beetlejuice"],
["Ron Burgundy", "Ron Merlot", "Ron Malbec", "Ron Bordeaux"],
["Catherine the Great", "Queen of Sheba", "Cleopatra", "Victoria"],
["You've Got Mail", "Sleepless In Seattle", "Joe Versus The Volcano", "10 Things I Hate About You"],
["King Solomon's Mines", "Cry Freedom", "Out of Africa", "The African Queen"],
["The Bourne Legacy", "The Bourne Identity", "The Bourne Ultimatum", "The Bourne Supremacy"],
["Iron Man", "Thor", "Captain America", "Incredible Hulk"]
];

var imageArray = [
"<img class='center-block img-right' src='https://media0.giphy.com/media/dqnpI1M64dm8w/giphy.gif'>", 
"<img class='center-block img-right' src='https://media2.giphy.com/media/slTT5TPKRRB5e/giphy.gif'>", 
"<img class='center-block img-right' src='https://media2.giphy.com/media/dwNXg3bqFu55m/giphy.gif'>", 
"<img class='center-block img-right' src='http://i2.kym-cdn.com/photos/images/original/000/848/955/aa5.gif'>", 
"<img class='center-block img-right' src='https://media3.giphy.com/media/nGnKGLOqzhfGM/giphy.gif'>", 
"<img class='center-block img-right' src='https://media4.giphy.com/media/NLVQbvqrmOa5O/giphy.gif'>", 
"<img class='center-block img-right' src='https://media1.giphy.com/media/mdoXmObu50euQ/giphy.gif'>", 
"<img class='center-block img-right' src='https://media2.giphy.com/media/ojszZKU4iLI4M/giphy.gif'>",
"<img class='center-block img-right' src='https://media2.giphy.com/media/l4Ki7tArmXltT2c9y/giphy.gif'>",
"<img class='center-block img-right' src='https://media0.giphy.com/media/uOOEvRtwhx58Q/giphy.gif'>",
"<img class='center-block img-right' src='https://media3.giphy.com/media/l2JhzZkCGF9tBWatO/giphy.gif'>",
"<img class='center-block img-right' src='https://media2.giphy.com/media/M9YhIkJcXOgog/giphy.gif'>",
"<img class='center-block img-right' src='https://media4.giphy.com/media/3o6ZtiUTLsubPQnZSg/giphy.gif'>",
"<img class='center-block img-right' src='https://media4.giphy.com/media/XCPvKiP8eIyKk/giphy.gif'>",
"<img class='center-block img-right' src='https://media0.giphy.com/media/PPBNwfSsvO7x6/giphy.gif'>",
"<img class='center-block img-right' src='https://media0.giphy.com/media/xT0GqD5vPp1e0hkGZy/giphy.gif'>",
"<img class='center-block img-right' src='https://media0.giphy.com/media/EOfarA6ZUqzZu/giphy.gif'>"
];

var correctAnswers = [
"A. Notting Hill", 
"D. All You Need Is Love", 
"B. He has a tiny fin on one side of his body", 
"D. 'You killed my father. Prepare to die.'", 
"C. The Matrix", 
"A. Terminator", 
"B. New Zealand", 
"C. Harry Potter and the Deathly Hallows",
"C. Katniss Everdeen",
"D. My Fair Lady",
"A. Edward Scissorhands",
"A. Ron Burgundy",
"C. Cleopatra",
"D. 10 Things I Hate About You",
"D. The African Queen",
"B. The Bourne Identity",
"B. Thor"
];
var questionCounter = 0;
var selectedAnswer;
var countDown;
var correctTotal = 0;
var incorrectTotal = 0;
var unansweredTotal = 0;
var clickSound = new Audio("assets/sound/button-click.mp3");
var correctSound = new Audio("assets/sound/win.mp3");
var wrongSound = new Audio("assets/sound/wrong.mp3");
var fiveSeconds = new Audio("assets/sound/tictoc.mp3");

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><button class='answer btn btn-block btn-primary'>A. " + answerArray[questionCounter][0] + "</button><button class='answer btn btn-block btn-primary'>B. "+answerArray[questionCounter][1]+"</button><button class='answer btn btn-block btn-primary'>C. "+answerArray[questionCounter][2]+"</button><button class='answer btn btn-block btn-primary'>D. "+answerArray[questionCounter][3]+"</button>";
	/*questionGenerator():*/
	$(".mainGame").html(gameHTML);
};
/*
function questionGenerator() {
	for (var i = 0; i < questionArray.length; i++) {
		questionArray[i]
	}
}*/

function countdownWrapper() {
	countDown = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(countDown);
			generateTimeoutAlert();
		}
		if (counter < 7) {
			fiveSeconds.play();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function generateTimeoutAlert() {
	/*notansweredTotal++;*/
	wrongSound.play();
	counter = 30
	unansweredTotal++;
	gameHTML = "<p class='text-center'>Time is up!  The correct answer was: <br><strong>" + correctAnswers[questionCounter] + "</strong></p>" + imageArray[questionCounter];
	$(".mainGame").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateWin() {
	correctSound.play();
	counter = 30
	correctTotal++;
	gameHTML = "</p>" + "<p class='text-center'>You  Are Correct! The answer is: <br><strong>" + correctAnswers[questionCounter] + "</strong></p>" + imageArray[questionCounter];
	$(".mainGame").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateLoss() {
	wrongSound.play();
	counter = 30
	incorrectTotal++;
	gameHTML = "</p>" + "<p class='text-center'>You Are Wrong! The correct answer is: <br><strong>"+ correctAnswers[questionCounter] + "</strong></p>" + imageArray[questionCounter];
	$(".mainGame").html(gameHTML);
	setTimeout(wait, 4000);
}

function wait() {
	if (questionCounter < 16) {
		questionCounter++;
		generateHTML();
		counter = 30;
		countdownWrapper();
	}
	else {
		resultScreen();
	}
}

function resultScreen() {
	gameHTML = "<p class='text-center'>Thanks for Playing! Here's how you did!</p>" + "<p class='summary-correct'>Correct Answers: " + correctTotal + "</p>" + "<p>Wrong Answers: " + incorrectTotal + "</p>" + "<p>Unanswered: " + unansweredTotal + "</p>" + "<button class='text-center btn btn-primary btn-lg btn-block reset-btn'>Reset The Quiz!</button>";
	$(".mainGame").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTotal = 0;
	incorrectTotal = 0;
	unansweredTotal = 0;
	counter = 30;
	generateHTML();
	countdownWrapper();
}

//Start the Game

$(document).ready(function() {
// Create start button and home screen when page loads

function mainScreen() {
		startGame = "<p class='text-center main-button-container'><a class='btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
		$(".mainGame").html(startGame);
	}

mainScreen();

// when start button is clicked generate the html on the page with the questions

$("body").on("click", ".start-button", function(event){
	clickSound.play();
	generateHTML();

	countdownWrapper();

}); //end start button click

$("body").on("click", ".answer", function(event) {
	clickSound.play();
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		//correct answer

		clearInterval(countDown);
		generateWin();
	}
	else {
		//wrong answer
		clearInterval(countDown);
		generateLoss();
	}

}) //end answer click

$("body").on("click", ".reset-btn", function(event) {
	clickSound.play();
	resetGame();

}) // end reset function

}) //end document ready function

