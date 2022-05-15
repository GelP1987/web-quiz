var currentChallengeIndex = 0;
var counter = 20;
var counterindex;
var challenges = [
    {
       challenge: "Is JavaScript Case Sensitive?",
       answers: [
           "Yes",
           "No",
           "Godzilla",
           "Maybe gurl Idk",
       ],
        answer: 'Yes',
    },
    {
        challenge: 'Which of the following is not an appropriate answer to a boolean',
        answers: [
            'True',
            'False',
            'Meh',
        ],
        answer: 'Meh',
    },
    {
        challenge: 'Is JavaScript synonomous with Java',
        answers: [
            'Yes',
            'No',
        ],
        answer: 'No', 
    },
];
 var playBtn = document.getElementById('play-btn');
 var playWindow = document.getElementById('play-window');
 var challengeDisplay = document.getElementById('challenge-display');
 var challengeText = document.getElementById('challenge-text');
 var answerBox = document.getElementById('answer-box');
 var counterSpan = document.getElementById('counter');
 var highScoreScreen = document.getElementById('high-score-screen');
 

    function startTime() {
    counterInterval = setInterval(() => {
        counter--;

        if (counter > 0) {
            counterSpan.textContent = counter;
        }
        if (counter <= 0) {
            clearInterval(counterInterval);
            endQuiz();
        }
    }, 1000);
}

function displayChallenge() {
    challengeText.textContent = challenges[currentChallengeIndex].challenge;

    var answers = challenges[currentChallengeIndex].answers;

    answerBox.innerHTML= '';

    for (var i = 0; i < answers.length; i++) {
        const answer = answers[i];
        var answerElementButton = document.createElement ('button');
        answerElementButton.textContent = answer;
        answerElementButton.addEventListener('click' , checkAnswer);
    answerBox.appendChild(answerElementButton);
 }
}
function checkAnswer(event) {
    var answerClicked = event.target;
    var currentChallenge = challenges[currentChallengeIndex];
    var isCorrect = answerClicked.innerText === currentChallenge.answer;
    console.log("isCorrect:  " + isCorrect);


    if (!isCorrect) {
        counter = counter - 5;
    }
currentChallengeIndex  = currentChallengeIndex + 1;

if (currentChallengeIndex < challenges.length) {
    displayChallenge();
}
else {
    endQuiz()
}
}
function endQuiz() {
    clearInterval(counterInterval);
    challengeDisplay.classList.add('hidden');
    highScoreScreen.classList.remove('hidden');
    var prompt = window.prompt ('Enter your initials to save your score!')
    console.log(prompt);
    var highscore = localStorage.getItem("JSQuizHS");

if(highscore !== null){
    if (counter > highscore) {
        localStorage.setItem("JSQuizHS",[prompt, counter])  
    }
}
else{
    localStorage.setItem("JSQuizHS",[prompt, counter]);
}
}
function play() {
    playWindow.classList.add('hidden');
    counterSpan.textcontent = counter;
    displayChallenge();
    startTime();
 }
 
playBtn.addEventListener('click', play);

/* <!-- GIVEN I am taking a code quiz -->
<!-- WHEN I click the start button -->
<!-- THEN a timer starts and I am presented with a question -->
<!-- WHEN I answer a question -->
<!-- THEN I am presented with another question -->
<!-- WHEN I answer a question incorrectly -->
<!-- THEN time is subtracted from the clock -->
<!-- WHEN all questions are answered or the timer reaches 0 -->
<!-- THEN the game is over -->
<!-- WHEN the game is over -->
<!-- THEN I can save my initials and score --> 
*/