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
