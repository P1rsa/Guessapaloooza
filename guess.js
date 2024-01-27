var displayWord = document.getElementById("empty");
var submit = document.getElementById("submit");
var input = document.getElementById("letter");
var background = document.getElementById("flash");
var category = document.getElementById("category");
var guessedLetters = document.getElementById("guessedLetters");
var skip = document.getElementById("skip");
var chances = document.getElementById("chances");
var winLose = document.getElementById("winLose");

// const myName = "Huz"

// alert(myName)

const sports = [
    "football",
    "soccer",
    "hockey",
    "baseball",
    "basketball",
    "tennis",
    "biking",
    "swimming",
    "dodgeball",
    "lacrosse",
    "skiing",
    "skating",
]

const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "black",
    "white",
    "turquoise",
    "teal",
    "cyan",
    "brown",
]

const subjects = [
    "math",
    "english",
    "science",
    "geography",
    "history",
    "art",
    "drama",
    "dance",
    "gym",
    "music",
]

const languages = [
    "english",
    "french",
    "spanish",
    "german",
    "italian",
    "mandarin",
    "latin",
    "russian",
    "cantonese",
    "japanese",
    "portuguese",
    "arabic",
    "persian",
    "hindi",
    "swedish",
]

const animals = [
    "lion",
    "dog",
    "cat",
    "tiger",
    "bird",
    "cow",
    "pig",
    "giraffe",
    "penguin",
    "horse",
    "crocodile",
    "snake",
    "fish",
    "frog",
]


const topics = [sports, colors, subjects, languages, animals];

var randomTopic = Math.floor(Math.random() * topics.length);
console.log(randomTopic);

if(randomTopic === 0){
    var randomLetter = Math.floor(Math.random() * sports.length)
    console.log(randomLetter);

    var selectedWord = sports[randomLetter];
    category.innerText = "Category: Sports!"
}

else if(randomTopic === 1){
    var randomLetter = Math.floor(Math.random() * colors.length)
    console.log(randomLetter);

    var selectedWord = colors[randomLetter];
    category.innerText = "Category: Colors!"
}

else if(randomTopic === 2){
    var randomLetter = Math.floor(Math.random() * subjects.length)
    console.log(randomLetter);

    var selectedWord = subjects[randomLetter];
    category.innerText = "Category: Subjects!"
}

else if(randomTopic === 3){
    var randomLetter = Math.floor(Math.random() * subjects.length)
    console.log(randomLetter);

    var selectedWord = languages[randomLetter];
    category.innerText = "Category: Languages!"
}

else if(randomTopic === 4){
    var randomLetter = Math.floor(Math.random() * animals.length)
    console.log(randomLetter);

    var selectedWord = animals[randomLetter];
    category.innerText = "Category: Animals!"
}






var guessed = [];

var display = "";

for(let i = 0; i < selectedWord.length; i++){
    display += "_ "
}

displayWord.textContent = display;



var chancesLeft = 10;
chances.innerText = chancesLeft;

submit.addEventListener("click", () => {

chancesLeft -= 1;
console.log(chancesLeft);

if(!input.value){
    chancesLeft += 1;
    alert("Please write something in the input box.")
    return;
    
}

var theLetter = input.value.toLowerCase();

input.value = "";

if(guessed.includes(theLetter)){
    chancesLeft += 1;
    alert("You have already guessed that letter!")
    return;
}

chances.innerText = chancesLeft;

guessed.push(theLetter);
guessedLetters.textContent = guessed;
console.log(guessed);

var displayNew = "";
var wordGuessed = true;

for(let i = 0; i < selectedWord.length; i++){
    if(guessed.includes(selectedWord[i])){
        displayNew += selectedWord[i] + " ";
        

    }
    else{
        displayNew += "_ ";
        wordGuessed = false;

        
    }
}

displayWord.textContent = displayNew;

if(wordGuessed){

    alert("You did it!!!")
    if(confirm("Want to play again?")){
    background.style.backgroundColor = "green";
    setTimeout(() => {
        background.style.backgroundColor = "white";
    }, 300);
    setTimeout(() => {
        window.location.reload();
    }, 500);
}
else{
    background.style.backgroundColor = "green";
    setTimeout(() => {
        background.style.backgroundColor = "white";
    }, 300);
}

}
console.log(selectedWord);

if(chancesLeft === 0){
    console.log(selectedWord);
    console.log(typeof selectedWord);

  alert("You lose...The word was... " + selectedWord);
  if(confirm("Want to try again?")){

    background.style.backgroundColor = "red";
    setTimeout(() => {
        background.style.backgroundColor = "white";
    }, 300);
    setTimeout(() => {
        window.location.reload();
    }, 500);
}
else{
    background.style.backgroundColor = "red";
    setTimeout(() => {
        background.style.backgroundColor = "white";
    }, 300);
}
}




})

skip.addEventListener("click", () => {
    window.location.reload();
})

