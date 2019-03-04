let yourName = prompt("Please let input your name");

let yourChoice = confirm("Do you wish to contine?");
if(yourChoice == true){
  alert("You wish to continue. Yay!");
  startGame();
}else{
  alert("We are sorry that you don't want to play! Have fun!");
}

const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", startGame, false);

function startGame(){
    let myNumber = Math.floor(Math.random()*100 +1);
    let yourNumber = 0;
    let yourNumbers = [];
    while(myNumber != yourNumber && yourNumber!= null){
    yourNumber = prompt("Please guess my number from 1-100:");
    yourNumbers.push(yourNumber);
    if (myNumber == yourNumber){
        if (yourNumbers.length <= 10){
        let textWin = "Yes, the number is " + myNumber + ", you guessed " + yourNumbers.length + " times, excellent job, " + yourName + "!";
        alert(textWin);
        } else if (yourNumbers.length <= 15){
            let textWin = "Yes, the number is " + myNumber + ", you guessed " + yourNumbers.length + " times, good job, " + yourName + "!";
            alert(textWin);
        }
        else {
            let text = "Yes, the number is " + myNumber + ", but you guessed " + yourNumbers.length + " times, " + yourName + ", you might need practice your guessing skill!";
        alert(text);
        }
        level2();
    }else if (yourNumber > myNumber && yourNumber!= null){
        let text = yourNumber +" is bigger than my number";
        alert(text);
    } else if (yourNumber < myNumber && yourNumber!= null) 
    {
        let text = yourNumber +" is smaller than my number";
        alert(text);
    }else{
        alert("You have quit the game, thanks!");
    }
    }

}

function level2(){
    alert("Welcome to level 2, you and I will both get a random number, the bigest number wins.");
    let myNumber = Math.floor(Math.random()*10 +1);
    let yourNumber = Math.floor(Math.random()*10 +1);
    let text = "Your number is " + yourNumber + ". Do you wanna change it?"
    let yourChoice = confirm(text);
    if(yourChoice == true){
        yourNumber = Math.floor(Math.random()*10 +1);
    }
    if (myNumber == yourNumber){
        let text = "We both got " + myNumber  + ", no winers!";
        alert(text);
    }else if (yourNumber > myNumber){
        let text = "Your number is " + yourNumber +" is bigger than my number " + myNumber + ", you win!";
        alert(text);
    } else{
        let text = "Your number is " + yourNumber +" is smaller than my number " + myNumber + ", you lose!";
        alert(text);
    }

    
}

