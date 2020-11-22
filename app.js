const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGameButton = document.getElementsByClassName('btn__reset')[0];
const ul = document.getElementById('phrase').querySelector('ul');
const ol = document.getElementById('scoreboard').querySelector('ol');
let liveHeart = document.querySelectorAll('IMG');
let triesImg = Array.from(document.querySelectorAll('.tries img'));
const overlay = document.getElementById('overlay');


let missed = 0;
const listItem = ul.children;

const phrases = [
  'artificial tree',
  'candy cane',
  'christmas card',
  'christmas eve',
  'christmas carol',
  'family reunion',
  'gingerbread man',
  'hot chocolate',
  'ice skates',
  'jingle bells',
  'joyeux noel',
  'jack frost',
  'kris kringle',
  'merry christmas',
  'mince pie',
  'pumpkin pie',
  'north pole',
  'pine tree',
  'plum pudding',
  'popcorn string',
  'santa claus',
  'sleigh bells',
  'saint nicholas',
  'wrapping paper',
  'yule log',
  'christmas wish',
  'ebenezer scrooge',
  'feliz navidad',
  'gift box',
  'sliver bells',
  'snow angel',
  'winter wonderland',
  'yorkshire pudding',
  'naughty list',
  'nice list',
  'sleigh ride',
  'roasting chestnuts',
  'tree lighting',
  'gift exchange',
  'christmas dinner',
];

function startGame() {
  const div = document.getElementById('overlay');
  startGameButton.addEventListener('click', () => {
    div.style.display='none';

  })
};
startGame();



function getRandomPhraseAsArray(arr){
  return phrases[Math.floor(Math.random() * phrases.length)].split('');
};

function addPhraseToDisplay(arr) {

  for (let i = 0; i < arr.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = arr[i];
    ul.appendChild(listItem);
    if (listItem.textContent == ' ') {
      listItem.className = 'space';
    } else {
        listItem.className = 'letter';
    }
  }
}

let phraseArray = getRandomPhraseAsArray();
addPhraseToDisplay(phraseArray);

qwerty.addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON' )  {
    function checkLetter(arr){
      e.target.classList.add('chosen');
        const checkLetter = document.getElementsByClassName('letter');
        let match = null;
      for (let i = 0; i < checkLetter.length; i++) {
        if(checkLetter[i].textContent == arr) {
          checkLetter[i].classList.add('show');
          match = arr;
        }
      }
      return match;
    }
  }


  const letterFound = checkLetter(e.target.textContent);

  if (e.target.className == 'chosen'){
    e.target.disabled = true;
  }

  if(letterFound == null){
    liveHeart[missed].setAttribute("src", "images/lostHeart.png");
    missed +=1;
  }
checkWin();
})

function gameResetting(button) {
  var btnResetGame = document.createElement('BUTTON');
  btnResetGame.textContent = 'Play Again';
  btnResetGame.className = 'reset';
  overlay.appendChild(btnResetGame);

  btnResetGame.addEventListener('click', (e) => {
    overlay.style.display = 'none';
    btnResetGame.style.display = 'none';
    ul.innerHTML = '';

    function removeChosen() {
      const removeChosen = document.querySelectorAll('.chosen');
      for (let i = 0; i < removeChosen.length; i++) {
        removeChosen[i].classList.remove('chosen');
        removeChosen[i].disabled = false;
      }
    }
    removeChosen();

    const tries = document.querySelectorAll('.tries');
    for (let j = 0; j < liveHeart.length; j++) {
      liveHeart[j].className = 'tries';
      triesImg[j].src = 'images/liveHeart.png';
    }
    missed = 0;

    phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);

    overlay.querySelector('SPAN').remove();
  })
}

function revealTheWord() {
  let textWin = document.createElement('span');
  textWin.textContent = 'CORRECT!'
  textWin.className = 'finalText';
  overlay.appendChild(textWin);
}

function revealTheWordLose() {
 let textLose = document.createElement('span');
 textLose.textContent = `Sorry! The correct answer was ${phraseArray.join('').toUpperCase()}`;
 textLose.className = 'finalText';
 overlay.appendChild(textLose);
}

function checkWin(arr) {
  let liLetter = document.getElementsByClassName('letter');
  let liShow = document.getElementsByClassName('show');

  if (liLetter.length == liShow.length) {
    overlay.style.display = 'flex';
    overlay.className = 'win';
    document.querySelector("h2").innerHTML = "Congratulations, YOU WON!";

  revealTheWord();
  startGameButton.style.display = 'none';
  gameResetting();
  } else if (missed > 4 ){
  overlay.style.display = 'flex';
  overlay.className = 'lose';
  document.querySelector("h2").innerHTML = "Maybe Next Time!";

  revealTheWordLose();
  startGameButton.style.display = 'none';
  gameResetting();
  }
  }
