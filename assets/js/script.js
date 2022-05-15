var counter = 20;
var challenges = [
    {
       challenge: '#1?',
       answers: [
           'A',
           'B',
           'C',
           'D',
       ],
    answer: 'C'
    },
    {
        challenge: '#2',
        answers: [
            'A',
            'B',
            'C',
            'D',
        ],
        answer: 'D',
    },
    {
        challenge: '#3',
        answers: [
            'a',
            'b',
            'c',
            'd',
        ],
        answer: 'a', 
    },
];

 var playBtn = document.getElementById('playBtn');
 var playWindow = document.getElementById('playWindow');
 var challenegeDisplay = document.getElementById('challengeDisplay');
 var challengeText = document.getElementById('challengeText');
 var answerBox = document.getElementById('answerBox');
 
 function play(){
     playWindow.classList.add('hidden');
     challengeText.textContent = answer;

     for (var i = 0; i < challenges.length; i++) {
         const answer = challenges[i];
     }
 }
 
 playBtn.addEventListener('click', play);
 play();

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