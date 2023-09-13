//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter (fighterGender,fighterColor,fighterHairColor){
    this.gender = fighterGender
    this.color = fighterColor
    this.hairColor = fighterHairColor
    this.punch = function(){
        alert ('Throws Punch!')
    }
    this.kick = function(){
        alert("Kicks!")
    }
    this.headbutt = function(){
        alert("HEADBUTS!")
    }
}

