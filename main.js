const correct = document.querySelector('.correct');
const incorrect = document.querySelector('.incorrect');
const inputField = document.getElementById('inputValue');
let random = Math.floor(Math.random() * 2);
let champImage = document.getElementById('champImage');
let scoreValue = document.getElementById('score');
let currentChamp = null;
let i = 100;
let score = 0;
let enterPressed = false;

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
}

inputField.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        enterPressed = true;
        getValue();
    }
});

const skipButton = document.getElementById('skipButton');
skipButton.addEventListener('click', skipChampion);

function startGame() {
    onTimer();
    reset();
    getRandomChampion();
    getSyllable();
}

function skipChampion() {
    reset();
    getRandomChampion();
    getSyllable();
}

function onTimer() {
    document.getElementById("start").disabled = true;
    document.getElementById('timer').innerHTML = i;
    i--;
    if (i < 0) {
      reset();
      document.getElementById('timer').innerHTML = "Congratulations! Your score is " + score;
      document.getElementById("start").disabled = false;
      i = 100;
    }
    else {
      setTimeout(onTimer, 1000);
    }
}

function getRandomChampion() {
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
        const champsArray = Object.keys(data);
        let randomChampIndex = Math.floor(Math.random() * champsArray.length);
        currentChamp = data[champsArray[randomChampIndex]];
        })
        .catch(error => console.error(error));
}

async function getSyllable() {
    document.getElementById("words").disabled = true;
    const response = await fetch('./data.json');
    const data = await response.json();
    
    
    const ul = document.getElementById("list");
    let li = document.createElement("li");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");

    console.log(currentChamp.name);

    li.appendChild(document.createTextNode(`${currentChamp.tags[0]}`));
    li1.appendChild(document.createTextNode(`${currentChamp.tags[1]}`));
    li2.appendChild(document.createTextNode(`${currentChamp.tags[2]}`));
    li3.appendChild(document.createTextNode(`${currentChamp.tags[3]}`));
    li4.appendChild(document.createTextNode(`${currentChamp.tags[4]}`));

    li.setAttribute("id", "newSyllable"); 

    ul.appendChild(li);
    let delay1 = await delay(1000);
    ul.appendChild(li1);
    let delay2 = await delay(1000);
    ul.appendChild(li2);
    let delay3 = await delay(1000);
    ul.appendChild(li3);
    let delay4 = await delay(1000);
    ul.appendChild(li4);

    document.getElementById("start").disabled = false;
}

async function getValue() {
    if (!enterPressed) {
        return;
    }

    enterPressed = false;

    document.getElementById("start").disabled = true

    let inputValue = document.getElementById('inputValue').value;

    if (inputValue.toLowerCase() == 'asol') {
      inputValue = 'AurelionSol';
    } else if (inputValue.toLowerCase() == 'blitz') {
      inputValue = 'Blitzcrank';
    } else if (inputValue.toLowerCase() == 'cait') {
      inputValue = 'Caitlyn';
    } else if (inputValue.toLowerCase() == 'cass') {
      inputValue = 'Cassiopeia';
    } else if (inputValue.toLowerCase() == 'cho') {
      inputValue = "Cho'gath";
    } else if (inputValue.toLowerCase() == 'mundo') {
      inputValue = 'DrMundo';
    } else if (inputValue.toLowerCase() == 'eve') {
      inputValue = 'Evelynn';
    } else if (inputValue.toLowerCase() == 'ez') {
      inputValue = 'Ezreal';
    } else if (inputValue.toLowerCase() == 'fidd') {
      inputValue = 'Fiddlesticks';
    } else if (inputValue.toLowerCase() == 'gp') {
      inputValue = 'Gangplank';
    } else if (inputValue.toLowerCase() == 'hec') {
      inputValue = 'Hecarim';
    } else if (inputValue.toLowerCase() == 'heim') {
      inputValue = 'Heimerdinger';
    } else if (inputValue.toLowerCase() == 'j4') {
      inputValue = 'JarvanIV';
    } else if (inputValue.toLowerCase() == 'kass') {
      inputValue = 'Kassadin';
    } else if (inputValue.toLowerCase() == 'kat') {
      inputValue = 'Katarina';
    } else if (inputValue.toLowerCase() == 'kha') {
      inputValue = "Kha'zix";
    } else if (inputValue.toLowerCase() == 'kog') {
      inputValue = "Kog'maw";
    } else if (inputValue.toLowerCase() == 'lb') {
      inputValue = 'Leblanc';
    } else if (inputValue.toLowerCase() == 'lee') {
      inputValue = 'LeeSin';
    } else if (inputValue.toLowerCase() == 'liss') {
      inputValue = 'Lissandra';
    } else if (inputValue.toLowerCase() == 'malph') {
      inputValue = 'Malphite';
    } else if (inputValue.toLowerCase() == 'malz') {
      inputValue = 'Malzahar';
    } else if (inputValue.toLowerCase() == 'mao') {
      inputValue = 'Maokai';
    } else if (inputValue.toLowerCase() == 'yi') {
      inputValue = 'MasterYi';
    } else if (inputValue.toLowerCase() == 'mf') {
      inputValue = 'MissFortune';
    } else if (inputValue.toLowerCase() == 'wu') {
      inputValue = 'MonkeyKing';
    } else if (inputValue.toLowerCase() == 'wukong') {
      inputValue = 'MonkeyKing';
    } else if (inputValue.toLowerCase() == 'naut') {
      inputValue = 'Nautilus';
    } else if (inputValue.toLowerCase() == 'nid') {
      inputValue = 'Nidalee';
    } else if (inputValue.toLowerCase() == 'noc') {
      inputValue = 'Nocturne';
    } else if (inputValue.toLowerCase() == 'ori') {
      inputValue = 'Orianna';
    } else if (inputValue.toLowerCase() == 'panth') {
      inputValue = 'Pantheon';
    } else if (inputValue.toLowerCase() == 'sej') {
      inputValue = 'Sejuani';
    } else if (inputValue.toLowerCase() == 'sera') {
      inputValue = 'Seraphine';
    } else if (inputValue.toLowerCase() == 'shyv') {
      inputValue = 'Shyvana';
    } else if (inputValue.toLowerCase() == 'raka') {
      inputValue = 'Soraka';
    } else if (inputValue.toLowerCase() == 'tk') {
      inputValue = 'TahmKench';
    } else if (inputValue.toLowerCase() == 'tali') {
      inputValue = 'Taliyah';
    } else if (inputValue.toLowerCase() == 'trist') {
      inputValue = 'Tristana';
    } else if (inputValue.toLowerCase() == 'trynd') {
      inputValue = 'Tryndamere';
    } else if (inputValue.toLowerCase() == 'tf') {
      inputValue = 'TwistedFate';
    } else if (inputValue.toLowerCase() == 'vlad') {
      inputValue = 'Vladimir';
    } else if (inputValue.toLowerCase() == 'voli') {
      inputValue = 'Volibear';
    } else if (inputValue.toLowerCase() == 'ww') {
      inputValue = 'Warwick';
    } else if (inputValue.toLowerCase() == 'xin') {
      inputValue = 'XinZhao';
    }


    let input = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
  
    
    // Remove spaces and apostrophes from the input
    input = input.replace(/'/g,'');

    champImage.data = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${input}_${random}.jpg`;

    if (inputValue.toLowerCase() === currentChamp.id.toLowerCase()) {
        correct.style.display = 'flex';
        incorrect.style.display = 'none';
        score += 1;
        scoreValue.innerHTML = `Score: ${score}`;
        reset();
        getRandomChampion();
        await getSyllable();
    } else if (inputValue === '') {
        correct.style.display = 'none';
        incorrect.style.display = 'none';
    } else {
        correct.style.display = 'none';
        incorrect.style.display = 'flex';
        reset();
        await getSyllable();    
    }
}

function reset() {
    const ul = document.getElementById("list");
    inputField.value = '';
    ul.innerHTML = '';
    score = 0;
}








