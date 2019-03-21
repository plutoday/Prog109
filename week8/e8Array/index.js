var sillySentence = prompt("Please input at least five words");
checklimit();

function checklimit(){
    if (sillySentence.length < 25){
        sillySentence = prompt("Please input at least five words");
    }
    else {
        document.write("<p> The original sentence is " + sillySentence + "</p>");
        document.write("<p> The original sentence in upper case is " + sillySentence.toUpperCase()+ "</p>");
        document.write("<p> The original sentence in lower case is " + sillySentence.toLowerCase()+ "</p>");
        document.write("<p> The total characters in the sentence is " + sillySentence.length + "</p>");
        document.write("<p> The characters between index 5 and index 10 is " + sillySentence.substring(5,10) + "</p>");
        document.write("<p> The 5 characters starting from position 8 is " + sillySentence.substr(8,5) + "</p>");
        var myString = "Apple Peach Green Red Pink Water Banana Juice Hotpot BBQ Pasta";
        var newSentencce = myString.concat(sillySentence);
        newSentencce = newSentencce.replace(".", "");
        newSentencce = newSentencce.replace(",", "");
        var myArray = newSentencce.split(" ");
        document.write("<p> The new array is " + myArray + "</p>");
        document.write("<p> The total number of items in new array is " + myArray.length + "</p>");
        myArray.splice(0, 1); 
        document.write("<p> Remove first element, the new array is " + myArray + "</p>");
        myArray.push("banana");
        document.write("<p> Add banana, the new array is " + myArray + "</p>");
        myArray = myArray.reverse();
        document.write("<p> After reverse, the new array is " + myArray + "</p>");
        myArray[1]="stardust";
        document.write("<p> After change 2nd position, the new array is " + myArray + "</p>");
        document.write("<p> After sorting, the new array is " + myArray.sort() + "</p>");
        }
}

