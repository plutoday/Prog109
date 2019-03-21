// Creating a simple object

// Initialize a new object that has nothing in it
var robot = { };

// Now add the properties
robot.material = "titanium";
robot.happy = true;
robot.energyLevel = 75;

// Set up variable to output to browser 
var output = document.getElementById("output");
var msg;	
// Important to remember! The last property of an object is *not* followed by a comma, and the final brace is followed by a semi-colon. 

//msg = robot.material;
msg = "Robot's energy level is: " + robot.energyLevel + "<br>" + "Robot's material is: " + robot.material;

//Display contents of objects
output.innerHTML = msg;

// To set or change an object's property, reference it like this:
//
// objectName.propertyName = value
// 
// This will set the property to that value where value can be a number, string, boolean, array...even another object!
//
var person = {
    firstName : "Xiaoxaun",
    lastName: "Li",
    age:29,
    studentId: "950672277",
    major: "Computer Science",
    gender: "F",
    interests: ["Code","Photography", "Guitar"],
    classType: "",
    getFullName: function(){
      document.write(person.firstName + " " + person.lastName);
    },
    getMajor: function(){
      document.write("<p>" + person.firstName + " " + person.lastName+ " "+ person.studentId + " " + person.major);
    },
    scholarship: 0,
  };
  
  
  
  
  function callRandomNum(){
    var randomNum = Math.floor((Math.random() * 500) +501);
    return randomNum;
  }
  person.getFullName();
  person.getMajor();
  person.scholarship = callRandomNum();
  document.write("<p>You are receiveing a scholarship in the amount of $" + person.scholarship + "</p>");
  
  function getClass() {
    classTypes = ["Warrior", "Mage", "Assassin"];
    yourType = Math.floor(Math.random() * 3);
    return classTypes[yourType];
  }
  person.classType = getClass();
  document.write("<p>Your type is " + person.classType+ "</p>");
  
  document.getElementById("favorite").innerHTML = "My favorite TV show is Sesame Street. ";
  
  document.getElementById("none").setAttribute("class", "red");
  document.querySelector(".red").setAttribute("class", "blue");