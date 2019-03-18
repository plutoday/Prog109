let role = ["Detective", "Cheerleader", 
"Athlete", "Scientist", "Hacker", "Police Officer", "Store Clerk"];
let rolePic = ["image/detective.png", "image/cheerleader.png", 
"image/racer.png", "image/scientist.png", "image/hacker.png", "image/policeman.png", "image/salesman.png"];
let race = ["Mankind", "Vampire"];
let superPowerForVampire = ["Second Life", "Teleport", "Read mind"];
let superPowerForMankind = ["Training Tiger", "Talking with birds", "flying an airplane"];
let superPower = ["Farting", "Stay up late", "Yoga"]
let skillForDetective = ["Investigation", "Stealth", "Surveillance", "Driving"];
let skillForCheerleader = ["Acting", "Dodge", "Acrobatics", "Dancing"];
let skillForAlthlete = ["Climbing","Driving","Running","Weightlifting"];
let skillForScientist = ["Investigation", "Electronics", "Psychology","Programming"];
let skillForHacker = ["Dodge", "Programming", "Electronics","Investigation"];
let skillForPoliceOfficer = ["Driving", "Running", "Streetwise", "Writing"];
let skillForStoreClerk = ["Electronics", "Play Guitar", "Driving", "Acting"];

let level = [];
let gearForDetective = ["Handgun", "Grenade"];
let gearForCheerleader = ["Cellular Phone", "Baton"];
let gearForAlthlete = ["Pick-up Truck", "Hockey Stick"];
let gearForScientist = ["Laptop", "Biohazard Suit"];
let gearForHacker = ["Laptop", "Handgun"];
let gearForPoliceOfficer = ["First Aid Kit", "Flashlight"];
let gearForStoreClerk = ["Camera", "Backpack"];

let character = {
    race : "",
    role : "",
    skills : "",
    gears: "",
    speed : 0,
    age: 0,
    intelligence : 0,
    strength: 0,
    hunger: 0,
    level: 0,
    superPower: "",
};

const roleV = document.querySelector("#role");
const raceV = document.querySelector("#race");
const levelV = document.querySelector("#level");
const skill1V = document.querySelector("#skill1");
const skill2V = document.querySelector("#skill2");
const skill3V = document.querySelector("#skill3");
const skill4V = document.querySelector("#skill4");
const intelligenceV = document.querySelector("#intelligence");
const strengthV = document.querySelector("#strength");
const hungerV = document.querySelector("#hunger");
const gear1V = document.querySelector("#gear1");
const gear2V = document.querySelector("#gear2");
const speedV = document.querySelector("#speed");
const ageV = document.querySelector("#age");
const superV = document.querySelector("#superPower");
let pic = document.querySelector("#chpic");



function getMyCharacter() {
    character.race = getRace();
    character.role = getRole();
    character.age = getAge();
    character.skills = getSkills();
    character.gears = getGears();
    character.speed = getSpeed();
    character.intelligence = getIntelligence();
    character.strength = getStrength();
    character.hunger = getHunger();
    character.level = getLevel();
    character.superPower = getSuperPower();

    render();

};


function render() {
    roleV.textContent = character.role;
    raceV.textContent = character.race;
    levelV.textContent = character.level;
    skill1V.textContent = character.skills[0];
    skill2V.textContent = character.skills[1];
    skill3V.textContent = character.skills[2];
    skill4V.textContent = character.skills[3];
    intelligenceV.textContent = character.intelligence;
    intelligenceV.style.width = Math.floor(character.intelligence*1.5) + "px";
    strengthV.textContent = character.strength;
    strengthV.style.width = Math.floor(character.strength*1.5) + "px";
    hungerV.textContent = character.hunger;
    hungerV.style.width = Math.floor(character.hunger*1.5) + "px";
    gear1V.textContent = character.gears[0];
    gear2V.textContent = character.gears[1];
    speedV.textContent = character.speed;
    speedV.style.width = Math.floor(character.speed*1.5) + "px";
    ageV.textContent = character.age;
    superV.textContent = character.superPower;
}


function getSuperPower() {
    if (character.role == "Detective"){
        if(character.race == "Mankind"){
            return superPowerForMankind[Math.floor(Math.random()*3)];
        }else{
            return superPowerForVampire[Math.floor(Math.random()*3)];
        }
    } else{
        return superPower[Math.floor(Math.random()*3)];
    }

}


function getLevel() {
    return Math.floor(Math.random()*3+2);
};

function getRace() {
    const index = Math.floor(Math.random()*2);
    return race[index];
};
function getRole() {
    const index = Math.floor(Math.random()*7);
    pic.src = rolePic[index];
    return role[index];
};
function getSkills() {
    switch (character.role){
        case "Detective":
        return skillForDetective;
        case "Cheerleader":
        return skillForCheerleader;
        case "Athlete":
        return skillForAlthlete;
        case "Scientist":
        return skillForScientist;
        case "Hacker":
        return skillForHacker;
        case "Police Officer":
        return skillForPoliceOfficer;
        case "Store Clerk":
        return skillForStoreClerk;
    }

};
function getGears() {
    switch (character.role){
        case "Detective":
        return gearForDetective;
        case "Cheerleader":
        return gearForCheerleader;
        case "Athlete":
        return gearForAlthlete;
        case "Scientist":
        return gearForScientist;
        case "Hacker":
        return gearForHacker;
        case "Police Officer":
        return gearForPoliceOfficer;
        case "Store Clerk":
        return gearForStoreClerk;
    }

};
function getHunger() {
    const hunger = Math.floor(Math.random()*45+56);
    return hunger;
};
function getSpeed() {
    switch (character.role){
        case "Detective":
        return Math.floor(Math.random()*20+81);
        case "Cheerleader":
        return Math.floor(Math.random()*20+61);
        case "Athlete":
        return Math.floor(Math.random()*15+86);
        case "Scientist":
        return Math.floor(Math.random()*20+51);
        case "Hacker":
        return Math.floor(Math.random()*20+61);
        case "Police Officer":
        return Math.floor(Math.random()*20+81);
        case "Store Clerk":
        return Math.floor(Math.random()*20+56);
    }

};
function getAge() {
    switch (character.role){
        case "Detective":
        return Math.floor(Math.random()*20+26);
        case "Cheerleader":
        return Math.floor(Math.random()*6+16);
        case "Athlete":
        return Math.floor(Math.random()*15+16);
        case "Scientist":
        return Math.floor(Math.random()*40+31);
        case "Hacker":
        return Math.floor(Math.random()*20+20);
        case "Police Officer":
        return Math.floor(Math.random()*20+22);
        case "Store Clerk":
        return Math.floor(Math.random()*20+17);
    }
};

function getIntelligence() {
    switch (character.role){
        case "Detective":
        return Math.floor(Math.random()*20+81);
        case "Cheerleader":
        return Math.floor(Math.random()*20+41);
        case "Athlete":
        return Math.floor(Math.random()*20+41);
        case "Scientist":
        return Math.floor(Math.random()*20+76);
        case "Hacker":
        return Math.floor(Math.random()*20+78);
        case "Police Officer":
        return Math.floor(Math.random()*20+51);
        case "Store Clerk":
        return Math.floor(Math.random()*20+41);
    }
};

function getStrength() {
    switch (character.role){
        case "Detective":
        return Math.floor(Math.random()*20+71);
        case "Cheerleader":
        return Math.floor(Math.random()*20+31);
        case "Athlete":
        return Math.floor(Math.random()*15+86);
        case "Scientist":
        return Math.floor(Math.random()*20+31);
        case "Hacker":
        return Math.floor(Math.random()*20+41);
        case "Police Officer":
        return Math.floor(Math.random()*20+66);
        case "Store Clerk":
        return Math.floor(Math.random()*20+36);
    }

};


