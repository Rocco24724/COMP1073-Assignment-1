// Different words for the story (Character, Location, Action, Object, Feeling)
var words = [
  ["a brave knight", "a clumsy wizard", "a talking cat", "a retired astronaut", "a tiny dragon"],   
  ["in a haunted library", "on a floating island", "inside a giant mushroom", "beneath the ocean"],  
  ["discovered", "accidentally invented", "boldly ate", "quietly defeated"],                         
  ["an ancient sandwich", "a glowing yo-yo", "a map made of cheese", "three invisible socks"],       
  ["surprisingly delighted", "mildly confused", "absolutely terrified", "quietly proud"]             
];

// Current index for each slot (-1 means that it has not been clicked yet)
var indices = [-1, -1, -1, -1, -1];

// Cycles one word slot forward
function cycleWord(slot) {
    indices[slot] = (indices[slot] + 1) % words[slot].length;
    document.getElementById("val-" + slot).textContent = words[slot][indices[slot]]
}

// Builds and displays story based on user choice
function buildStory() {
    // Make sure every slot has been chosen
    for (var i = 0; i < 5; i++) {
        if (indices[i] === -1) {
            alert("Please choose a word for every slot first");
            return;
        }
    }

    // Gets the choosen word from each array
    var character = words[0][indices[0]];
    var location  = words[1][indices[1]];
    var action    = words[2][indices[2]];
    var object    = words[3][indices[3]];
    var feeling   = words[4][indices[4]];

    // Combine the words into story
    var sentence = "Once upon a time, " + character + " " + location + " and " + action + " " + object + ". Afterwards, everyone felt " + feeling + ".";

    // Output sentence to page
    document.getElementById("story-text").textContent = sentence;
}

// Picks a random word for every slot and builds a story
function randomStory() {
    for (var i = 0; i < 5; i++) {
        indices[i] = Math.floor(Math.random() * words[i].length);
        document.getElementById("val-" + i).textContent = words[i][indices[i]];
    }
    buildStory();
}

// Reset Button
function resetAll() {
    for (var i = 0; i < 5; i++) {
        indices[i] = -1;
        document.getElementById("val-" + i).textContent = "???";
    }
    document.getElementById("story-text").textContent = "";
}

