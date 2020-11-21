const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const div = document.getElementById('overlay');
let missed = 0;


startGame.addEventListener('click', () => {
    div.style.display='none';
})

const phrases = [
  'buffalo bills',
  'miami dolphins',
  'new england patriots',
  'new york jets',
  'pittsburgh steelers',
  'baltimore ravens',
  'cleveland browns',
  'cincinnati bengals',
  'tennessee titans',
  'indianapolis colts',
  'houston texans',
  'jacksonville jaguars',
  'kansas city cheifs',
  'las vegas raidars',
  'denver broncos',
  'los angeles chargers',
  'dallas cowboys',
  'philadelphia eagles',
  'new york giants',
  'washington redskins',
  'chicago bears',
  'green bay packers',
  'detroit lions',
  'minnesota vikings',
  'tampa bay buccaneers',
  'new orlean saints',
  'carolina panthers',
  'atlanta falcons',
  'seattle seahawks',
  'arizona cardinals',
  'los angeles rams',
  'san francisco forty niners',
];

function getRandomPhraseAsArray(arr){
  let randomPhrase = Math.floor(Math.random() * phrases.length);
  let randomWord = arr[randomPhrase];
  return randomWord.split('');
}

const phraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr){
  for (let x = 0; x < arr.length; x++){
    let listItem = document.createElement('li');
    let ulItem = document.querySelector('#phrase ul');
    listItem.textContent = arr[x];
    ulItem.appendChild(listItem);
    if(arr[x] != ' '){
      listItem.className = 'letter';
    } else {
      listItem.className = 'space';
    }
  }
}
addPhraseToDisplay(phraseArray);